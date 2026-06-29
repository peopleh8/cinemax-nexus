"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExtension = void 0;
const getFileExtension = (name) => {
    const lastDotIndex = name.lastIndexOf('.');
    if (lastDotIndex === -1 || lastDotIndex === name.length - 1) {
        return null;
    }
    return name.substring(lastDotIndex + 1);
};
exports.getFileExtension = getFileExtension;
//# sourceMappingURL=get-file-extension.util.js.map