export declare const MovieStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type MovieStatus = (typeof MovieStatus)[keyof typeof MovieStatus];
