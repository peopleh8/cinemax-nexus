import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Country: "Country";
    readonly Genre: "Genre";
    readonly Movie: "Movie";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CountryScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly code: "code";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const GenreScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum];
export declare const MovieScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly originalTitle: "originalTitle";
    readonly excerpt: "excerpt";
    readonly description: "description";
    readonly releaseDate: "releaseDate";
    readonly releaseYear: "releaseYear";
    readonly duration: "duration";
    readonly ageRating: "ageRating";
    readonly status: "status";
    readonly ratingAverage: "ratingAverage";
    readonly ratingCount: "ratingCount";
    readonly reviewCount: "reviewCount";
    readonly viewCount: "viewCount";
    readonly isFeatured: "isFeatured";
    readonly publishedAt: "publishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
