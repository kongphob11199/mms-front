import { Box } from '@mui/material';
import React, { useTransition } from 'react';
import { useThemeCustom } from '../../theme/theme-context';

type LoadingProps = {
  show: boolean;
};
const Loading = (props: LoadingProps) => {
  const { colors } = useThemeCustom();
  const { show } = props;
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: '9999',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: show ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgBlur,
      }}
    >
      <Box
        sx={{
          width: '70px',
          aspectRatio: '1',
          borderRadius: '50%',
          background: `radial-gradient(farthest-side, ${colors.primary} 94%, transparent) top/8px 8px no-repeat, conic-gradient(transparent 30%, ${colors.primary} 100% )`,
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 12px), ${colors.black} 0)`,
          animation: 'l13 0.5s infinite linear',
          '@keyframes l13': {
            '100%': {
              transform: 'rotate(1turn)',
            },
          },
        }}
      />
    </Box>
  );
};

export default Loading;
