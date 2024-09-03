import { Box } from '@mui/material';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <Box sx={{ m: 6 }}>{children}</Box>;
};
