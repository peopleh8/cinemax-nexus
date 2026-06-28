import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GenreModel = runtime.Types.Result.DefaultSelection<Prisma.$GenrePayload>;
export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null;
    _avg: GenreAvgAggregateOutputType | null;
    _sum: GenreSumAggregateOutputType | null;
    _min: GenreMinAggregateOutputType | null;
    _max: GenreMaxAggregateOutputType | null;
};
export type GenreAvgAggregateOutputType = {
    id: number | null;
};
export type GenreSumAggregateOutputType = {
    id: number | null;
};
export type GenreMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GenreMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GenreCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GenreAvgAggregateInputType = {
    id?: true;
};
export type GenreSumAggregateInputType = {
    id?: true;
};
export type GenreMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GenreMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GenreCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GenreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithRelationInput | Prisma.GenreOrderByWithRelationInput[];
    cursor?: Prisma.GenreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GenreCountAggregateInputType;
    _avg?: GenreAvgAggregateInputType;
    _sum?: GenreSumAggregateInputType;
    _min?: GenreMinAggregateInputType;
    _max?: GenreMaxAggregateInputType;
};
export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
    [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGenre[P]> : Prisma.GetScalarType<T[P], AggregateGenre[P]>;
};
export type GenreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithAggregationInput | Prisma.GenreOrderByWithAggregationInput[];
    by: Prisma.GenreScalarFieldEnum[] | Prisma.GenreScalarFieldEnum;
    having?: Prisma.GenreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GenreCountAggregateInputType | true;
    _avg?: GenreAvgAggregateInputType;
    _sum?: GenreSumAggregateInputType;
    _min?: GenreMinAggregateInputType;
    _max?: GenreMaxAggregateInputType;
};
export type GenreGroupByOutputType = {
    id: number;
    slug: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GenreCountAggregateOutputType | null;
    _avg: GenreAvgAggregateOutputType | null;
    _sum: GenreSumAggregateOutputType | null;
    _min: GenreMinAggregateOutputType | null;
    _max: GenreMaxAggregateOutputType | null;
};
export type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GenreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GenreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GenreGroupByOutputType[P]>;
}>>;
export type GenreWhereInput = {
    AND?: Prisma.GenreWhereInput | Prisma.GenreWhereInput[];
    OR?: Prisma.GenreWhereInput[];
    NOT?: Prisma.GenreWhereInput | Prisma.GenreWhereInput[];
    id?: Prisma.IntFilter<"Genre"> | number;
    slug?: Prisma.StringFilter<"Genre"> | string;
    name?: Prisma.StringFilter<"Genre"> | string;
    description?: Prisma.StringNullableFilter<"Genre"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
    movies?: Prisma.MovieListRelationFilter;
};
export type GenreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    movies?: Prisma.MovieOrderByRelationAggregateInput;
};
export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.GenreWhereInput | Prisma.GenreWhereInput[];
    OR?: Prisma.GenreWhereInput[];
    NOT?: Prisma.GenreWhereInput | Prisma.GenreWhereInput[];
    name?: Prisma.StringFilter<"Genre"> | string;
    description?: Prisma.StringNullableFilter<"Genre"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
    movies?: Prisma.MovieListRelationFilter;
}, "id" | "slug">;
export type GenreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GenreCountOrderByAggregateInput;
    _avg?: Prisma.GenreAvgOrderByAggregateInput;
    _max?: Prisma.GenreMaxOrderByAggregateInput;
    _min?: Prisma.GenreMinOrderByAggregateInput;
    _sum?: Prisma.GenreSumOrderByAggregateInput;
};
export type GenreScalarWhereWithAggregatesInput = {
    AND?: Prisma.GenreScalarWhereWithAggregatesInput | Prisma.GenreScalarWhereWithAggregatesInput[];
    OR?: Prisma.GenreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GenreScalarWhereWithAggregatesInput | Prisma.GenreScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Genre"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Genre"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Genre"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Genre"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Genre"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Genre"> | Date | string;
};
export type GenreCreateInput = {
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.MovieCreateNestedManyWithoutGenresInput;
};
export type GenreUncheckedCreateInput = {
    id?: number;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.MovieUncheckedCreateNestedManyWithoutGenresInput;
};
export type GenreUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.MovieUpdateManyWithoutGenresNestedInput;
};
export type GenreUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.MovieUncheckedUpdateManyWithoutGenresNestedInput;
};
export type GenreCreateManyInput = {
    id?: number;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GenreUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenreUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GenreAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type GenreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GenreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GenreSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type GenreListRelationFilter = {
    every?: Prisma.GenreWhereInput;
    some?: Prisma.GenreWhereInput;
    none?: Prisma.GenreWhereInput;
};
export type GenreOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type GenreCreateNestedManyWithoutMoviesInput = {
    create?: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput> | Prisma.GenreCreateWithoutMoviesInput[] | Prisma.GenreUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.GenreCreateOrConnectWithoutMoviesInput | Prisma.GenreCreateOrConnectWithoutMoviesInput[];
    connect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
};
export type GenreUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput> | Prisma.GenreCreateWithoutMoviesInput[] | Prisma.GenreUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.GenreCreateOrConnectWithoutMoviesInput | Prisma.GenreCreateOrConnectWithoutMoviesInput[];
    connect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
};
export type GenreUpdateManyWithoutMoviesNestedInput = {
    create?: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput> | Prisma.GenreCreateWithoutMoviesInput[] | Prisma.GenreUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.GenreCreateOrConnectWithoutMoviesInput | Prisma.GenreCreateOrConnectWithoutMoviesInput[];
    upsert?: Prisma.GenreUpsertWithWhereUniqueWithoutMoviesInput | Prisma.GenreUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    disconnect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    delete?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    connect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    update?: Prisma.GenreUpdateWithWhereUniqueWithoutMoviesInput | Prisma.GenreUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?: Prisma.GenreUpdateManyWithWhereWithoutMoviesInput | Prisma.GenreUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: Prisma.GenreScalarWhereInput | Prisma.GenreScalarWhereInput[];
};
export type GenreUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput> | Prisma.GenreCreateWithoutMoviesInput[] | Prisma.GenreUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.GenreCreateOrConnectWithoutMoviesInput | Prisma.GenreCreateOrConnectWithoutMoviesInput[];
    upsert?: Prisma.GenreUpsertWithWhereUniqueWithoutMoviesInput | Prisma.GenreUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    disconnect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    delete?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    connect?: Prisma.GenreWhereUniqueInput | Prisma.GenreWhereUniqueInput[];
    update?: Prisma.GenreUpdateWithWhereUniqueWithoutMoviesInput | Prisma.GenreUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?: Prisma.GenreUpdateManyWithWhereWithoutMoviesInput | Prisma.GenreUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: Prisma.GenreScalarWhereInput | Prisma.GenreScalarWhereInput[];
};
export type GenreCreateWithoutMoviesInput = {
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: number;
    slug: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GenreCreateOrConnectWithoutMoviesInput = {
    where: Prisma.GenreWhereUniqueInput;
    create: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput>;
};
export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Prisma.GenreWhereUniqueInput;
    update: Prisma.XOR<Prisma.GenreUpdateWithoutMoviesInput, Prisma.GenreUncheckedUpdateWithoutMoviesInput>;
    create: Prisma.XOR<Prisma.GenreCreateWithoutMoviesInput, Prisma.GenreUncheckedCreateWithoutMoviesInput>;
};
export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Prisma.GenreWhereUniqueInput;
    data: Prisma.XOR<Prisma.GenreUpdateWithoutMoviesInput, Prisma.GenreUncheckedUpdateWithoutMoviesInput>;
};
export type GenreUpdateManyWithWhereWithoutMoviesInput = {
    where: Prisma.GenreScalarWhereInput;
    data: Prisma.XOR<Prisma.GenreUpdateManyMutationInput, Prisma.GenreUncheckedUpdateManyWithoutMoviesInput>;
};
export type GenreScalarWhereInput = {
    AND?: Prisma.GenreScalarWhereInput | Prisma.GenreScalarWhereInput[];
    OR?: Prisma.GenreScalarWhereInput[];
    NOT?: Prisma.GenreScalarWhereInput | Prisma.GenreScalarWhereInput[];
    id?: Prisma.IntFilter<"Genre"> | number;
    slug?: Prisma.StringFilter<"Genre"> | string;
    name?: Prisma.StringFilter<"Genre"> | string;
    description?: Prisma.StringNullableFilter<"Genre"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Genre"> | Date | string;
};
export type GenreUpdateWithoutMoviesInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenreUncheckedUpdateManyWithoutMoviesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenreCountOutputType = {
    movies: number;
};
export type GenreCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs;
};
export type GenreCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreCountOutputTypeSelect<ExtArgs> | null;
};
export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieWhereInput;
};
export type GenreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movies?: boolean | Prisma.Genre$moviesArgs<ExtArgs>;
    _count?: boolean | Prisma.GenreCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["genre"]>;
