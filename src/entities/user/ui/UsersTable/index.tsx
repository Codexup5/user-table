import { Card, TableCell, TableRow, Typography } from '@mui/material';
import { useMemo } from 'react';

import { User } from '../../model';

import {
    DividedCell,
    EmptyCard,
    Pagination,
    ROWS_PER_PAGE_VALUE,
    Table,
    TableSkeleton,
} from '@/shared';

interface UsersTableProps {
    users: User[];
    meta: Pagination;
    isLoading: boolean;
}

export const UsersHeadCells = ['№', 'ФИО', 'Телефон', 'Дата Рождения'];

export const UsersTable = ({
    users,
    meta: { limit, page, count = 0, onLimitChange, onPageChange = () => {} },
    isLoading,
}: UsersTableProps) => {
    const renderContent = useMemo(() => {
        if (users && users.length > 0) {
            return (
                <Table
                    headCells={UsersHeadCells}
                    pagination={{
                        count,
                        page,
                        rowsPerPage: limit,
                        rowsPerPageOptions: ROWS_PER_PAGE_VALUE,
                        onPageChange,
                        onRowsPerPageChange: onLimitChange,
                        disabled: isLoading,
                    }}>
                    {users.slice(0, limit).map((user) => {
                        if (user.id) {
                            return (
                                <TableRow hover key={user.id}>
                                    <DividedCell>{user.index}</DividedCell>
                                    <TableCell>
                                        <Typography color='textPrimary' variant='body1'>
                                            {`${user.lastName ?? ''} ${user.firstName ?? ''} ${
                                                user.maidenName ?? ''
                                            }`}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{user.phone ?? ''}</TableCell>
                                    <TableCell>{user.birthDate}</TableCell>
                                </TableRow>
                            );
                        }
                        return null;
                    })}
                </Table>
            );
        }

        if (users.length === 0 && !isLoading) {
            return <EmptyCard>Список пользователей пуст</EmptyCard>;
        }

        return <TableSkeleton headCells={UsersHeadCells} rowsCount={5} colCount={8} withIndex />;
    }, [count, limit, isLoading, onLimitChange, onPageChange, page, users]);

    return <Card sx={{ mt: 3, mb: 3, overflow: 'auto' }}>{renderContent}</Card>;
};
