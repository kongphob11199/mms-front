import { Box, SxProps } from '@mui/material';
import React from 'react';
import { useThemeCustom } from '../../theme/theme-context';

type CardCustomProps = {
  sx?: SxProps;
  children: React.ReactNode;
};

const CardCustom = (props: CardCustomProps) => {
  const { sx, children } = props;
  const { colors } = useThemeCustom();
  return (
    <Box bgcolor={colors.bgSub} boxShadow={colors.bs_3} height="fit-content" sx={{ ...sx }}>
      {children}
    </Box>
  );
};

export default CardCustom;
