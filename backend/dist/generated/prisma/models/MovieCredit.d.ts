import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MovieCreditModel = runtime.Types.Result.DefaultSelection<Prisma.$MovieCreditPayload>;
export type AggregateMovieCredit = {
    _count: MovieCreditCountAggregateOutputType | null;
    _avg: MovieCreditAvgAggregateOutputType | null;
    _sum: MovieCreditSumAggregateOutputType | null;
    _min: MovieCreditMinAggregateOutputType | null;
    _max: MovieCreditMaxAggregateOutputType | null;
};
export type MovieCreditAvgAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    personId: number | null;
};
export type MovieCreditSumAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    personId: number | null;
};
export type MovieCreditMinAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    personId: number | null;
    role: $Enums.CreditRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MovieCreditMaxAggregateOutputType = {
    id: number | null;
    movieId: number | null;
    personId: number | null;
    role: $Enums.CreditRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MovieCreditCountAggregateOutputType = {
    id: number;
    movieId: number;
    personId: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MovieCreditAvgAggregateInputType = {
    id?: true;
    movieId?: true;
    personId?: true;
};
export type MovieCreditSumAggregateInputType = {
    id?: true;
    movieId?: true;
    personId?: true;
};
export type MovieCreditMinAggregateInputType = {
    id?: true;
    movieId?: true;
    personId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MovieCreditMaxAggregateInputType = {
    id?: true;
    movieId?: true;
    personId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MovieCreditCountAggregateInputType = {
    id?: true;
    movieId?: true;
    personId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MovieCreditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieCreditWhereInput;
    orderBy?: Prisma.MovieCreditOrderByWithRelationInput | Prisma.MovieCreditOrderByWithRelationInput[];
    cursor?: Prisma.MovieCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MovieCreditCountAggregateInputType;
    _avg?: MovieCreditAvgAggregateInputType;
    _sum?: MovieCreditSumAggregateInputType;
    _min?: MovieCreditMinAggregateInputType;
    _max?: MovieCreditMaxAggregateInputType;
};
export type GetMovieCreditAggregateType<T extends MovieCreditAggregateArgs> = {
    [P in keyof T & keyof AggregateMovieCredit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovieCredit[P]> : Prisma.GetScalarType<T[P], AggregateMovieCredit[P]>;
};
export type MovieCreditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieCreditWhereInput;
    orderBy?: Prisma.MovieCreditOrderByWithAggregationInput | Prisma.MovieCreditOrderByWithAggregationInput[];
    by: Prisma.MovieCreditScalarFieldEnum[] | Prisma.MovieCreditScalarFieldEnum;
    having?: Prisma.MovieCreditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCreditCountAggregateInputType | true;
    _avg?: MovieCreditAvgAggregateInputType;
    _sum?: MovieCreditSumAggregateInputType;
    _min?: MovieCreditMinAggregateInputType;
    _max?: MovieCreditMaxAggregateInputType;
};
export type MovieCreditGroupByOutputType = {
    id: number;
    movieId: number;
    personId: number;
    role: $Enums.CreditRole;
    createdAt: Date;
    updatedAt: Date;
    _count: MovieCreditCountAggregateOutputType | null;
    _avg: MovieCreditAvgAggregateOutputType | null;
    _sum: MovieCreditSumAggregateOutputType | null;
    _min: MovieCreditMinAggregateOutputType | null;
    _max: MovieCreditMaxAggregateOutputType | null;
};
export type GetMovieCreditGroupByPayload<T extends MovieCreditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovieCreditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovieCreditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovieCreditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovieCreditGroupByOutputType[P]>;
}>>;
export type MovieCreditWhereInput = {
    AND?: Prisma.MovieCreditWhereInput | Prisma.MovieCreditWhereInput[];
    OR?: Prisma.MovieCreditWhereInput[];
    NOT?: Prisma.MovieCreditWhereInput | Prisma.MovieCreditWhereInput[];
    id?: Prisma.IntFilter<"MovieCredit"> | number;
    movieId?: Prisma.IntFilter<"MovieCredit"> | number;
    personId?: Prisma.IntFilter<"MovieCredit"> | number;
    role?: Prisma.EnumCreditRoleFilter<"MovieCredit"> | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
    person?: Prisma.XOR<Prisma.PersonScalarRelationFilter, Prisma.PersonWhereInput>;
    movie?: Prisma.XOR<Prisma.MovieScalarRelationFilter, Prisma.MovieWhereInput>;
};
export type MovieCreditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    person?: Prisma.PersonOrderByWithRelationInput;
    movie?: Prisma.MovieOrderByWithRelationInput;
};
export type MovieCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    movieId?: number;
    personId?: number;
    AND?: Prisma.MovieCreditWhereInput | Prisma.MovieCreditWhereInput[];
    OR?: Prisma.MovieCreditWhereInput[];
    NOT?: Prisma.MovieCreditWhereInput | Prisma.MovieCreditWhereInput[];
    role?: Prisma.EnumCreditRoleFilter<"MovieCredit"> | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
    person?: Prisma.XOR<Prisma.PersonScalarRelationFilter, Prisma.PersonWhereInput>;
    movie?: Prisma.XOR<Prisma.MovieScalarRelationFilter, Prisma.MovieWhereInput>;
}, "id" | "movieId" | "personId">;
export type MovieCreditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MovieCreditCountOrderByAggregateInput;
    _avg?: Prisma.MovieCreditAvgOrderByAggregateInput;
    _max?: Prisma.MovieCreditMaxOrderByAggregateInput;
    _min?: Prisma.MovieCreditMinOrderByAggregateInput;
    _sum?: Prisma.MovieCreditSumOrderByAggregateInput;
};
export type MovieCreditScalarWhereWithAggregatesInput = {
    AND?: Prisma.MovieCreditScalarWhereWithAggregatesInput | Prisma.MovieCreditScalarWhereWithAggregatesInput[];
    OR?: Prisma.MovieCreditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MovieCreditScalarWhereWithAggregatesInput | Prisma.MovieCreditScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MovieCredit"> | number;
    movieId?: Prisma.IntWithAggregatesFilter<"MovieCredit"> | number;
    personId?: Prisma.IntWithAggregatesFilter<"MovieCredit"> | number;
    role?: Prisma.EnumCreditRoleWithAggregatesFilter<"MovieCredit"> | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MovieCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MovieCredit"> | Date | string;
};
export type MovieCreditCreateInput = {
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    person: Prisma.PersonCreateNestedOneWithoutCreditsInput;
    movie: Prisma.MovieCreateNestedOneWithoutCreditsInput;
};
export type MovieCreditUncheckedCreateInput = {
    id?: number;
    movieId: number;
    personId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditUpdateInput = {
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    person?: Prisma.PersonUpdateOneRequiredWithoutCreditsNestedInput;
    movie?: Prisma.MovieUpdateOneRequiredWithoutCreditsNestedInput;
};
export type MovieCreditUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    personId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditCreateManyInput = {
    id?: number;
    movieId: number;
    personId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditUpdateManyMutationInput = {
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    personId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MovieCreditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
};
export type MovieCreditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MovieCreditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MovieCreditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    movieId?: Prisma.SortOrder;
    personId?: Prisma.SortOrder;
};
export type MovieCreditListRelationFilter = {
    every?: Prisma.MovieCreditWhereInput;
    some?: Prisma.MovieCreditWhereInput;
    none?: Prisma.MovieCreditWhereInput;
};
export type MovieCreditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumCreditRoleFieldUpdateOperationsInput = {
    set?: $Enums.CreditRole;
};
export type MovieCreditCreateNestedManyWithoutMovieInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput> | Prisma.MovieCreditCreateWithoutMovieInput[] | Prisma.MovieCreditUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutMovieInput | Prisma.MovieCreditCreateOrConnectWithoutMovieInput[];
    createMany?: Prisma.MovieCreditCreateManyMovieInputEnvelope;
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
};
export type MovieCreditUncheckedCreateNestedManyWithoutMovieInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput> | Prisma.MovieCreditCreateWithoutMovieInput[] | Prisma.MovieCreditUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutMovieInput | Prisma.MovieCreditCreateOrConnectWithoutMovieInput[];
    createMany?: Prisma.MovieCreditCreateManyMovieInputEnvelope;
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
};
export type MovieCreditUpdateManyWithoutMovieNestedInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput> | Prisma.MovieCreditCreateWithoutMovieInput[] | Prisma.MovieCreditUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutMovieInput | Prisma.MovieCreditCreateOrConnectWithoutMovieInput[];
    upsert?: Prisma.MovieCreditUpsertWithWhereUniqueWithoutMovieInput | Prisma.MovieCreditUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: Prisma.MovieCreditCreateManyMovieInputEnvelope;
    set?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    disconnect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    delete?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    update?: Prisma.MovieCreditUpdateWithWhereUniqueWithoutMovieInput | Prisma.MovieCreditUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: Prisma.MovieCreditUpdateManyWithWhereWithoutMovieInput | Prisma.MovieCreditUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
};
export type MovieCreditUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput> | Prisma.MovieCreditCreateWithoutMovieInput[] | Prisma.MovieCreditUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutMovieInput | Prisma.MovieCreditCreateOrConnectWithoutMovieInput[];
    upsert?: Prisma.MovieCreditUpsertWithWhereUniqueWithoutMovieInput | Prisma.MovieCreditUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: Prisma.MovieCreditCreateManyMovieInputEnvelope;
    set?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    disconnect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    delete?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    update?: Prisma.MovieCreditUpdateWithWhereUniqueWithoutMovieInput | Prisma.MovieCreditUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: Prisma.MovieCreditUpdateManyWithWhereWithoutMovieInput | Prisma.MovieCreditUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
};
export type MovieCreditCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput> | Prisma.MovieCreditCreateWithoutPersonInput[] | Prisma.MovieCreditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutPersonInput | Prisma.MovieCreditCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.MovieCreditCreateManyPersonInputEnvelope;
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
};
export type MovieCreditUncheckedCreateNestedManyWithoutPersonInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput> | Prisma.MovieCreditCreateWithoutPersonInput[] | Prisma.MovieCreditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutPersonInput | Prisma.MovieCreditCreateOrConnectWithoutPersonInput[];
    createMany?: Prisma.MovieCreditCreateManyPersonInputEnvelope;
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
};
export type MovieCreditUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput> | Prisma.MovieCreditCreateWithoutPersonInput[] | Prisma.MovieCreditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutPersonInput | Prisma.MovieCreditCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.MovieCreditUpsertWithWhereUniqueWithoutPersonInput | Prisma.MovieCreditUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.MovieCreditCreateManyPersonInputEnvelope;
    set?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    disconnect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    delete?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    update?: Prisma.MovieCreditUpdateWithWhereUniqueWithoutPersonInput | Prisma.MovieCreditUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.MovieCreditUpdateManyWithWhereWithoutPersonInput | Prisma.MovieCreditUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
};
export type MovieCreditUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput> | Prisma.MovieCreditCreateWithoutPersonInput[] | Prisma.MovieCreditUncheckedCreateWithoutPersonInput[];
    connectOrCreate?: Prisma.MovieCreditCreateOrConnectWithoutPersonInput | Prisma.MovieCreditCreateOrConnectWithoutPersonInput[];
    upsert?: Prisma.MovieCreditUpsertWithWhereUniqueWithoutPersonInput | Prisma.MovieCreditUpsertWithWhereUniqueWithoutPersonInput[];
    createMany?: Prisma.MovieCreditCreateManyPersonInputEnvelope;
    set?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    disconnect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    delete?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    connect?: Prisma.MovieCreditWhereUniqueInput | Prisma.MovieCreditWhereUniqueInput[];
    update?: Prisma.MovieCreditUpdateWithWhereUniqueWithoutPersonInput | Prisma.MovieCreditUpdateWithWhereUniqueWithoutPersonInput[];
    updateMany?: Prisma.MovieCreditUpdateManyWithWhereWithoutPersonInput | Prisma.MovieCreditUpdateManyWithWhereWithoutPersonInput[];
    deleteMany?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
};
export type MovieCreditCreateWithoutMovieInput = {
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    person: Prisma.PersonCreateNestedOneWithoutCreditsInput;
};
export type MovieCreditUncheckedCreateWithoutMovieInput = {
    id?: number;
    personId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditCreateOrConnectWithoutMovieInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput>;
};
export type MovieCreditCreateManyMovieInputEnvelope = {
    data: Prisma.MovieCreditCreateManyMovieInput | Prisma.MovieCreditCreateManyMovieInput[];
    skipDuplicates?: boolean;
};
export type MovieCreditUpsertWithWhereUniqueWithoutMovieInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovieCreditUpdateWithoutMovieInput, Prisma.MovieCreditUncheckedUpdateWithoutMovieInput>;
    create: Prisma.XOR<Prisma.MovieCreditCreateWithoutMovieInput, Prisma.MovieCreditUncheckedCreateWithoutMovieInput>;
};
export type MovieCreditUpdateWithWhereUniqueWithoutMovieInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovieCreditUpdateWithoutMovieInput, Prisma.MovieCreditUncheckedUpdateWithoutMovieInput>;
};
export type MovieCreditUpdateManyWithWhereWithoutMovieInput = {
    where: Prisma.MovieCreditScalarWhereInput;
    data: Prisma.XOR<Prisma.MovieCreditUpdateManyMutationInput, Prisma.MovieCreditUncheckedUpdateManyWithoutMovieInput>;
};
export type MovieCreditScalarWhereInput = {
    AND?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
    OR?: Prisma.MovieCreditScalarWhereInput[];
    NOT?: Prisma.MovieCreditScalarWhereInput | Prisma.MovieCreditScalarWhereInput[];
    id?: Prisma.IntFilter<"MovieCredit"> | number;
    movieId?: Prisma.IntFilter<"MovieCredit"> | number;
    personId?: Prisma.IntFilter<"MovieCredit"> | number;
    role?: Prisma.EnumCreditRoleFilter<"MovieCredit"> | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MovieCredit"> | Date | string;
};
export type MovieCreditCreateWithoutPersonInput = {
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movie: Prisma.MovieCreateNestedOneWithoutCreditsInput;
};
export type MovieCreditUncheckedCreateWithoutPersonInput = {
    id?: number;
    movieId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditCreateOrConnectWithoutPersonInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput>;
};
export type MovieCreditCreateManyPersonInputEnvelope = {
    data: Prisma.MovieCreditCreateManyPersonInput | Prisma.MovieCreditCreateManyPersonInput[];
    skipDuplicates?: boolean;
};
export type MovieCreditUpsertWithWhereUniqueWithoutPersonInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovieCreditUpdateWithoutPersonInput, Prisma.MovieCreditUncheckedUpdateWithoutPersonInput>;
    create: Prisma.XOR<Prisma.MovieCreditCreateWithoutPersonInput, Prisma.MovieCreditUncheckedCreateWithoutPersonInput>;
};
export type MovieCreditUpdateWithWhereUniqueWithoutPersonInput = {
    where: Prisma.MovieCreditWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovieCreditUpdateWithoutPersonInput, Prisma.MovieCreditUncheckedUpdateWithoutPersonInput>;
};
export type MovieCreditUpdateManyWithWhereWithoutPersonInput = {
    where: Prisma.MovieCreditScalarWhereInput;
    data: Prisma.XOR<Prisma.MovieCreditUpdateManyMutationInput, Prisma.MovieCreditUncheckedUpdateManyWithoutPersonInput>;
};
export type MovieCreditCreateManyMovieInput = {
    id?: number;
    personId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditUpdateWithoutMovieInput = {
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    person?: Prisma.PersonUpdateOneRequiredWithoutCreditsNestedInput;
};
export type MovieCreditUncheckedUpdateWithoutMovieInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    personId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditUncheckedUpdateManyWithoutMovieInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    personId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditCreateManyPersonInput = {
    id?: number;
    movieId: number;
    role: $Enums.CreditRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MovieCreditUpdateWithoutPersonInput = {
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: Prisma.MovieUpdateOneRequiredWithoutCreditsNestedInput;
};
export type MovieCreditUncheckedUpdateWithoutPersonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditUncheckedUpdateManyWithoutPersonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    movieId?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumCreditRoleFieldUpdateOperationsInput | $Enums.CreditRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovieCreditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    personId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movieCredit"]>;
export type MovieCreditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    personId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movieCredit"]>;
export type MovieCreditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    movieId?: boolean;
    personId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movieCredit"]>;
export type MovieCreditSelectScalar = {
    id?: boolean;
    movieId?: boolean;
    personId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MovieCreditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "movieId" | "personId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["movieCredit"]>;
export type MovieCreditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type MovieCreditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type MovieCreditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    person?: boolean | Prisma.PersonDefaultArgs<ExtArgs>;
    movie?: boolean | Prisma.MovieDefaultArgs<ExtArgs>;
};
export type $MovieCreditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MovieCredit";
    objects: {
        person: Prisma.$PersonPayload<ExtArgs>;
        movie: Prisma.$MoviePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        movieId: number;
        personId: number;
        role: $Enums.CreditRole;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["movieCredit"]>;
    composites: {};
};
export type MovieCreditGetPayload<S extends boolean | null | undefined | MovieCreditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload, S>;
export type MovieCreditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MovieCreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovieCreditCountAggregateInputType | true;
};
export interface MovieCreditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MovieCredit'];
        meta: {
            name: 'MovieCredit';
        };
    };
    findUnique<T extends MovieCreditFindUniqueArgs>(args: Prisma.SelectSubset<T, MovieCreditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MovieCreditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MovieCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MovieCreditFindFirstArgs>(args?: Prisma.SelectSubset<T, MovieCreditFindFirstArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MovieCreditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MovieCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MovieCreditFindManyArgs>(args?: Prisma.SelectSubset<T, MovieCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MovieCreditCreateArgs>(args: Prisma.SelectSubset<T, MovieCreditCreateArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MovieCreditCreateManyArgs>(args?: Prisma.SelectSubset<T, MovieCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MovieCreditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MovieCreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MovieCreditDeleteArgs>(args: Prisma.SelectSubset<T, MovieCreditDeleteArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MovieCreditUpdateArgs>(args: Prisma.SelectSubset<T, MovieCreditUpdateArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MovieCreditDeleteManyArgs>(args?: Prisma.SelectSubset<T, MovieCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MovieCreditUpdateManyArgs>(args: Prisma.SelectSubset<T, MovieCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MovieCreditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MovieCreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MovieCreditUpsertArgs>(args: Prisma.SelectSubset<T, MovieCreditUpsertArgs<ExtArgs>>): Prisma.Prisma__MovieCreditClient<runtime.Types.Result.GetResult<Prisma.$MovieCreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MovieCreditCountArgs>(args?: Prisma.Subset<T, MovieCreditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovieCreditCountAggregateOutputType> : number>;
    aggregate<T extends MovieCreditAggregateArgs>(args: Prisma.Subset<T, MovieCreditAggregateArgs>): Prisma.PrismaPromise<GetMovieCreditAggregateType<T>>;
    groupBy<T extends MovieCreditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MovieCreditGroupByArgs['orderBy'];
    } : {
        orderBy?: MovieCreditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MovieCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MovieCreditFieldRefs;
}
export interface Prisma__MovieCreditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    person<T extends Prisma.PersonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PersonDefaultArgs<ExtArgs>>): Prisma.Prisma__PersonClient<runtime.Types.Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movie<T extends Prisma.MovieDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MovieDefaultArgs<ExtArgs>>): Prisma.Prisma__MovieClient<runtime.Types.Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MovieCreditFieldRefs {
    readonly id: Prisma.FieldRef<"MovieCredit", 'Int'>;
    readonly movieId: Prisma.FieldRef<"MovieCredit", 'Int'>;
    readonly personId: Prisma.FieldRef<"MovieCredit", 'Int'>;
    readonly role: Prisma.FieldRef<"MovieCredit", 'CreditRole'>;
    readonly createdAt: Prisma.FieldRef<"MovieCredit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MovieCredit", 'DateTime'>;
}
export type MovieCreditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    where: Prisma.MovieCreditWhereUniqueInput;
};
export type MovieCreditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    where: Prisma.MovieCreditWhereUniqueInput;
};
export type MovieCreditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovieCreditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovieCreditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MovieCreditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovieCreditCreateInput, Prisma.MovieCreditUncheckedCreateInput>;
};
export type MovieCreditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MovieCreditCreateManyInput | Prisma.MovieCreditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MovieCreditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    data: Prisma.MovieCreditCreateManyInput | Prisma.MovieCreditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MovieCreditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MovieCreditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovieCreditUpdateInput, Prisma.MovieCreditUncheckedUpdateInput>;
    where: Prisma.MovieCreditWhereUniqueInput;
};
export type MovieCreditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MovieCreditUpdateManyMutationInput, Prisma.MovieCreditUncheckedUpdateManyInput>;
    where?: Prisma.MovieCreditWhereInput;
    limit?: number;
};
export type MovieCreditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovieCreditUpdateManyMutationInput, Prisma.MovieCreditUncheckedUpdateManyInput>;
    where?: Prisma.MovieCreditWhereInput;
    limit?: number;
    include?: Prisma.MovieCreditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MovieCreditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    where: Prisma.MovieCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovieCreditCreateInput, Prisma.MovieCreditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MovieCreditUpdateInput, Prisma.MovieCreditUncheckedUpdateInput>;
};
export type MovieCreditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
    where: Prisma.MovieCreditWhereUniqueInput;
};
export type MovieCreditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovieCreditWhereInput;
    limit?: number;
};
export type MovieCreditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovieCreditSelect<ExtArgs> | null;
    omit?: Prisma.MovieCreditOmit<ExtArgs> | null;
    include?: Prisma.MovieCreditInclude<ExtArgs> | null;
};
