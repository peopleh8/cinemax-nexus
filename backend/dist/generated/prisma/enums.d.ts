export declare const CreditRole: {
    readonly ACTOR: "ACTOR";
    readonly DIRECTOR: "DIRECTOR";
    readonly WRITER: "WRITER";
    readonly PRODUCER: "PRODUCER";
    readonly EXECUTIVE_PRODUCER: "EXECUTIVE_PRODUCER";
    readonly COMPOSER: "COMPOSER";
    readonly CINEMATOGRAPHER: "CINEMATOGRAPHER";
    readonly EDITOR: "EDITOR";
};
export type CreditRole = (typeof CreditRole)[keyof typeof CreditRole];
export declare const MovieStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type MovieStatus = (typeof MovieStatus)[keyof typeof MovieStatus];
export declare const UserRole: {
    readonly USER: "USER";
    readonly EDITOR: "EDITOR";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
