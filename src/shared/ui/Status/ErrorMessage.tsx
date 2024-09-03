import { Box, Typography } from '@mui/material';

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Box
            sx={{
                padding: 2,
                height: '100vh',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Typography variant='h6' color='error'>
                {message}
            </Typography>
        </Box>
    );
};
