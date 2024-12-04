import { Box, SxProps, Typography } from '@mui/material';
import { useThemeCustom } from '../../theme/theme-context';
import { useCallback } from 'react';

type AvatarCustomProps = {
  sxContainer?: SxProps;
  sxImage?: SxProps;
  sxText?: SxProps;
  text?: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const AvatarCustom = (props: AvatarCustomProps) => {
  const { colors } = useThemeCustom();

  const { sxContainer, sxImage, size = 'md', text, sxText } = props;

  const renderSizeAvatar = useCallback(() => {
    let width = 25;
    let height = 25;

    switch (size) {
      case 'md': {
        width = 35;
        height = 35;
        break;
      }
      case 'lg': {
        width = 45;
        height = 45;
        break;
      }
      case 'xl': {
        width = 55;
        height = 55;
        break;
      }
      default: {
        width = 25;
        height = 25;
        break;
      }
    }

    return {
      width,
      height,
    };
  }, [size]);

  return (
    <Box sx={{ ...sxContainer }}>
      <Box sx={{ borderRadius: '50%', bgcolor: colors.primary_200, alignContent: 'center', textAlign: 'center', ...renderSizeAvatar(), ...sxImage }}>
        {text && <Typography sx={{ fontSize: '16px', fontWeight: '600', ...sxText }}>{text[0].toString().toUpperCase()}</Typography>}
      </Box>
    </Box>
  );
};

export default AvatarCustom;
