import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import AlertCustom from './alert-custom';
import AlertCustomSlice from './alert-custom-slice';

import { SxProps } from '@mui/material';
import { ButtonCustomProps } from '../button/button-custom';

type AlertCustomContextType = {
  isOpen: boolean;
  openAlert: (detailOpen?: DetailOpenAlertProps) => void;
  closeAlert: () => void;
  isOpenMulti: DetailOpenAlertProps[];
  openMultiAlert: (detailOpen: DetailOpenAlertProps) => void;
  closeMultiAlert: (index?: number) => void;
};

const AlertCustomContext = createContext<AlertCustomContextType | null>(null);

export const useAlertCustom = () => {
  const context = useContext(AlertCustomContext);
  if (!context) {
    throw new Error('useAlertCustomContext must be used within an AlertCustomProvider');
  }
  return context;
};

type AlertCustomProviderProps = {
  children: React.ReactNode;
};

export type AlertCustomType = 'DIALOG' | 'SLICE';

export type InfoAlertProps = {
  iconAlert?: string | React.ReactNode;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
};

export type AlertDetailProps = {
  component?: string | React.ReactNode;
  disabledClikOutSide?: boolean;
  noTime?: boolean;
  time?: number;
  infoAlert?: InfoAlertProps;
  status?: AlertStatus;
  showCloseButton?: boolean;
  showButton?: boolean;
  buttonEnter?: boolean;
  buttonEnterText?: string;
  buttonEnterProps?: ButtonCustomProps;
  handleSubmit?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonCancel?: boolean;
  buttonCancelText?: string;
  buttonCancelProps?: ButtonCustomProps;
  handleCancel?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonOther?: boolean;
  buttonOtherText?: string;
  buttonOtherProps?: ButtonCustomProps;
  handleOther?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  before?: () => void;
  after?: () => void;
  styleContainerAlert?: SxProps;
};

export type AlertStatus = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

export type DetailOpenAlertProps = {
  type?: AlertCustomType;
} & AlertDetailProps;

export const AlertCustomProvider = ({ children }: AlertCustomProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenMulti, setIsOpenMulti] = useState<DetailOpenAlertProps[]>([]);
  const [indexCurrent, setIndexCurrent] = useState<boolean>(false);

  const [alertType, setAlertType] = useState<AlertCustomType | ''>('');
  const [alertDetail, setAlertDetail] = useState<AlertDetailProps>({});

  const timeoutRef = useRef<any>(null);

  const openAlert = async (detailOpen?: DetailOpenAlertProps) => {
    if (detailOpen) {
      const { type, before, ...detailOpens } = detailOpen;
      before && before();
      setAlertType(detailOpen?.type || 'DIALOG');
      setAlertDetail(detailOpens);
      // setFuncAfterAlert(() => after);
    }
    setIsOpen(true);
  };
  const closeAlert = () => {
    setIsOpen(false);
  };

  const openMultiAlert = (detailOpen: DetailOpenAlertProps) => {
    if (detailOpen) {
      setAlertType('SLICE');
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIndexCurrent(true);
    setIsOpenMulti((prev) => [...prev, { ...detailOpen }]);
    timeoutRef.current = setTimeout(() => {
      setIndexCurrent(false);
      timeoutRef.current = null;
    }, 2300);
  };
  const closeMultiAlert = (index?: number) => {
    const newOpenMulti = [...isOpenMulti].filter((item, num) => num !== index);
    setIsOpenMulti(newOpenMulti);
  };

  useEffect(() => {
    if (!indexCurrent) {
      setIsOpenMulti([]);
    }
  }, [indexCurrent]);

  return (
    <AlertCustomContext.Provider
      value={{
        isOpen,
        openAlert,
        closeAlert,
        isOpenMulti,
        openMultiAlert,
        closeMultiAlert,
      }}
    >
      {children}
      {alertType === 'DIALOG' && <AlertCustom {...alertDetail} />}
      {alertType === 'SLICE' && <AlertCustomSlice />}
    </AlertCustomContext.Provider>
  );
};
