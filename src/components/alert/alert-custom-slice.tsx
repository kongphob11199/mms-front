import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DetailOpenAlertProps, useAlertCustom } from './use-alert-custom';
import { useThemeCustom } from '../../theme/theme-context';

const AlertCustomSlice = () => {
  const { isOpenMulti, closeMultiAlert } = useAlertCustom();

  if (isOpenMulti?.length) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: `16px`,
          right: '16px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {isOpenMulti.map((item, index) => {
          return <AlertSlice key={index} index={index} item={item} />;
        })}
      </Box>
    );
  } else {
    return <></>;
  }
};

type AlertSliceProps = {
  index: number;
  item: DetailOpenAlertProps;
};

const AlertSlice = (props: AlertSliceProps) => {
  const { colors } = useThemeCustom();
  const { isOpenMulti, isCloseMulti, closeMultiAlert } = useAlertCustom();
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
      // setTimeout(() => {
      //   closeMultiAlert(props.index);
      // }, 2300);
    }
  }, [isShow]);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        // minWidth: isShow ? "250px" : "0px",
        height: '100%',
        padding: isShow ? '12px 30px 12px 50px' : '0',
        backgroundColor: colors.bgSubItem,
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        opacity: isShow ? '1' : '0',
        position: 'relative',
        color: colors.text,
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <Box
        // onClick={() => {
        //   setIsShow(false);
        //   console.log("222 del props.item?.id", props.item?.id);
        //   setTimeout(() => {
        //     closeMultiAlert(props.item?.id);
        //   }, 300);
        // }}
        sx={{
          background: `linear-gradient(90deg, ${colors.error} 70%, transparent 100%)`,
          position: 'absolute',
          left: '0',
          width: '40px',
          height: '100%',
        }}
      ></Box>
      <Box>AlertCustomSlice </Box>
    </Box>
  );
};

export default AlertCustomSlice;
