import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { useThemeCustom } from '../../theme/theme-context';

const HomeSection = () => {
  const { colors } = useThemeCustom();
  return (
    <Box padding={'16px 24px'} height={'100%'}>
      <Box width="100%">
        <Box width="fit-content" border={`.5px solid ${colors.border.gray}`} padding="16px" borderRadius="6px" boxShadow={colors.bs_3}>
          <Typography>{t('Welcome')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection;
