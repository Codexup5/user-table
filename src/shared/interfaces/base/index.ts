export interface Pagination {
    count?: number;
    page: number;
    total: number;
    limit: number;
    onLimitChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onPageChange?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number,
    ) => void;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginationResponseData<D> extends Pagination {
    users: D[];
}
