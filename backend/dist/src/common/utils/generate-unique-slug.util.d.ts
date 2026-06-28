type FindBySlug = (slug: string) => Promise<unknown>;
export declare const generateUniqueSlug: (value: string, findBySlug: FindBySlug) => Promise<string>;
export {};
