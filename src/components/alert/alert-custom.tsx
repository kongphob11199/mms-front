import React, { useState, useEffect, useRef, useCallback } from 'react';
import { styled, Box, useTheme } from '@mui/material';
import { AlertDetailProps, useAlertCustom } from './use-alert-custom';

import IconSuccess from '../../assets/alert/icon-success';
import IconError from '../../assets/alert/icon-error';
import IconWarning from '../../assets/alert/icon-warning';
import IconInfo from '../../assets/alert/icon-info';

import IconClose from '../../assets/alert/icon-close';
import { useThemeCustom } from '../../theme/theme-context';
import ButtonCustom from '../button/button-custom';
import useClickOutSide from '../../utils/use-clickoutside';
import { useTranslation } from 'react-i18next';

const AlertCustoms = styled(Box)<{}>(({ theme }) => ({
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10%',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

type AlertCustomProps = AlertDetailProps;

const AlertCustom = (props: AlertCustomProps) => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { isOpen, closeAlert } = useAlertCustom();
  const {
    infoAlert,
    noTime,
    disabledClikOutSide = true,
    status = 'INFO',
    showCloseButton = true,
    showButton = true,
    buttonEnter = true,
    buttonEnterText = t('BUTTON.OK'),
    buttonCancel = true,
    buttonCancelText = t('BUTTON.CANCEL'),
    component,
  } = props;
  const newTime = props?.time || 2000;
  const alertRef = useRef<HTMLElement | null>(null);
  const theme = useTheme();

  const [isShow, setIsShow] = useState<boolean>(false);

  const timeoutRef = useRef<any>(null);

  const onCloseAlert = useCallback(
    (time?: boolean) => {
      const delayTime = time ? newTime : 0;
      const times = time ? newTime + 200 : 200;
      setTimeout(() => {
        setIsShow(false);
      }, delayTime);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        closeAlert();
        props?.after && props?.after();
        timeoutRef.current = null;
      }, times);
    },
    [newTime, closeAlert, props]
  );

  useEffect(() => {
    if (isOpen) {
      setIsShow(isOpen);
      if (!noTime) {
        onCloseAlert(true);
      }
    }
  }, [isOpen, noTime, onCloseAlert]);

  useClickOutSide({
    ref: alertRef,
    handler: () => {
      if (disabledClikOutSide) {
        onCloseAlert();
      }
    },
  });

  const renderIconAlert = () => {
    const styleIcon = {
      fill: colors.status[status.toLocaleLowerCase() as 'success' | 'warning' | 'info' | 'error'],
      width: '100px',
      height: '100px',
    };
    switch (status) {
      case 'WARNING':
        return <IconWarning {...styleIcon} />;
      case 'SUCCESS':
        return <IconSuccess {...styleIcon} />;
      case 'ERROR':
        return <IconError {...styleIcon} />;
      default:
        return <IconInfo {...styleIcon} />;
    }
  };

  if (isOpen) {
    return (
      <AlertCustoms>
        <Box
          ref={alertRef}
          sx={{
            width: 'fit-content',
            minWidth: '350px',
            height: 'fit-content',
            backgroundColor: colors.bgSubItem,
            borderRadius: '10px',
            transition: 'all 0.2s ease-in-out',
            opacity: isShow ? '1' : '0',
            padding: '24px',
            color: colors.text,
            position: 'relative',
            boxShadow: colors.bs_5,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            ...props?.styleContainerAlert,
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100%',
              minWidth: '100%',
            },
          }}
        >
          {showCloseButton && (
            <Box
              sx={{
                right: '16px',
                top: '16px',
                position: 'absolute',
                cursor: 'pointer',
              }}
              onClick={() => {
                onCloseAlert();
              }}
            >
              <IconClose fill={colors.text} />
            </Box>
          )}
          <Box sx={{ textAlign: 'center' }}>{renderIconAlert()}</Box>

          <Box display={infoAlert?.title || infoAlert?.subTitle ? 'block' : 'none'}>
            {infoAlert?.title && (
              <Box
                sx={{
                  textAlign: 'center',
                  fontSize: '28px',
                  fontWeight: '700',
                }}
              >
                {infoAlert.title}
              </Box>
            )}
            {infoAlert?.subTitle && <Box sx={{ textAlign: 'center' }}>{infoAlert.subTitle}</Box>}
          </Box>

          {component}
          {showButton && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '16px',
              }}
            >
              {buttonEnter && (
                <ButtonCustom
                  // status="success"
                  typecolor="secondary"
                  btnshadow="none"
                  {...props?.buttonEnterProps}
                  onClick={(event) => {
                    props?.handleSubmit && props?.handleSubmit(event);
                    props?.buttonEnterProps?.onClick && props?.buttonEnterProps?.onClick(event);
                    onCloseAlert();
                  }}
                >
                  {buttonEnterText}
                </ButtonCustom>
              )}
              {props?.buttonOther && (
                <ButtonCustom
                  {...props?.buttonOtherProps}
                  onClick={(event) => {
                    props?.handleOther && props?.handleOther(event);
                    props?.buttonOtherProps?.onClick && props?.buttonOtherProps?.onClick(event);
                    onCloseAlert();
                  }}
                >
                  {props?.buttonOtherText || ''}
                </ButtonCustom>
              )}
              {buttonCancel && (
                <ButtonCustom
                  variant="outlined"
                  status="cancel"
                  {...props?.buttonCancelProps}
                  onClick={(event) => {
                    props?.handleCancel && props?.handleCancel(event);
                    props?.buttonCancelProps?.onClick && props?.buttonCancelProps?.onClick(event);
                    onCloseAlert();
                  }}
                >
                  {buttonCancelText}
                </ButtonCustom>
              )}
            </Box>
          )}
        </Box>
      </AlertCustoms>
    );
  } else {
    return <></>;
  }
};

export default AlertCustom;
