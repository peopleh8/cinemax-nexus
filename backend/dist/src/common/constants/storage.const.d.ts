export declare const MAX_IMAGE_SIZE: number;
export declare enum StorageFolder {
    MOVIE_POSTERS = "movie-posters",
    AVATARS = "avatars"
}
export declare const getImageExtension: (mimeType: string) => string | null;
export declare const isSupportedImageMimeType: (mimeType: string) => boolean;
