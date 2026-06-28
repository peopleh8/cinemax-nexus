import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MoviePosterModel = runtime.Types.Result.DefaultSelection<Prisma.$MoviePosterPayload>;
export type AggregateMoviePoster = {
    _count: MoviePosterCountAggregateOutputType | null;
    _avg: MoviePosterAvgAggregateOutputType | null;
    _sum: MoviePosterSumAggregateOutputType | null;
    _min: MoviePosterMinAggregateOutputType | null;
    _max: MoviePosterMaxAggregateOutputType | null;
};
export type MoviePosterAvgAggregateOutputType = {
    id: number | null;
    movieId: number | null;
};
export type MoviePosterSumAggregateOutputType = {
    id: number | null;
    movieId: number | null;
};
export type MoviePosterMinAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    url: string | null;
    storageKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MoviePosterMaxAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    url: string | null;
    storageKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MoviePosterCountAggregateOutputType = {
    id: number;
    movieId: number;
    url: number;
    storageKey: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MoviePosterAvgAggregateInputType = {
    id?: true;
    movieId?: true;
};
export type MoviePosterSumAggregateInputType = {
    id?: true;
    movieId?: true;
};
export type MoviePosterMinAggregateInputType = {
    id?: true;
    movieId?: true;
    url?: true;
    storageKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MoviePosterMaxAggregateInputType = {
    id?: true;
    movieId?: true;
    url?: true;
    storageKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MoviePosterCountAggregateInputType = {
    id?: true;
    movieId?: true;
    url?: true;
    storageKey?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MoviePosterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoviePosterWhereInput;
    orderBy?: Prisma.MoviePosterOrderByWithRelationInput | Prisma.MoviePosterOrderByWithRelationInput[];
    cursor?: Prisma.MoviePosterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MoviePosterCountAggregateInputType;
    _avg?: MoviePosterAvgAggregateInputType;
    _sum?: MoviePosterSumAggregateInputType;
    _min?: MoviePosterMinAggregateInputType;
    _max?: MoviePosterMaxAggregateInputType;
};
export type GetMoviePosterAggregateType<T extends MoviePosterAggregateArgs> = {
    [P in keyof T & keyof AggregateMoviePoster]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMoviePoster[P]> : Prisma.GetScalarType<T[P], AggregateMoviePoster[P]>;
};
export type MoviePosterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoviePosterWhereInput;
    orderBy?: Prisma.MoviePosterOrderByWithAggregationInput | Prisma.MoviePosterOrderByWithAggregationInput[];
    by: Prisma.MoviePosterScalarFieldEnum[] | Prisma.MoviePosterScalarFieldEnum;
    having?: Prisma.MoviePosterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoviePosterCountAggregateInputType | true;
    _avg?: MoviePosterAvgAggregateInputType;
    _sum?: MoviePosterSumAggregateInputType;
    _min?: MoviePosterMinAggregateInputType;
    _max?: MoviePosterMaxAggregateInputType;
};
export type MoviePosterGroupByOutputType = {
    id: number;
    movieId: number;
    url: string;
    storageKey: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MoviePosterCountAggregateOutputType | null;
    _avg: MoviePosterAvgAggregateOutputType | null;
    _sum: MoviePosterSumAggregateOutputType | null;
    _min: MoviePosterMinAggregateOutputType | null;
    _max: MoviePosterMaxAggregateOutputType | null;
};
export type GetMoviePosterGroupByPayload<T extends MoviePosterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MoviePosterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MoviePosterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MoviePosterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MoviePosterGroupByOutputType[P]>;
}>>;
export type MoviePosterWhereInput = {
    AND?: Prisma.MoviePosterWhereInput | Prisma.MoviePosterWhereInput[];
    OR?: Prisma.MoviePosterWhereInput[];
    NOT?: Prisma.MoviePosterWhereInput | Prisma.MoviePosterWhereInput[];
    id?: Prisma.IntFilter<"MoviePoster"> | number;
    movieId?: Prisma.IntFilter<"MoviePoster"> | number;
    url?: Prisma.StringFilter<"MoviePoster"> | string;
    storageKey?: Prisma.StringFilter<"MoviePoster"> | string;
    createdAt?: Prisma.DateTimeFilter<"MoviePoster"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MoviePoster"> | Date | string;
    movie?: Prisma.XOR<Prisma.MovieScalarRelationFilter, Prisma.MovieWhereInput>;
};
export type MoviePosterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    movie?: Prisma.MovieOrderByWithRelationInput;
};
export type MoviePosterWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    movieId?: number;
    storageKey?: string;
    AND?: Prisma.MoviePosterWhereInput | Prisma.MoviePosterWhereInput[];
    OR?: Prisma.MoviePosterWhereInput[];
    NOT?: Prisma.MoviePosterWhereInput | Prisma.MoviePosterWhereInput[];
    url?: Prisma.StringFilter<"MoviePoster"> | string;
    createdAt?: Prisma.DateTimeFilter<"MoviePoster"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MoviePoster"> | Date | string;
    movie?: Prisma.XOR<Prisma.MovieScalarRelationFilter, Prisma.MovieWhereInput>;
}, "id" | "movieId" | "storageKey">;
export type MoviePosterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MoviePosterCountOrderByAggregateInput;
    _avg?: Prisma.MoviePosterAvgOrderByAggregateInput;
    _max?: Prisma.MoviePosterMaxOrderByAggregateInput;
    _min?: Prisma.MoviePosterMinOrderByAggregateInput;
    _sum?: Prisma.MoviePosterSumOrderByAggregateInput;
};
export type MoviePosterScalarWhereWithAggregatesInput = {
    AND?: Prisma.MoviePosterScalarWhereWithAggregatesInput | Prisma.MoviePosterScalarWhereWithAggregatesInput[];
    OR?: Prisma.MoviePosterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MoviePosterScalarWhereWithAggregatesInput | Prisma.MoviePosterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MoviePoster"> | number;
    movieId?: Prisma.IntWithAggregatesFilter<"MoviePoster"> | number;
    url?: Prisma.StringWithAggregatesFilter<"MoviePoster"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"MoviePoster"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MoviePoster"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MoviePoster"> | Date | string;
};
export type MoviePosterCreateInput = {
    url: string;
    storageKey: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: Prisma.MovieCreateNestedOneWithoutPosterInput;
};
export type MoviePosterUncheckedCreateInput = {
    id?: number;
    movieId: number;
    url: string;
    storageKey: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MoviePosterUpdateInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: Prisma.MovieUpdateOneRequiredWithoutPosterNestedInput;
};
export type MoviePosterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoviePosterCreateManyInput = {
    id?: number;
    movieId: number;
    url: string;
    storageKey: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MoviePosterUpdateManyMutationInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoviePosterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoviePosterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MoviePosterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
};
export type MoviePosterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MoviePosterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MoviePosterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
};
export type MoviePosterNullableScalarRelationFilter = {
    is?: Prisma.MoviePosterWhereInput | null;
    isNot?: Prisma.MoviePosterWhereInput | null;
};
export type MoviePosterCreateNestedOneWithoutMovieInput = {
    create?: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: Prisma.MoviePosterCreateOrConnectWithoutMovieInput;
    connect?: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterUncheckedCreateNestedOneWithoutMovieInput = {
    create?: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: Prisma.MoviePosterCreateOrConnectWithoutMovieInput;
    connect?: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterUpdateOneWithoutMovieNestedInput = {
    create?: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: Prisma.MoviePosterCreateOrConnectWithoutMovieInput;
    upsert?: Prisma.MoviePosterUpsertWithoutMovieInput;
    disconnect?: Prisma.MoviePosterWhereInput | boolean;
    delete?: Prisma.MoviePosterWhereInput | boolean;
    connect?: Prisma.MoviePosterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoviePosterUpdateToOneWithWhereWithoutMovieInput, Prisma.MoviePosterUpdateWithoutMovieInput>, Prisma.MoviePosterUncheckedUpdateWithoutMovieInput>;
};
export type MoviePosterUncheckedUpdateOneWithoutMovieNestedInput = {
    create?: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
    connectOrCreate?: Prisma.MoviePosterCreateOrConnectWithoutMovieInput;
    upsert?: Prisma.MoviePosterUpsertWithoutMovieInput;
    disconnect?: Prisma.MoviePosterWhereInput | boolean;
    delete?: Prisma.MoviePosterWhereInput | boolean;
    connect?: Prisma.MoviePosterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoviePosterUpdateToOneWithWhereWithoutMovieInput, Prisma.MoviePosterUpdateWithoutMovieInput>, Prisma.MoviePosterUncheckedUpdateWithoutMovieInput>;
};
export type MoviePosterCreateWithoutMovieInput = {
    url: string;
    storageKey: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MoviePosterUncheckedCreateWithoutMovieInput = {
    id?: number;
    url: string;
    storageKey: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MoviePosterCreateOrConnectWithoutMovieInput = {
    where: Prisma.MoviePosterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
};
export type MoviePosterUpsertWithoutMovieInput = {
    update: Prisma.XOR<Prisma.MoviePosterUpdateWithoutMovieInput, Prisma.MoviePosterUncheckedUpdateWithoutMovieInput>;
    create: Prisma.XOR<Prisma.MoviePosterCreateWithoutMovieInput, Prisma.MoviePosterUncheckedCreateWithoutMovieInput>;
    where?: Prisma.MoviePosterWhereInput;
};
export type MoviePosterUpdateToOneWithWhereWithoutMovieInput = {
    where?: Prisma.MoviePosterWhereInput;
    data: Prisma.XOR<Prisma.MoviePosterUpdateWithoutMovieInput, Prisma.MoviePosterUncheckedUpdateWithoutMovieInput>;
};
export type MoviePosterUpdateWithoutMovieInput = {
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoviePosterUncheckedUpdateWithoutMovieInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoviePosterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    url?: boolean;
    storageKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moviePoster"]>;
export type MoviePosterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    url?: boolean;
    storageKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moviePoster"]>;
export type MoviePosterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    url?: boolean;
    storageKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moviePoster"]>;
export type MoviePosterSelectScalar = {
    id?: boolean;
    movieId?: boolean;
    url?: boolean;
    storageKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MoviePosterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "movieId" | "url" | "storageKey" | "createdAt" | "updatedAt", ExtArgs["result"]["moviePoster"]>;
export type MoviePosterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type MoviePosterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type MoviePosterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type $MoviePosterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MoviePoster";
    objects: {
        movie: Prisma.$MoviePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        movieId: number;
        url: string;
        storageKey: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["moviePoster"]>;
    composites: {};
};
export type MoviePosterGetPayload<S extends boolean | null | undefined | MoviePosterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload, S>;
export type MoviePosterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MoviePosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MoviePosterCountAggregateInputType | true;
};
export interface MoviePosterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MoviePoster'];
        meta: {
            name: 'MoviePoster';
        };
    };
    findUnique<T extends MoviePosterFindUniqueArgs>(args: Prisma.SelectSubset<T, MoviePosterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MoviePosterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MoviePosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MoviePosterFindFirstArgs>(args?: Prisma.SelectSubset<T, MoviePosterFindFirstArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MoviePosterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MoviePosterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MoviePosterFindManyArgs>(args?: Prisma.SelectSubset<T, MoviePosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MoviePosterCreateArgs>(args: Prisma.SelectSubset<T, MoviePosterCreateArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MoviePosterCreateManyArgs>(args?: Prisma.SelectSubset<T, MoviePosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MoviePosterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MoviePosterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MoviePosterDeleteArgs>(args: Prisma.SelectSubset<T, MoviePosterDeleteArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MoviePosterUpdateArgs>(args: Prisma.SelectSubset<T, MoviePosterUpdateArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MoviePosterDeleteManyArgs>(args?: Prisma.SelectSubset<T, MoviePosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MoviePosterUpdateManyArgs>(args: Prisma.SelectSubset<T, MoviePosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MoviePosterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MoviePosterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MoviePosterUpsertArgs>(args: Prisma.SelectSubset<T, MoviePosterUpsertArgs<ExtArgs>>): Prisma.Prisma__MoviePosterClient<runtime.Types.Result.GetResult<Prisma.$MoviePosterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MoviePosterCountArgs>(args?: Prisma.Subset<T, MoviePosterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MoviePosterCountAggregateOutputType> : number>;
    aggregate<T extends MoviePosterAggregateArgs>(args: Prisma.Subset<T, MoviePosterAggregateArgs>): Prisma.PrismaPromise<GetMoviePosterAggregateType<T>>;
    groupBy<T extends MoviePosterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MoviePosterGroupByArgs['orderBy'];
    } : {
        orderBy?: MoviePosterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MoviePosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviePosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MoviePosterFieldRefs;
}
export interface Prisma__MoviePosterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    movie<T extends Prisma.MovieDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovieDefaultArgs<ExtArgs>>): Prisma.Prisma__MovieClient<runtime.Types.Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MoviePosterFieldRefs {
    readonly id: Prisma.FieldRef<"MoviePoster", 'Int'>;
    readonly movieId: Prisma.FieldRef<"MoviePoster", 'Int'>;
    readonly url: Prisma.FieldRef<"MoviePoster", 'String'>;
    readonly storageKey: Prisma.FieldRef<"MoviePoster", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MoviePoster", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MoviePoster", 'DateTime'>;
}
export type MoviePosterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where?: Prisma.MoviePosterWhereInput;
    orderBy?: Prisma.MoviePosterOrderByWithRelationInput | Prisma.MoviePosterOrderByWithRelationInput[];
    cursor?: Prisma.MoviePosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoviePosterScalarFieldEnum | Prisma.MoviePosterScalarFieldEnum[];
};
export type MoviePosterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where?: Prisma.MoviePosterWhereInput;
    orderBy?: Prisma.MoviePosterOrderByWithRelationInput | Prisma.MoviePosterOrderByWithRelationInput[];
    cursor?: Prisma.MoviePosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoviePosterScalarFieldEnum | Prisma.MoviePosterScalarFieldEnum[];
};
export type MoviePosterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where?: Prisma.MoviePosterWhereInput;
    orderBy?: Prisma.MoviePosterOrderByWithRelationInput | Prisma.MoviePosterOrderByWithRelationInput[];
    cursor?: Prisma.MoviePosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoviePosterScalarFieldEnum | Prisma.MoviePosterScalarFieldEnum[];
};
export type MoviePosterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoviePosterCreateInput, Prisma.MoviePosterUncheckedCreateInput>;
};
export type MoviePosterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MoviePosterCreateManyInput | Prisma.MoviePosterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MoviePosterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    data: Prisma.MoviePosterCreateManyInput | Prisma.MoviePosterCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MoviePosterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MoviePosterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoviePosterUpdateInput, Prisma.MoviePosterUncheckedUpdateInput>;
    where: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MoviePosterUpdateManyMutationInput, Prisma.MoviePosterUncheckedUpdateManyInput>;
    where?: Prisma.MoviePosterWhereInput;
    limit?: number;
};
export type MoviePosterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoviePosterUpdateManyMutationInput, Prisma.MoviePosterUncheckedUpdateManyInput>;
    where?: Prisma.MoviePosterWhereInput;
    limit?: number;
    include?: Prisma.MoviePosterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MoviePosterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where: Prisma.MoviePosterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoviePosterCreateInput, Prisma.MoviePosterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MoviePosterUpdateInput, Prisma.MoviePosterUncheckedUpdateInput>;
};
export type MoviePosterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
    where: Prisma.MoviePosterWhereUniqueInput;
};
export type MoviePosterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoviePosterWhereInput;
    limit?: number;
};
export type MoviePosterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoviePosterSelect<ExtArgs> | null;
    omit?: Prisma.MoviePosterOmit<ExtArgs> | null;
    include?: Prisma.MoviePosterInclude<ExtArgs> | null;
};
