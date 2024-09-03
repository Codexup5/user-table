import { Typography } from '@mui/material';

import { UsersTable } from '@/entities/user';

import { useUsers } from '@/features/users';

import { ErrorMessage, LoadingStatus, Pagination } from '@/shared';

export const UsersPage = () => {
    const { users, meta, error, isLoading } = useUsers();

    if (isLoading) {
        return <LoadingStatus />;
    }

    if (error) {
        return <ErrorMessage message='Не удалось загрузить данные пользователей.' />;
    }

    return (
        <>
            <Typography variant='h3'>Список пользователей</Typography>
            <UsersTable users={users} meta={meta as Pagination} isLoading={isLoading} />
        </>
    );
};