export type GenreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["genre"]>;
export type GenreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["genre"]>;
export type GenreSelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GenreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>;
export type GenreInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | Prisma.Genre$moviesArgs<ExtArgs>;
    _count?: boolean | Prisma.GenreCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GenreIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GenreIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GenrePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Genre";
    objects: {
        movies: Prisma.$MoviePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slug: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["genre"]>;
    composites: {};
};
export type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GenrePayload, S>;
export type GenreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GenreCountAggregateInputType | true;
};
export interface GenreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Genre'];
        meta: {
            name: 'Genre';
        };
    };
    findUnique<T extends GenreFindUniqueArgs>(args: Prisma.SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GenreFindFirstArgs>(args?: Prisma.SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GenreFindManyArgs>(args?: Prisma.SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GenreCreateArgs>(args: Prisma.SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GenreCreateManyArgs>(args?: Prisma.SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GenreDeleteArgs>(args: Prisma.SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GenreUpdateArgs>(args: Prisma.SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GenreDeleteManyArgs>(args?: Prisma.SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GenreUpdateManyArgs>(args: Prisma.SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GenreUpsertArgs>(args: Prisma.SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma.Prisma__GenreClient<runtime.Types.Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GenreCountArgs>(args?: Prisma.Subset<T, GenreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GenreCountAggregateOutputType> : number>;
    aggregate<T extends GenreAggregateArgs>(args: Prisma.Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>;
    groupBy<T extends GenreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GenreGroupByArgs['orderBy'];
    } : {
        orderBy?: GenreGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GenreFieldRefs;
}
export interface Prisma__GenreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    movies<T extends Prisma.Genre$moviesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Genre$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GenreFieldRefs {
    readonly id: Prisma.FieldRef<"Genre", 'Int'>;
    readonly slug: Prisma.FieldRef<"Genre", 'String'>;
    readonly name: Prisma.FieldRef<"Genre", 'String'>;
    readonly description: Prisma.FieldRef<"Genre", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Genre", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Genre", 'DateTime'>;
}
export type GenreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where: Prisma.GenreWhereUniqueInput;
};
export type GenreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where: Prisma.GenreWhereUniqueInput;
};
export type GenreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithRelationInput | Prisma.GenreOrderByWithRelationInput[];
    cursor?: Prisma.GenreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GenreScalarFieldEnum | Prisma.GenreScalarFieldEnum[];
};
export type GenreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithRelationInput | Prisma.GenreOrderByWithRelationInput[];
    cursor?: Prisma.GenreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GenreScalarFieldEnum | Prisma.GenreScalarFieldEnum[];
};
export type GenreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where?: Prisma.GenreWhereInput;
    orderBy?: Prisma.GenreOrderByWithRelationInput | Prisma.GenreOrderByWithRelationInput[];
    cursor?: Prisma.GenreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GenreScalarFieldEnum | Prisma.GenreScalarFieldEnum[];
};
export type GenreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GenreCreateInput, Prisma.GenreUncheckedCreateInput>;
};
export type GenreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GenreCreateManyInput | Prisma.GenreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GenreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    data: Prisma.GenreCreateManyInput | Prisma.GenreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GenreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GenreUpdateInput, Prisma.GenreUncheckedUpdateInput>;
    where: Prisma.GenreWhereUniqueInput;
};
export type GenreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GenreUpdateManyMutationInput, Prisma.GenreUncheckedUpdateManyInput>;
    where?: Prisma.GenreWhereInput;
    limit?: number;
};
export type GenreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GenreUpdateManyMutationInput, Prisma.GenreUncheckedUpdateManyInput>;
    where?: Prisma.GenreWhereInput;
    limit?: number;
};
export type GenreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where: Prisma.GenreWhereUniqueInput;
    create: Prisma.XOR<Prisma.GenreCreateInput, Prisma.GenreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GenreUpdateInput, Prisma.GenreUncheckedUpdateInput>;
};
export type GenreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
    where: Prisma.GenreWhereUniqueInput;
};
export type GenreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GenreWhereInput;
    limit?: number;
};
export type Genre$moviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieSelect<ExtArgs> | null;
    omit?: Prisma.MovieOmit<ExtArgs> | null;
    include?: Prisma.MovieInclude<ExtArgs> | null;
    where?: Prisma.MovieWhereInput;
    orderBy?: Prisma.MovieOrderByWithRelationInput | Prisma.MovieOrderByWithRelationInput[];
    cursor?: Prisma.MovieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovieScalarFieldEnum | Prisma.MovieScalarFieldEnum[];
};
export type GenreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GenreSelect<ExtArgs> | null;
    omit?: Prisma.GenreOmit<ExtArgs> | null;
    include?: Prisma.GenreInclude<ExtArgs> | null;
};
