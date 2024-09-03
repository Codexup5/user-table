import { Box, Skeleton, TableCell, TableRow } from '@mui/material';
import { Table } from './Table';

interface TableSkeletonProps {
    headCells?: string[];
    rowsCount?: number;
    colCount?: number;
    withIndex?: boolean;
}

export const TableSkeleton = ({
    headCells,
    rowsCount = 9,
    colCount = 5,
    withIndex = false,
}: TableSkeletonProps) => {
    return (
        <Table headCells={headCells}>
            {[...Array(rowsCount).keys()].map((key) => (
                <TableRow hover key={key}>
                    {[...Array(colCount).keys()].map((key, item) => (
                        <TableCell key={key}>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                }}>
                                {item === 0 && withIndex && <Skeleton width={20} sx={{ mr: 4 }} />}
                            </Box>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </Table>
    );
};
