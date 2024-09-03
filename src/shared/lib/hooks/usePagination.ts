import { useCallback, useState } from 'react';

import { Pagination } from '@/shared/interfaces';

export const usePagination = (): Pagination => {
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);

    const onLimitChange: Pagination['onLimitChange'] = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setLimit(parseInt(event.target.value, 10));
            setPage(0);
        },
        [],
    );

    const onPageChange: Pagination['onPageChange'] = useCallback(
        (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
            setPage(page);
        },
        [],
    );

    return {
        limit,
        page,
        count,
        total: count,
        onLimitChange,
        onPageChange,
        setCount,
    };
};
