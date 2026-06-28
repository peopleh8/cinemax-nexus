import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CountryModel = runtime.Types.Result.DefaultSelection<Prisma.$CountryPayload>;
export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null;
    _avg: CountryAvgAggregateOutputType | null;
    _sum: CountrySumAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
export type CountryAvgAggregateOutputType = {
    id: number | null;
};
export type CountrySumAggregateOutputType = {
    id: number | null;
};
export type CountryMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CountryMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CountryCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    code: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CountryAvgAggregateInputType = {
    id?: true;
};
export type CountrySumAggregateInputType = {
    id?: true;
};
export type CountryMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CountryMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CountryCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CountryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    cursor?: Prisma.CountryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CountryCountAggregateInputType;
    _avg?: CountryAvgAggregateInputType;
    _sum?: CountrySumAggregateInputType;
    _min?: CountryMinAggregateInputType;
    _max?: CountryMaxAggregateInputType;
};
export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
    [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCountry[P]> : Prisma.GetScalarType<T[P], AggregateCountry[P]>;
};
export type CountryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithAggregationInput | Prisma.CountryOrderByWithAggregationInput[];
    by: Prisma.CountryScalarFieldEnum[] | Prisma.CountryScalarFieldEnum;
    having?: Prisma.CountryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountryCountAggregateInputType | true;
    _avg?: CountryAvgAggregateInputType;
    _sum?: CountrySumAggregateInputType;
    _min?: CountryMinAggregateInputType;
    _max?: CountryMaxAggregateInputType;
};
export type CountryGroupByOutputType = {
    id: number;
    slug: string;
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CountryCountAggregateOutputType | null;
    _avg: CountryAvgAggregateOutputType | null;
    _sum: CountrySumAggregateOutputType | null;
    _min: CountryMinAggregateOutputType | null;
    _max: CountryMaxAggregateOutputType | null;
};
export type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountryGroupByOutputType[P]>;
}>>;
export type CountryWhereInput = {
    AND?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    OR?: Prisma.CountryWhereInput[];
    NOT?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    id?: Prisma.IntFilter<"Country"> | number;
    slug?: Prisma.StringFilter<"Country"> | string;
    name?: Prisma.StringFilter<"Country"> | string;
    code?: Prisma.StringFilter<"Country"> | string;
    createdAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    movies?: Prisma.MovieListRelationFilter;
};
export type CountryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    movies?: Prisma.MovieOrderByRelationAggregateInput;
};
export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    OR?: Prisma.CountryWhereInput[];
    NOT?: Prisma.CountryWhereInput | Prisma.CountryWhereInput[];
    name?: Prisma.StringFilter<"Country"> | string;
    code?: Prisma.StringFilter<"Country"> | string;
    createdAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    movies?: Prisma.MovieListRelationFilter;
}, "id" | "slug">;
export type CountryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CountryCountOrderByAggregateInput;
    _avg?: Prisma.CountryAvgOrderByAggregateInput;
    _max?: Prisma.CountryMaxOrderByAggregateInput;
    _min?: Prisma.CountryMinOrderByAggregateInput;
    _sum?: Prisma.CountrySumOrderByAggregateInput;
};
export type CountryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CountryScalarWhereWithAggregatesInput | Prisma.CountryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CountryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CountryScalarWhereWithAggregatesInput | Prisma.CountryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Country"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Country"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Country"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Country"> | Date | string;
};
export type CountryCreateInput = {
    slug: string;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.MovieCreateNestedManyWithoutCountriesInput;
};
export type CountryUncheckedCreateInput = {
    id?: number;
    slug: string;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.MovieUncheckedCreateNestedManyWithoutCountriesInput;
};
export type CountryUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.MovieUpdateManyWithoutCountriesNestedInput;
};
export type CountryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.MovieUncheckedUpdateManyWithoutCountriesNestedInput;
};
export type CountryCreateManyInput = {
    id?: number;
    slug: string;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CountryUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CountryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CountryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CountryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CountrySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CountryListRelationFilter = {
    every?: Prisma.CountryWhereInput;
    some?: Prisma.CountryWhereInput;
    none?: Prisma.CountryWhereInput;
};
export type CountryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CountryCreateNestedManyWithoutMoviesInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput> | Prisma.CountryCreateWithoutMoviesInput[] | Prisma.CountryUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutMoviesInput | Prisma.CountryCreateOrConnectWithoutMoviesInput[];
    connect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
};
export type CountryUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput> | Prisma.CountryCreateWithoutMoviesInput[] | Prisma.CountryUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutMoviesInput | Prisma.CountryCreateOrConnectWithoutMoviesInput[];
    connect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
};
export type CountryUpdateManyWithoutMoviesNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput> | Prisma.CountryCreateWithoutMoviesInput[] | Prisma.CountryUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutMoviesInput | Prisma.CountryCreateOrConnectWithoutMoviesInput[];
    upsert?: Prisma.CountryUpsertWithWhereUniqueWithoutMoviesInput | Prisma.CountryUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    disconnect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    delete?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    connect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    update?: Prisma.CountryUpdateWithWhereUniqueWithoutMoviesInput | Prisma.CountryUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?: Prisma.CountryUpdateManyWithWhereWithoutMoviesInput | Prisma.CountryUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: Prisma.CountryScalarWhereInput | Prisma.CountryScalarWhereInput[];
};
export type CountryUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput> | Prisma.CountryCreateWithoutMoviesInput[] | Prisma.CountryUncheckedCreateWithoutMoviesInput[];
    connectOrCreate?: Prisma.CountryCreateOrConnectWithoutMoviesInput | Prisma.CountryCreateOrConnectWithoutMoviesInput[];
    upsert?: Prisma.CountryUpsertWithWhereUniqueWithoutMoviesInput | Prisma.CountryUpsertWithWhereUniqueWithoutMoviesInput[];
    set?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    disconnect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    delete?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    connect?: Prisma.CountryWhereUniqueInput | Prisma.CountryWhereUniqueInput[];
    update?: Prisma.CountryUpdateWithWhereUniqueWithoutMoviesInput | Prisma.CountryUpdateWithWhereUniqueWithoutMoviesInput[];
    updateMany?: Prisma.CountryUpdateManyWithWhereWithoutMoviesInput | Prisma.CountryUpdateManyWithWhereWithoutMoviesInput[];
    deleteMany?: Prisma.CountryScalarWhereInput | Prisma.CountryScalarWhereInput[];
};
export type CountryCreateWithoutMoviesInput = {
    slug: string;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CountryUncheckedCreateWithoutMoviesInput = {
    id?: number;
    slug: string;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CountryCreateOrConnectWithoutMoviesInput = {
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput>;
};
export type CountryUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Prisma.CountryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CountryUpdateWithoutMoviesInput, Prisma.CountryUncheckedUpdateWithoutMoviesInput>;
    create: Prisma.XOR<Prisma.CountryCreateWithoutMoviesInput, Prisma.CountryUncheckedCreateWithoutMoviesInput>;
};
export type CountryUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Prisma.CountryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CountryUpdateWithoutMoviesInput, Prisma.CountryUncheckedUpdateWithoutMoviesInput>;
};
export type CountryUpdateManyWithWhereWithoutMoviesInput = {
    where: Prisma.CountryScalarWhereInput;
    data: Prisma.XOR<Prisma.CountryUpdateManyMutationInput, Prisma.CountryUncheckedUpdateManyWithoutMoviesInput>;
};
export type CountryScalarWhereInput = {
    AND?: Prisma.CountryScalarWhereInput | Prisma.CountryScalarWhereInput[];
    OR?: Prisma.CountryScalarWhereInput[];
    NOT?: Prisma.CountryScalarWhereInput | Prisma.CountryScalarWhereInput[];
    id?: Prisma.IntFilter<"Country"> | number;
    slug?: Prisma.StringFilter<"Country"> | string;
    name?: Prisma.StringFilter<"Country"> | string;
    code?: Prisma.StringFilter<"Country"> | string;
    createdAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Country"> | Date | string;
};
export type CountryUpdateWithoutMoviesInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryUncheckedUpdateWithoutMoviesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryUncheckedUpdateManyWithoutMoviesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryCountOutputType = {
    movies: number;
};
export type CountryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | CountryCountOutputTypeCountMoviesArgs;
};
export type CountryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountryCountOutputTypeSelect<ExtArgs> | null;
};
export type CountryCountOutputTypeCountMoviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieWhereInput;
};
export type CountrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movies?: boolean | Prisma.Country$moviesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["country"]>;
export type CountrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["country"]>;
export type CountrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["country"]>;
export type CountrySelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CountryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>;
export type CountryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | Prisma.Country$moviesArgs<ExtArgs>;
    _count?: boolean | Prisma.CountryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CountryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CountryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CountryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Country";
    objects: {
        movies: Prisma.$MoviePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slug: string;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["country"]>;
    composites: {};
};
export type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CountryPayload, S>;
export type CountryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountryCountAggregateInputType | true;
};
export interface CountryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Country'];
        meta: {
            name: 'Country';
        };
    };
    findUnique<T extends CountryFindUniqueArgs>(args: Prisma.SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CountryFindFirstArgs>(args?: Prisma.SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CountryFindManyArgs>(args?: Prisma.SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CountryCreateArgs>(args: Prisma.SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CountryCreateManyArgs>(args?: Prisma.SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CountryDeleteArgs>(args: Prisma.SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CountryUpdateArgs>(args: Prisma.SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CountryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CountryUpdateManyArgs>(args: Prisma.SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CountryUpsertArgs>(args: Prisma.SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CountryCountArgs>(args?: Prisma.Subset<T, CountryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountryCountAggregateOutputType> : number>;
    aggregate<T extends CountryAggregateArgs>(args: Prisma.Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>;
    groupBy<T extends CountryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CountryGroupByArgs['orderBy'];
    } : {
        orderBy?: CountryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CountryFieldRefs;
}
export interface Prisma__CountryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    movies<T extends Prisma.Country$moviesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Country$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CountryFieldRefs {
    readonly id: Prisma.FieldRef<"Country", 'Int'>;
    readonly slug: Prisma.FieldRef<"Country", 'String'>;
    readonly name: Prisma.FieldRef<"Country", 'String'>;
    readonly code: Prisma.FieldRef<"Country", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Country", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Country", 'DateTime'>;
}
export type CountryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where: Prisma.CountryWhereUniqueInput;
};
export type CountryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where: Prisma.CountryWhereUniqueInput;
};
export type CountryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    cursor?: Prisma.CountryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type CountryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    cursor?: Prisma.CountryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type CountryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput | Prisma.CountryOrderByWithRelationInput[];
    cursor?: Prisma.CountryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountryScalarFieldEnum | Prisma.CountryScalarFieldEnum[];
};
export type CountryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CountryCreateInput, Prisma.CountryUncheckedCreateInput>;
};
export type CountryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CountryCreateManyInput | Prisma.CountryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CountryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    data: Prisma.CountryCreateManyInput | Prisma.CountryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CountryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CountryUpdateInput, Prisma.CountryUncheckedUpdateInput>;
    where: Prisma.CountryWhereUniqueInput;
};
export type CountryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CountryUpdateManyMutationInput, Prisma.CountryUncheckedUpdateManyInput>;
    where?: Prisma.CountryWhereInput;
    limit?: number;
};
export type CountryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CountryUpdateManyMutationInput, Prisma.CountryUncheckedUpdateManyInput>;
    where?: Prisma.CountryWhereInput;
    limit?: number;
};
export type CountryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where: Prisma.CountryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CountryCreateInput, Prisma.CountryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CountryUpdateInput, Prisma.CountryUncheckedUpdateInput>;
};
export type CountryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
    where: Prisma.CountryWhereUniqueInput;
};
export type CountryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CountryWhereInput;
    limit?: number;
};
export type Country$moviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CountryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountrySelect<ExtArgs> | null;
    omit?: Prisma.CountryOmit<ExtArgs> | null;
    include?: Prisma.CountryInclude<ExtArgs> | null;
};
