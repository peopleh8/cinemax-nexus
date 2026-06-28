import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Country: "Country";
    readonly Genre: "Genre";
    readonly MovieCredit: "MovieCredit";
    readonly MoviePoster: "MoviePoster";
    readonly Movie: "Movie";
    readonly Person: "Person";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "country" | "genre" | "movieCredit" | "moviePoster" | "movie" | "person";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Country: {
            payload: Prisma.$CountryPayload<ExtArgs>;
            fields: Prisma.CountryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findFirst: {
                    args: Prisma.CountryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                findMany: {
                    args: Prisma.CountryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                create: {
                    args: Prisma.CountryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                createMany: {
                    args: Prisma.CountryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                delete: {
                    args: Prisma.CountryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                update: {
                    args: Prisma.CountryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>[];
                };
                upsert: {
                    args: Prisma.CountryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPayload>;
                };
                aggregate: {
                    args: Prisma.CountryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountry>;
                };
                groupBy: {
                    args: Prisma.CountryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryCountAggregateOutputType> | number;
                };
            };
        };
        Genre: {
            payload: Prisma.$GenrePayload<ExtArgs>;
            fields: Prisma.GenreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GenreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                findFirst: {
                    args: Prisma.GenreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                findMany: {
                    args: Prisma.GenreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>[];
                };
                create: {
                    args: Prisma.GenreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                createMany: {
                    args: Prisma.GenreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>[];
                };
                delete: {
                    args: Prisma.GenreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                update: {
                    args: Prisma.GenreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                deleteMany: {
                    args: Prisma.GenreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GenreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>[];
                };
                upsert: {
                    args: Prisma.GenreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GenrePayload>;
                };
                aggregate: {
                    args: Prisma.GenreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGenre>;
                };
                groupBy: {
                    args: Prisma.GenreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GenreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GenreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GenreCountAggregateOutputType> | number;
                };
            };
        };
        MovieCredit: {
            payload: Prisma.$MovieCreditPayload<ExtArgs>;
            fields: Prisma.MovieCreditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MovieCreditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MovieCreditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                findFirst: {
                    args: Prisma.MovieCreditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MovieCreditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                findMany: {
                    args: Prisma.MovieCreditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>[];
                };
                create: {
                    args: Prisma.MovieCreditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                createMany: {
                    args: Prisma.MovieCreditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MovieCreditCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>[];
                };
                delete: {
                    args: Prisma.MovieCreditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                update: {
                    args: Prisma.MovieCreditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                deleteMany: {
                    args: Prisma.MovieCreditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MovieCreditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MovieCreditUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>[];
                };
                upsert: {
                    args: Prisma.MovieCreditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovieCreditPayload>;
                };
                aggregate: {
                    args: Prisma.MovieCreditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovieCredit>;
                };
                groupBy: {
                    args: Prisma.MovieCreditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovieCreditGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MovieCreditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovieCreditCountAggregateOutputType> | number;
                };
            };
        };
        MoviePoster: {
            payload: Prisma.$MoviePosterPayload<ExtArgs>;
            fields: Prisma.MoviePosterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MoviePosterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MoviePosterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                findFirst: {
                    args: Prisma.MoviePosterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MoviePosterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                findMany: {
                    args: Prisma.MoviePosterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>[];
                };
                create: {
                    args: Prisma.MoviePosterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                createMany: {
                    args: Prisma.MoviePosterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MoviePosterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>[];
                };
                delete: {
                    args: Prisma.MoviePosterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                update: {
                    args: Prisma.MoviePosterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                deleteMany: {
                    args: Prisma.MoviePosterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MoviePosterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MoviePosterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>[];
                };
                upsert: {
                    args: Prisma.MoviePosterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePosterPayload>;
                };
                aggregate: {
                    args: Prisma.MoviePosterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMoviePoster>;
                };
                groupBy: {
                    args: Prisma.MoviePosterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoviePosterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MoviePosterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoviePosterCountAggregateOutputType> | number;
                };
            };
        };
        Movie: {
            payload: Prisma.$MoviePayload<ExtArgs>;
            fields: Prisma.MovieFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MovieFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                findFirst: {
                    args: Prisma.MovieFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                findMany: {
                    args: Prisma.MovieFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>[];
                };
                create: {
                    args: Prisma.MovieCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                createMany: {
                    args: Prisma.MovieCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>[];
                };
                delete: {
                    args: Prisma.MovieDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                update: {
                    args: Prisma.MovieUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                deleteMany: {
                    args: Prisma.MovieDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MovieUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>[];
                };
                upsert: {
                    args: Prisma.MovieUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoviePayload>;
                };
                aggregate: {
                    args: Prisma.MovieAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovie>;
                };
                groupBy: {
                    args: Prisma.MovieGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovieGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MovieCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovieCountAggregateOutputType> | number;
                };
            };
        };
        Person: {
            payload: Prisma.$PersonPayload<ExtArgs>;
            fields: Prisma.PersonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PersonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                findFirst: {
                    args: Prisma.PersonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                findMany: {
                    args: Prisma.PersonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>[];
                };
                create: {
                    args: Prisma.PersonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                createMany: {
                    args: Prisma.PersonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>[];
                };
                delete: {
                    args: Prisma.PersonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                update: {
                    args: Prisma.PersonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                deleteMany: {
                    args: Prisma.PersonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PersonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>[];
                };
                upsert: {
                    args: Prisma.PersonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PersonPayload>;
                };
                aggregate: {
                    args: Prisma.PersonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerson>;
                };
                groupBy: {
                    args: Prisma.PersonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PersonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export declare const MovieCreditScalarFieldEnum: {
    readonly id: "id";
    readonly movieId: "movieId";
    readonly personId: "personId";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MovieCreditScalarFieldEnum = (typeof MovieCreditScalarFieldEnum)[keyof typeof MovieCreditScalarFieldEnum];
export declare const MoviePosterScalarFieldEnum: {
    readonly id: "id";
    readonly movieId: "movieId";
    readonly url: "url";
    readonly storageKey: "storageKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MoviePosterScalarFieldEnum = (typeof MoviePosterScalarFieldEnum)[keyof typeof MoviePosterScalarFieldEnum];
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
export declare const PersonScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly name: "name";
    readonly bio: "bio";
    readonly birthDate: "birthDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum];
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumCreditRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditRole'>;
export type ListEnumCreditRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditRole[]'>;
export type EnumMovieStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovieStatus'>;
export type ListEnumMovieStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovieStatus[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    country?: Prisma.CountryOmit;
    genre?: Prisma.GenreOmit;
    movieCredit?: Prisma.MovieCreditOmit;
    moviePoster?: Prisma.MoviePosterOmit;
    movie?: Prisma.MovieOmit;
    person?: Prisma.PersonOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
