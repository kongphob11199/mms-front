import React, { useCallback } from 'react';
import { useThemeCustom } from '../../theme/theme-context';
import { Box, Grid2, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { adjustOpacity } from '../../utils/color-utils';
import IconHome from '../../assets/icon/icon-home';
import { useTranslation } from 'react-i18next';

interface MainNavMenuProps {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNavMenu = (props: MainNavMenuProps) => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { isOpenNav, setIsOpenNav } = props;

  const renderNavMenuItemStyle = useCallback(() => {
    if (!isOpenNav) {
      return {
        '.nav-menu-item': {
          flexDirection: 'column',
          svg: {
            width: '24px',
            height: '24px',
          },
          '.MuiTypography-root': {
            fontSize: '12.5px ',
          },
        },
      };
    } else {
      return {};
    }
  }, [isOpenNav]);

  return (
    <Grid2
      flexBasis={{ lg: `${isOpenNav ? '300px' : '100px'}`, xs: `0` }}
      position={{ lg: 'relative', xs: 'absolute' }}
      width={{ sm: '300px', xs: '100%' }}
      height="100%"
      top={0}
      left={{ lg: `0`, sm: `${isOpenNav ? '0px' : '-300px'}`, xs: `${isOpenNav ? '0px' : '1000%'}` }}
      bgcolor={{ lg: adjustOpacity(colors.bgMenu, 0.45), xs: colors.bgMenu }}
      boxShadow={colors.bs_2}
      sx={{ transition: 'flex-basis 0.2s ease-in-out, left 0.2s ease-in-out' }}
    >
      <Box
        display={{ lg: 'block', xs: `${isOpenNav ? 'block' : 'none'}` }}
        width={'100%'}
        height={'100%'}
        padding={{ lg: isOpenNav ? '16px' : '16px 8px', xs: '8px 16px' }}
        position={'relative'}
        sx={{
          transition: 'padding 0.2s ease-in-out',
          ...renderNavMenuItemStyle(),
        }}
      >
        <Box display={{ lg: 'none', xs: 'block' }} marginBottom="18px">
          <Box display="flex" alignItems="center" gap="16px">
            <Box>
              <IconButton onClick={() => setIsOpenNav(!isOpenNav)}>
                <MenuIcon sx={{ color: colors.text, fontSize: '25px' }} />
              </IconButton>
            </Box>
            <Box>MMS</Box>
          </Box>
        </Box>
        <Box
          className={`nav-menu-item`}
          padding="8px"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          gap="8px 16px"
          flexDirection="row"
          sx={{ transition: 'background-color 0.15s ease-in-out', cursor: 'pointer', ':hover': { backgroundColor: adjustOpacity(colors.primary_500, 0.15) } }}
        >
          <IconHome width="30px" height="30px" fill={colors.primary_300} />
          <Typography className="text-overflow-ellipsis" width="100%">
            {t('MENU.HOME')}
          </Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default MainNavMenu;
