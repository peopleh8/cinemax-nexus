export const MAX_IMAGE_SIZE = 5 * 1024 * 1024

export enum StorageFolder {
  MOVIE_POSTERS = 'movie-posters',
  AVATARS = 'avatars',
}

const imageExtensions: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

export const getImageExtension = (mimeType: string): string | null => {
  return imageExtensions[mimeType] ?? null
}

export const isSupportedImageMimeType = (mimeType: string): boolean => {
  return getImageExtension(mimeType) !== null
}
