import {
    TablePagination as Pagination,
    TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material';

export type TablePaginationProps = MuiTablePaginationProps & {
    count: number;
    page: number;
};

export const TablePagination = ({ count, page, ...props }: TablePaginationProps) => {
    return (
        <Pagination
            {...props}
            component='div'
            showFirstButton
            showLastButton
            count={count}
            page={page}
        />
    );
};
