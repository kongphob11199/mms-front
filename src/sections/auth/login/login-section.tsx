import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeCustom } from '../../../theme/theme-context';
import InputCustom from '../../../components/input/input-custom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ButtonCustom from '../../../components/button/button-custom';

import { adjustOpacity } from '../../../utils/color-utils';
import CardCustom from '../../../components/card/card-custom';
import { LoginRequest } from '../../../proto/auth_pb';
import { authGRPC } from '../../../api/gapi/auth.gapi';
import { setToken } from '../../../utils/app-utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../../routes/route-path';
import Loading from '../../../components/load/loading';
import { useAlertCustom } from '../../../components/alert/use-alert-custom';

const LoginSection = () => {
  const { t } = useTranslation();
  const { openMultiAlert } = useAlertCustom();
  const { colors, handleChangeTheme } = useThemeCustom();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState({ username: '', password: '' });
  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);

  const [textError, setTextError] = useState('');

  const handleChangeDataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const submitLogin = async () => {
    if (!dataLogin.username || !dataLogin.password) {
      setErrorMsg((prev) => ({ ...prev, username: !dataLogin.username ? t('REGISTER.MESSAGE.USERNAME') : '', password: !dataLogin.password ? t('REGISTER.MESSAGE.PASSWORD') : '' }));
    } else {
      setLoading(true);
      const newReq = new LoginRequest();
      newReq.setUsername(dataLogin.username);
      newReq.setPassword(dataLogin.password);
      await authGRPC
        .login(newReq)
        .then((res) => {
          setToken(res.token);
          navigate(ROUTES_PATH.MAIN.HOME);
        })
        .catch((error) => {
          setDataLogin((prev) => ({ username: '', password: '' }));
          const msg = ['NOTFOUND_USER_LOGIN', 'INVALID_PASSWORD_LOGIN'];
          const msgError = msg.some((item) => item === error.message) ? error.message : 'ERROR';
          setTextError(JSON.stringify(error));
          openMultiAlert({
            component: <Typography>{t(`LOGIN.MESSAGE.${msgError}`)}</Typography>,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Box width="100%" height="100%" display="flex">
      <Loading show={loading} />
      <Box width={{ md: '30%', xs: '0' }} height="100%" bgcolor={colors.bgMenu} boxShadow={colors.bs_2} sx={{ transition: 'width 0.2s ease-in-out' }}></Box>
      <Box width={{ md: '70%', xs: '100%' }} height="100%" alignContent="center" padding="16px">
        <CardCustom
          sx={{
            maxWidth: '480px',
            width: '100%',
            margin: 'auto',
            padding: '48px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            borderRadius: '12px',
          }}
        >
          <Box marginBottom="16px" textAlign="center">
            <Typography variant="h5">{t('LOGIN.LOGIN_TITLE')}</Typography>
          </Box>
          <Box>
            <InputCustom fullWidth name={'username'} label={t('LOGIN.FORM.USERNAME')} value={dataLogin.username} onChange={handleChangeDataLogin} helperText={errorMsg.username} />
          </Box>
          <Box>
            <InputCustom
              fullWidth
              name={'password'}
              label={t('LOGIN.FORM.PASSWORD')}
              type={isHidePassword ? 'password' : 'text'}
              value={dataLogin.password}
              onChange={handleChangeDataLogin}
              helperText={errorMsg.password}
              endadornment={
                <IconButton sx={{ color: colors.text, padding: 0 }} onClick={() => setIsHidePassword(!isHidePassword)}>
                  {isHidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              }
            />
          </Box>
          <Box marginTop="16px">
            <ButtonCustom fullWidth onClick={() => submitLogin()} btnshadow="btn-shadow-better" sx={{ fontSize: '17px' }}>
              {t('LOGIN.BUTTON.LOGIN')}
            </ButtonCustom>
          </Box>
          <Box marginTop="16px">{textError}</Box>
        </CardCustom>
      </Box>
    </Box>
  );
};

export default LoginSection;
