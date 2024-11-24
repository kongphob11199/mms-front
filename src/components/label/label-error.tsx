import { Box } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useThemeCustom } from '../../theme/theme-context';

type LabelErrorProps = {
  text: string;
  icon?: React.ReactNode;
};

const LabelError = (props: LabelErrorProps) => {
  const { text } = props;
  const { colors } = useThemeCustom();
  return (
    <Box display="flex" alignItems="center" gap="4px" color={colors.error} sx={{ svg: { marginTop: '2px', width: '14px', height: '14px' } }}>
      <InfoIcon />
      {text}
    </Box>
  );
};

export default LabelError;
