import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PersonModel = runtime.Types.Result.DefaultSelection<Prisma.$PersonPayload>;
export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null;
    _avg: PersonAvgAggregateOutputType | null;
    _sum: PersonSumAggregateOutputType | null;
    _min: PersonMinAggregateOutputType | null;
    _max: PersonMaxAggregateOutputType | null;
};
export type PersonAvgAggregateOutputType = {
    id: number | null;
};
export type PersonSumAggregateOutputType = {
    id: number | null;
};
export type PersonMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    bio: string | null;
    birthDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    name: string | null;
    bio: string | null;
    birthDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonCountAggregateOutputType = {
    id: number;
    slug: number;
    name: number;
    bio: number;
    birthDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PersonAvgAggregateInputType = {
    id?: true;
};
export type PersonSumAggregateInputType = {
    id?: true;
};
export type PersonMinAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    bio?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonMaxAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    bio?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonCountAggregateInputType = {
    id?: true;
    slug?: true;
    name?: true;
    bio?: true;
    birthDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PersonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PersonCountAggregateInputType;
    _avg?: PersonAvgAggregateInputType;
    _sum?: PersonSumAggregateInputType;
    _min?: PersonMinAggregateInputType;
    _max?: PersonMaxAggregateInputType;
};
export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
    [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerson[P]> : Prisma.GetScalarType<T[P], AggregatePerson[P]>;
};
export type PersonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithAggregationInput | Prisma.PersonOrderByWithAggregationInput[];
    by: Prisma.PersonScalarFieldEnum[] | Prisma.PersonScalarFieldEnum;
    having?: Prisma.PersonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonCountAggregateInputType | true;
    _avg?: PersonAvgAggregateInputType;
    _sum?: PersonSumAggregateInputType;
    _min?: PersonMinAggregateInputType;
    _max?: PersonMaxAggregateInputType;
};
export type PersonGroupByOutputType = {
    id: number;
    slug: string;
    name: string;
    bio: string | null;
    birthDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PersonCountAggregateOutputType | null;
    _avg: PersonAvgAggregateOutputType | null;
    _sum: PersonSumAggregateOutputType | null;
    _min: PersonMinAggregateOutputType | null;
    _max: PersonMaxAggregateOutputType | null;
};
export type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonGroupByOutputType[P]>;
}>>;
export type PersonWhereInput = {
    AND?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    OR?: Prisma.PersonWhereInput[];
    NOT?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    id?: Prisma.IntFilter<"Person"> | number;
    slug?: Prisma.StringFilter<"Person"> | string;
    name?: Prisma.StringFilter<"Person"> | string;
    bio?: Prisma.StringNullableFilter<"Person"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Person"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    credits?: Prisma.MovieCreditListRelationFilter;
};
export type PersonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    credits?: Prisma.MovieCreditOrderByRelationAggregateInput;
};
export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    OR?: Prisma.PersonWhereInput[];
    NOT?: Prisma.PersonWhereInput | Prisma.PersonWhereInput[];
    name?: Prisma.StringFilter<"Person"> | string;
    bio?: Prisma.StringNullableFilter<"Person"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Person"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Person"> | Date | string;
    credits?: Prisma.MovieCreditListRelationFilter;
}, "id" | "slug">;
export type PersonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PersonCountOrderByAggregateInput;
    _avg?: Prisma.PersonAvgOrderByAggregateInput;
    _max?: Prisma.PersonMaxOrderByAggregateInput;
    _min?: Prisma.PersonMinOrderByAggregateInput;
    _sum?: Prisma.PersonSumOrderByAggregateInput;
};
export type PersonScalarWhereWithAggregatesInput = {
    AND?: Prisma.PersonScalarWhereWithAggregatesInput | Prisma.PersonScalarWhereWithAggregatesInput[];
    OR?: Prisma.PersonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PersonScalarWhereWithAggregatesInput | Prisma.PersonScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Person"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Person"> | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Person"> | string | null;
    birthDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Person"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Person"> | Date | string;
};
export type PersonCreateInput = {
    slug: string;
    name: string;
    bio?: string | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    credits?: Prisma.MovieCreditCreateNestedManyWithoutPersonInput;
};
export type PersonUncheckedCreateInput = {
    id?: number;
    slug: string;
    name: string;
    bio?: string | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    credits?: Prisma.MovieCreditUncheckedCreateNestedManyWithoutPersonInput;
};
export type PersonUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: Prisma.MovieCreditUpdateManyWithoutPersonNestedInput;
};
export type PersonUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: Prisma.MovieCreditUncheckedUpdateManyWithoutPersonNestedInput;
};
export type PersonCreateManyInput = {
    id?: number;
    slug: string;
    name: string;
    bio?: string | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PersonUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonScalarRelationFilter = {
    is?: Prisma.PersonWhereInput;
    isNot?: Prisma.PersonWhereInput;
};
export type PersonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PersonAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PersonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PersonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PersonSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PersonCreateNestedOneWithoutCreditsInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutCreditsInput, Prisma.PersonUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutCreditsInput;
    connect?: Prisma.PersonWhereUniqueInput;
};
export type PersonUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: Prisma.XOR<Prisma.PersonCreateWithoutCreditsInput, Prisma.PersonUncheckedCreateWithoutCreditsInput>;
    connectOrCreate?: Prisma.PersonCreateOrConnectWithoutCreditsInput;
    upsert?: Prisma.PersonUpsertWithoutCreditsInput;
    connect?: Prisma.PersonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PersonUpdateToOneWithWhereWithoutCreditsInput, Prisma.PersonUpdateWithoutCreditsInput>, Prisma.PersonUncheckedUpdateWithoutCreditsInput>;
};
export type PersonCreateWithoutCreditsInput = {
    slug: string;
    name: string;
    bio?: string | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PersonUncheckedCreateWithoutCreditsInput = {
    id?: number;
    slug: string;
    name: string;
    bio?: string | null;
    birthDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PersonCreateOrConnectWithoutCreditsInput = {
    where: Prisma.PersonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonCreateWithoutCreditsInput, Prisma.PersonUncheckedCreateWithoutCreditsInput>;
};
export type PersonUpsertWithoutCreditsInput = {
    update: Prisma.XOR<Prisma.PersonUpdateWithoutCreditsInput, Prisma.PersonUncheckedUpdateWithoutCreditsInput>;
    create: Prisma.XOR<Prisma.PersonCreateWithoutCreditsInput, Prisma.PersonUncheckedCreateWithoutCreditsInput>;
    where?: Prisma.PersonWhereInput;
};
export type PersonUpdateToOneWithWhereWithoutCreditsInput = {
    where?: Prisma.PersonWhereInput;
    data: Prisma.XOR<Prisma.PersonUpdateWithoutCreditsInput, Prisma.PersonUncheckedUpdateWithoutCreditsInput>;
};
export type PersonUpdateWithoutCreditsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonUncheckedUpdateWithoutCreditsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonCountOutputType = {
    credits: number;
};
export type PersonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credits?: boolean | PersonCountOutputTypeCountCreditsArgs;
};
export type PersonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonCountOutputTypeSelect<ExtArgs> | null;
};
export type PersonCountOutputTypeCountCreditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieCreditWhereInput;
};
export type PersonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    bio?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    credits?: boolean | Prisma.Person$creditsArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["person"]>;
export type PersonSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    bio?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["person"]>;
export type PersonSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    bio?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["person"]>;
export type PersonSelectScalar = {
    id?: boolean;
    slug?: boolean;
    name?: boolean;
    bio?: boolean;
    birthDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PersonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "name" | "bio" | "birthDate" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>;
export type PersonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credits?: boolean | Prisma.Person$creditsArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PersonIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PersonIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PersonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Person";
    objects: {
        credits: Prisma.$MovieCreditPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slug: string;
        name: string;
        bio: string | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["person"]>;
    composites: {};
};
export type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PersonPayload, S>;
export type PersonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonCountAggregateInputType | true;
};
export interface PersonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Person'];
        meta: {
            name: 'Person';
        };
    };
    findUnique<T extends PersonFindUniqueArgs>(args: Prisma.SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PersonFindFirstArgs>(args?: Prisma.SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PersonFindManyArgs>(args?: Prisma.SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PersonCreateArgs>(args: Prisma.SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PersonCreateManyArgs>(args?: Prisma.SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PersonDeleteArgs>(args: Prisma.SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PersonUpdateArgs>(args: Prisma.SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PersonDeleteManyArgs>(args?: Prisma.SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PersonUpdateManyArgs>(args: Prisma.SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PersonUpsertArgs>(args: Prisma.SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PersonCountArgs>(args?: Prisma.Subset<T, PersonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonCountAggregateOutputType> : number>;
    aggregate<T extends PersonAggregateArgs>(args: Prisma.Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>;
    groupBy<T extends PersonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PersonGroupByArgs['orderBy'];
    } : {
        orderBy?: PersonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PersonFieldRefs;
}
export interface Prisma__PersonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    credits<T extends Prisma.Person$creditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Person$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PersonFieldRefs {
    readonly id: Prisma.FieldRef<"Person", 'Int'>;
    readonly slug: Prisma.FieldRef<"Person", 'String'>;
    readonly name: Prisma.FieldRef<"Person", 'String'>;
    readonly bio: Prisma.FieldRef<"Person", 'String'>;
    readonly birthDate: Prisma.FieldRef<"Person", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Person", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Person", 'DateTime'>;
}
export type PersonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput | Prisma.PersonOrderByWithRelationInput[];
    cursor?: Prisma.PersonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonScalarFieldEnum | Prisma.PersonScalarFieldEnum[];
};
export type PersonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonCreateInput, Prisma.PersonUncheckedCreateInput>;
};
export type PersonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PersonCreateManyInput | Prisma.PersonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PersonCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    data: Prisma.PersonCreateManyInput | Prisma.PersonCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PersonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonUpdateInput, Prisma.PersonUncheckedUpdateInput>;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PersonUpdateManyMutationInput, Prisma.PersonUncheckedUpdateManyInput>;
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type PersonUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PersonUpdateManyMutationInput, Prisma.PersonUncheckedUpdateManyInput>;
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type PersonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
    create: Prisma.XOR<Prisma.PersonCreateInput, Prisma.PersonUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PersonUpdateInput, Prisma.PersonUncheckedUpdateInput>;
};
export type PersonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
    where: Prisma.PersonWhereUniqueInput;
};
export type PersonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PersonWhereInput;
    limit?: number;
};
export type Person$creditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    where?: Prisma.MovieCreditWhereInput;
    orderBy?: Prisma.MovieCreditOrderByWithRelationInput | Prisma.MovieCreditOrderByWithRelationInput[];
    cursor?: Prisma.MovieCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovieCreditScalarFieldEnum | Prisma.MovieCreditScalarFieldEnum[];
};
export type PersonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PersonSelect<ExtArgs> | null;
    omit?: Prisma.PersonOmit<ExtArgs> | null;
    include?: Prisma.PersonInclude<ExtArgs> | null;
};
