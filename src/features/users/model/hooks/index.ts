import { useCallback, useEffect, useState } from 'react';

import { useFindUsersMutation, User } from '@/entities/user';

import { countOrdinalNumber, Find, usePagination } from '@/shared';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const { limit, page, count, onLimitChange, onPageChange, setCount } = usePagination();

    const [findUsersMutation, { isLoading, error }] = useFindUsersMutation();

    const fetchUsers = useCallback(
        async ({ page, limit }: Find) => {
            try {
                const response = await findUsersMutation({ page: page + 1, limit }).unwrap();

                setUsers(
                    response.users.map((user, index) => ({
                        ...user,
                        index: countOrdinalNumber({
                            portion: limit,
                            numberDigit: page,
                            ordinalValue: index + 1,
                        }),
                    })),
                );
                setCount(response.total);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        },
        [findUsersMutation, setCount, limit],
    );

    useEffect(() => {
        fetchUsers({ page, limit });
    }, [fetchUsers, limit, page]);

    return {
        users,
        meta: {
            limit,
            page,
            count,
            onLimitChange,
            onPageChange,
        },
        error,
        isLoading,
    };
};
