"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueSlug = void 0;
const create_slug_util_1 = require("./create-slug.util");
const generateUniqueSlug = async (value, findBySlug) => {
    const baseSlug = (0, create_slug_util_1.createSlug)(value);
    let slug = baseSlug;
    let counter = 2;
    while (await findBySlug(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter += 1;
    }
    return slug;
};
exports.generateUniqueSlug = generateUniqueSlug;
//# sourceMappingURL=generate-unique-slug.util.js.map