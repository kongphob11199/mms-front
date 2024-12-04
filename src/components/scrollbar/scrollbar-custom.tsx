import { Box, styled } from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

type ScrollbarCustomProps = {
  children?: React.ReactNode;
};

const ScrollbarCustomDefault = (props: ScrollbarCustomProps) => {
  const { children } = props;
  return <Box component={SimpleBar}>{children || ''}</Box>;
};

const ScrollbarCustom = styled(ScrollbarCustomDefault)(({ theme }) => ({}));

export default ScrollbarCustom;
