import { Box } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { DetailOpenAlertProps, useAlertCustom } from './use-alert-custom';
import { useThemeCustom } from '../../theme/theme-context';
import { ThemeColosStatus } from '../../theme/color';

const AlertCustomSlice = () => {
  const { isOpenMulti } = useAlertCustom();
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
          alignItems: 'flex-end',
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
  const { item } = props;
  const { colors } = useThemeCustom();
  // const { isOpenMulti, isCloseMulti, closeMultiAlert } = useAlertCustom();
  const [isShow, setIsShow] = useState<boolean>(false);

  // useEffect(() => {
  //   if (isShow) {
  //     setTimeout(() => {
  //       setIsShow(false);
  //     }, 2000);
  //     // setTimeout(() => {
  //     //   closeMultiAlert(props.index);
  //     // }, 2300);
  //   }
  // }, [isShow]);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const renderColorItem = useCallback(() => {
    if (!item?.status) {
      return colors.status.error;
    }

    return colors.status[item.status.toLowerCase() as ThemeColosStatus];
  }, [item?.status, colors]);

  return (
    <Box
      sx={{
        width: 'fit-content',
        minWidth: isShow ? '170px' : '0px',
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
        boxShadow: colors.bs_2,
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
          backgroundColor: renderColorItem(),
          position: 'absolute',
          left: '0',
          width: '15px',
          height: '100%',
        }}
      ></Box>
      <Box>{item?.component} </Box>
    </Box>
  );
};

export default AlertCustomSlice;
