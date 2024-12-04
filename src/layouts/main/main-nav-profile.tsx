import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeCustom } from '../../theme/theme-context';
import { adjustOpacity } from '../../utils/color-utils';
import AvatarCustom from '../../components/avatar/avatar-custom';
import IconButtonCustom from '../../components/button/icon-button-custom';
import CardCustom from '../../components/card/card-custom';
import { useRef, useState } from 'react';
import useClickOutSide from '../../utils/use-clickoutside';
import ButtonCustom from '../../components/button/button-custom';

interface MainNavProfileProps {
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNavProfile = (props: MainNavProfileProps) => {
  const { colors } = useThemeCustom();
  const { isOpenNav, setIsOpenNav } = props;

  const [openProfile, setOpenProfile] = useState(false);
  const btnProfileRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);

  useClickOutSide({
    ref: profileRef,
    refSec: btnProfileRef,
    condition: openProfile,
    handler: () => setOpenProfile(false),
  });

  return (
    <Box
      bgcolor={'var(--layout-nav-bg)'}
      width="100%"
      maxHeight="var(--layout-nav-height)"
      height="var(--layout-nav-height)"
      padding="8px 16px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      sx={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <Box display="flex" alignItems="center" gap="16px">
        <Box>
          <IconButton onClick={() => setIsOpenNav(!isOpenNav)}>
            <MenuIcon sx={{ color: colors.text, fontSize: '25px' }} />
          </IconButton>
        </Box>
        <Box>MMS</Box>
      </Box>

      <Box width="fit-content" sx={{ cursor: 'pointer' }}>
        <Box ref={btnProfileRef}>
          <IconButtonCustom onClick={() => setOpenProfile(!openProfile)}>
            <AvatarCustom text={'username'} />
          </IconButtonCustom>
        </Box>
        <Box ref={profileRef} position="fixed" right="16px" sx={{ opacity: openProfile ? '1' : '0', transition: 'opacity 0.1s ease-in-out' }}>
          <ProfileDesktopBox />
        </Box>
      </Box>
    </Box>
  );
};

export default MainNavProfile;

const ProfileDesktopBox = () => {
  return (
    <>
      <CardCustom backDropBlur sx={{ borderRadius: '6px' }}>
        <Box width="250px" height="fit-content" maxHeight="300px" padding="16px">
          <Box>
            <Box>
              <ButtonCustom variant="outlined" typecolor="secondary">
                Logout
              </ButtonCustom>
            </Box>
          </Box>
        </Box>
      </CardCustom>
    </>
  );
};
