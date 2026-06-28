import { ConfigService } from '@nestjs/config';
import { StorageFolder } from "../../common/constants";
import { StoredFile, UploadedFile } from "../../common/types";
export declare class StorageService {
    private readonly configService;
    private readonly uploadsDirectory;
    constructor(configService: ConfigService);
    uploadImage(file: UploadedFile, folder: StorageFolder): Promise<StoredFile>;
    getPublicUrl(storageKey: string): string;
    deleteFile(storageKey: string): Promise<void>;
    private resolveStoragePath;
}
