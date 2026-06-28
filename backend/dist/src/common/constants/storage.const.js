"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedImageMimeType = exports.getImageExtension = exports.StorageFolder = exports.MAX_IMAGE_SIZE = void 0;
exports.MAX_IMAGE_SIZE = 5 * 1024 * 1024;
var StorageFolder;
(function (StorageFolder) {
    StorageFolder["MOVIE_POSTERS"] = "movie-posters";
    StorageFolder["AVATARS"] = "avatars";
})(StorageFolder || (exports.StorageFolder = StorageFolder = {}));
const imageExtensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
};
const getImageExtension = (mimeType) => {
    return imageExtensions[mimeType] ?? null;
};
exports.getImageExtension = getImageExtension;
const isSupportedImageMimeType = (mimeType) => {
    return (0, exports.getImageExtension)(mimeType) !== null;
};
exports.isSupportedImageMimeType = isSupportedImageMimeType;
//# sourceMappingURL=storage.const.js.map