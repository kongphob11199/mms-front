import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEY_STORAGE } from '../constants/common';

type AuthProps = {
  children: React.ReactNode;
};

const Auth = (props: AuthProps) => {
  const navigate = useNavigate();

  const onCheckTokenUser = () => {
    const token = localStorage.getItem(KEY_STORAGE.TOKEN);
    if (!token) {
      navigate('/auth');
    }
  };

  useEffect(() => {
    onCheckTokenUser();
  }, []);

  return <Box>{props.children}</Box>;
};

export default Auth;
