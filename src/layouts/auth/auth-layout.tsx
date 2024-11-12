import { Box } from '@mui/material';
import React from 'react';
import { useThemeCustom } from '../../theme/theme-context';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { colors } = useThemeCustom();

  return (
    <Box width="100vw" height="100vh" bgcolor={colors.bg} color={colors.text} overflow="hidden">
      {props.children}
    </Box>
  );
};

export default AuthLayout;
