import { BadRequestException, Injectable, InternalServerErrorException, PayloadTooLargeException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'node:crypto'
import { mkdir, unlink, writeFile } from 'node:fs/promises'
import { isAbsolute, relative, resolve } from 'node:path'
import { MAX_IMAGE_SIZE, StorageFolder } from 'src/common/constants'
import { StoredFile, UploadedFile } from 'src/common/types'
import { getFileExtension } from 'src/common/utils'

@Injectable()
export class StorageService {
  private readonly uploadsDirectory = resolve(process.cwd(), 'uploads')

  constructor(private readonly configService: ConfigService) {}

  async uploadImage(file: UploadedFile, folder: StorageFolder): Promise<StoredFile> {
    const extension = getFileExtension(file.originalname)

    if (!extension) {
      throw new BadRequestException('Only JPG, PNG and WEBP images are supported')
    }

    if (file.size > MAX_IMAGE_SIZE) {
      throw new PayloadTooLargeException('Image must not exceed 5 MB')
    }

    const filename = `${randomUUID()}.${extension}`
    const storageKey = `${folder}/${filename}`

    const filePath = this.resolveStoragePath(storageKey)

    try {
      await mkdir(resolve(filePath, '..'), { recursive: true })
      await writeFile(filePath, file.buffer)
    } catch {
      throw new InternalServerErrorException('Failed to save image')
    }

    return {
      storageKey,
      url: this.getPublicUrl(storageKey),
    }
  }

  getPublicUrl(storageKey: string): string {
    const appUrl = this.configService.getOrThrow<string>('APP_URL').replace(/\/+$/, '')

    return `${appUrl}/uploads/${storageKey}`
  }

  async deleteFile(storageKey: string): Promise<void> {
    const filePath = this.resolveStoragePath(storageKey)

    try {
      await unlink(filePath)
    } catch (error: unknown) {
      const isNotFound = typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT'

      if (!isNotFound) {
        throw new InternalServerErrorException('Failed to delete stored file')
      }
    }
  }

  private resolveStoragePath(storageKey: string): string {
    const filePath = resolve(this.uploadsDirectory, storageKey)
    const pathFromUploads = relative(this.uploadsDirectory, filePath)

    if (!pathFromUploads || pathFromUploads.startsWith('..') || isAbsolute(pathFromUploads)) {
      throw new BadRequestException('Invalid storage key')
    }

    return filePath
  }
}
