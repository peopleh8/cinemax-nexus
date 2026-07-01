export declare class PaginationMetaDto {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
export declare class PaginationResponseDto<T> {
    rows: T[];
    meta: PaginationMetaDto;
}
