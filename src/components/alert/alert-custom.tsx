import React, { useState, useEffect, useRef } from 'react';
import { styled, Box } from '@mui/material';
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
}));

type AlertCustomProps = AlertDetailProps;

const AlertCustom = (props: AlertCustomProps) => {
  const { t } = useTranslation();
  const { colors } = useThemeCustom();
  const { isOpen, closeAlert, openAlert } = useAlertCustom();
  const {
    infoAlert,
    noTime = true,
    disabledClikOutSide = true,
    status = 'INFO',
    showCloseButton = true,
    showButton = true,
    buttonEnter = true,
    buttonEnterText = t('BUTTON.OK'),
    buttonCancel = true,
    buttonCancelText = t('BUTTON.CANCEL'),
  } = props;
  const newTime = props?.time || 2000;
  const alertRef = useRef<HTMLElement | null>(null);

  const [isShow, setIsShow] = useState<boolean>(false);

  const onCloseAlert = (time?: boolean) => {
    const times = time ? newTime + 200 : 200;

    setTimeout(() => {
      closeAlert();
      props?.after && props?.after();
    }, times);
  };

  useEffect(() => {
    if (isShow && (noTime || props?.time)) {
      setTimeout(() => {
        setIsShow(false);
      }, newTime);
      onCloseAlert(true);
    }
  }, [isShow]);

  useEffect(() => {
    if (isOpen) {
      setIsShow(isOpen);
    }
  }, [isOpen]);

  useClickOutSide({
    ref: alertRef,
    handler: () => {
      if (disabledClikOutSide) {
        setIsShow(false);
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
            minWidth: '250px',
            height: 'fit-content',
            backgroundColor: colors.bgSubItem,
            borderRadius: '10px',
            transition: 'all 0.2s ease-in-out',
            opacity: isShow ? '1' : '0',
            padding: '16px',
            color: colors.text,
            position: 'relative',
            boxShadow: colors.bs_5,
            ...props?.styleContainerAlert,
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
                console.log('222 ccc');
                setIsShow(false);
                onCloseAlert();
              }}
            >
              <IconClose fill={colors.text} />
            </Box>
          )}
          <Box sx={{ textAlign: 'center' }}>{renderIconAlert()}</Box>

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
          {showButton && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '16px',
              }}
            >
              {buttonCancel && (
                <ButtonCustom
                  variant="outlined"
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
              {buttonEnter && (
                <ButtonCustom
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
