import { Box, Grid2, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardCustom from '../../../components/card/card-custom';
import InputCustom from '../../../components/input/input-custom';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useThemeCustom } from '../../../theme/theme-context';
import InputDateCustom from '../../../components/input/input-date-custom';
import AutocompleteCustom from '../../../components/select/autocomplete-custom';
import { genderOp } from '../../../constants/info/general-info';
import ButtonCustom from '../../../components/button/button-custom';
import { RegisterInterface } from './register-interface';
import { useAlertCustom } from '../../../components/alert/use-alert-custom';

const initRegsiter = {
  username: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  birth: null,
  gender: '',
};

const initErrorMsg = initRegsiter;

const RegisterSection = () => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { openAlert, openMultiAlert } = useAlertCustom();

  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState<boolean>(true);

  const [dataRegister, setDataRegister] = useState<RegisterInterface>(initRegsiter);
  const [errorMsg, setErrorMsg] = useState(initErrorMsg);

  const handleCheckErrorSubmit = () => {
    return true;
  };

  const onSubmitRegister = () => {
    const checkError = handleCheckErrorSubmit();

    if (checkError) {
      console.log('222 come');
      openMultiAlert({
        component: '1',
      });
      // openAlert({});
      return;
    }
  };

  return (
    <Box width="100vw" height="100vh" alignContent="center" padding="16px" overflow="hidden">
      <CardCustom
        sx={{
          maxWidth: '700px',
          width: '100%',
          margin: 'auto',
          padding: '24px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          overflow: 'auto',
          height: 'fit-content',
          maxHeight: '100%',
        }}
      >
        <Box textAlign="center">
          <Typography fontSize="20px" fontWeight="500">
            {t('REGISTER.TITLE')}
          </Typography>
        </Box>
        <Grid2 container display="flex" flexDirection="column" spacing={2}>
          <Grid2 container size={12}>
            <Grid2 container size={{ xs: 12, md: 6 }}>
              <Grid2 size={12}>
                <Box>
                  <InputCustom required fullWidth label={t('REGISTER.FORM.USERNAME')} value={dataRegister.username} helperText={t(`${errorMsg.username}`)} />
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Box>
                  <InputCustom
                    required
                    fullWidth
                    label={t('REGISTER.FORM.PASSWORD')}
                    value={dataRegister.password}
                    helperText={t(`${errorMsg.password}`)}
                    type={isHidePassword ? 'password' : 'text'}
                    endadornment={
                      <IconButton sx={{ color: colors.text, padding: 0 }} onClick={() => setIsHidePassword(!isHidePassword)}>
                        {isHidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    }
                  />
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Box>
                  <InputCustom
                    required
                    fullWidth
                    label={t('REGISTER.FORM.CONFIRM_PASSWORD')}
                    value={dataRegister.confirmPassword}
                    helperText={t(`${errorMsg.confirmPassword}`)}
                    type={isHideConfirmPassword ? 'password' : 'text'}
                    endadornment={
                      <IconButton sx={{ color: colors.text, padding: 0 }} onClick={() => setIsHideConfirmPassword(!isHideConfirmPassword)}>
                        {isHideConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    }
                  />
                </Box>
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box alignContent="center" height="100%">
                <Box bgcolor="#ffffff38" width={'170px'} height={'170px'} borderRadius={'50%'} margin="auto" />
              </Box>
            </Grid2>
          </Grid2>

          <Grid2 container size={12}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputCustom required fullWidth label={t('REGISTER.FORM.FIRSTNAME')} value={dataRegister.firstname} helperText={t(`${errorMsg.firstname}`)} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputCustom required fullWidth label={t('REGISTER.FORM.LASTNAME')} value={dataRegister.lastname} helperText={t(`${errorMsg.lastname}`)} />
            </Grid2>
          </Grid2>
          <Grid2 container size={12}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputDateCustom fullWidth required label={t('REGISTER.FORM.BIRTHDAY')} value={dataRegister?.birth || null} helperText={t(`${errorMsg.birth || ''}`)} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box>
                <AutocompleteCustom options={genderOp} label={t('REGISTER.FORM.GENDER')} value={dataRegister.gender} helpertext={t(`${errorMsg.gender}`)} required />
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
        <Box textAlign="center">
          <ButtonCustom onClick={onSubmitRegister} sx={{ fontSize: '17px', minWidth: '300px' }}>
            {t('BUTTON.REGISTER')}
          </ButtonCustom>
        </Box>
      </CardCustom>
    </Box>
  );
};

export default RegisterSection;
