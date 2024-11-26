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
import { handleGetOptionLabel } from '../../../utils/autocomplete-utils';
import { CreateUserCustomerRequest } from '../../../proto/user_pb';
import dayjs from 'dayjs';
import { ConvertTimeToTimestamp } from '../../../utils/time-utils';
import { Gender } from '../../../proto/enum_pb';
import { userGRPC } from '../../../api/gapi/user.gapi';

const initRegsiter = {
  username: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  birth: null,
  gender: null,
};

const initRegsiterError = {
  username: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  birth: '',
  gender: '',
};

const RegisterSection = () => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { openMultiAlert } = useAlertCustom();
  const [loading, setLoading] = useState<boolean>(false);

  const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState<boolean>(true);

  const [dataRegister, setDataRegister] = useState<RegisterInterface>(initRegsiter);
  const [errorMsg, setErrorMsg] = useState(initRegsiterError);

  const handleCheckErrorSubmit = () => {
    const checkErr = errorMsg;

    if (dataRegister.username === '' || !dataRegister.username) {
      checkErr.username = t('REGISTER.MESSAGE.USERNAME');
    }

    if (dataRegister.password === '' || !dataRegister.password) {
      checkErr.password = t('REGISTER.MESSAGE.PASSWORD');
    }

    if (dataRegister.confirmPassword === '' || !dataRegister.confirmPassword) {
      checkErr.confirmPassword = t('REGISTER.MESSAGE.CONFIRM_PASSWORD');
    }

    if (dataRegister.firstname === '' || !dataRegister.firstname) {
      checkErr.firstname = t('REGISTER.MESSAGE.FIRSTNAME');
    }

    if (dataRegister.lastname === '' || !dataRegister.lastname) {
      checkErr.lastname = t('REGISTER.MESSAGE.LASTNAME');
    }

    if (dataRegister.birth === null || !dataRegister.birth) {
      checkErr.birth = t('REGISTER.MESSAGE.BIRTHDAY');
    }

    if (dataRegister.gender === null || !dataRegister.gender.value) {
      checkErr.gender = t('REGISTER.MESSAGE.GENDER');
    }

    return checkErr;
  };

  const onSubmitRegister = async () => {
    setLoading(true);
    const checkError = handleCheckErrorSubmit();
    setErrorMsg(checkError);

    if (Object.values(checkError).some((value) => value !== '')) {
      Object.values(checkError)
        .filter((value) => value)
        .forEach((value, index) => {
          if (value) {
            setTimeout(() => {
              openMultiAlert({
                component: <Typography>{value}</Typography>,
              });
            }, index * 150);
          }
        });

      return setLoading(false);
    }

    if (dataRegister.gender === null || !dataRegister.gender.value) {
      return setLoading(false);
    }

    const newReq = new CreateUserCustomerRequest();
    newReq.setFirstname(dataRegister.firstname);
    newReq.setLastname(dataRegister.lastname);
    newReq.setGender(dataRegister.gender.value as Gender);
    // newReq.setGender(Gender.FEMALE);
    newReq.setBirthday(ConvertTimeToTimestamp(dayjs(dataRegister.birth)));
    newReq.setUsername(dataRegister.username);
    newReq.setPassword(dataRegister.password);
    console.log('222 newReq', newReq.toObject(), dataRegister.gender?.valueOf());
    // await userGRPC
    //   .createUserCustomer(newReq)
    //   .then((data) => {
    //     console.log('222 ', data); // Handle successful response
    //   })
    //   .catch((error) => {
    //     console.error('222 Error:', error); // Handle error
    //   })
    //   .finally(() => setLoading(false));
  };

  const handleChangeDataRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newObj = { name: e.target.name, value: e.target.value };
    handleChangeDataRegister(newObj);
  };

  const handleChangeDataRegister = (obj: { name: string; value: any }) => {
    setDataRegister((prev) => ({ ...prev, [obj.name]: obj.value }));
    setErrorMsg((prev) => ({ ...prev, [obj.name]: '' }));
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
                  <InputCustom
                    required
                    fullWidth
                    name="username"
                    label={t('REGISTER.FORM.USERNAME')}
                    value={dataRegister.username}
                    onChange={handleChangeDataRegisterInput}
                    helperText={t(`${errorMsg.username}`)}
                  />
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Box>
                  <InputCustom
                    required
                    fullWidth
                    name="password"
                    label={t('REGISTER.FORM.PASSWORD')}
                    value={dataRegister.password}
                    onChange={handleChangeDataRegisterInput}
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
                    name="confirmPassword"
                    label={t('REGISTER.FORM.CONFIRM_PASSWORD')}
                    value={dataRegister.confirmPassword}
                    helperText={t(`${errorMsg.confirmPassword}`)}
                    onChange={handleChangeDataRegisterInput}
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
              <InputCustom
                required
                fullWidth
                name="firstname"
                label={t('REGISTER.FORM.FIRSTNAME')}
                value={dataRegister.firstname}
                onChange={handleChangeDataRegisterInput}
                helperText={t(`${errorMsg.firstname}`)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputCustom
                required
                fullWidth
                name="lastname"
                label={t('REGISTER.FORM.LASTNAME')}
                value={dataRegister.lastname}
                onChange={handleChangeDataRegisterInput}
                helperText={t(`${errorMsg.lastname}`)}
              />
            </Grid2>
          </Grid2>
          <Grid2 container size={12}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <InputDateCustom
                fullWidth
                required
                name="birth"
                label={t('REGISTER.FORM.BIRTHDAY')}
                value={dataRegister?.birth || null}
                onChange={(value) => {
                  const newObj = {
                    name: 'birth',
                    value: value,
                  };
                  handleChangeDataRegister(newObj);
                }}
                helperText={t(`${errorMsg.birth || ''}`)}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box>
                <AutocompleteCustom
                  options={genderOp}
                  name="gender"
                  label={t('REGISTER.FORM.GENDER')}
                  getOptionLabel={(option) => t(handleGetOptionLabel(option, 'label'))}
                  value={dataRegister.gender}
                  onChange={(_, newValue: any) => {
                    const newObj = {
                      name: 'gender',
                      value: newValue || {},
                    };
                    handleChangeDataRegister(newObj);
                  }}
                  helpertext={t(`${errorMsg.gender}`)}
                  required
                />
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
        <Box textAlign="center">
          <ButtonCustom onClick={onSubmitRegister} sx={{ fontSize: '17px', minWidth: '300px' }} disabled={loading}>
            {t('BUTTON.REGISTER')}
          </ButtonCustom>
        </Box>
      </CardCustom>
    </Box>
  );
};

export default RegisterSection;
