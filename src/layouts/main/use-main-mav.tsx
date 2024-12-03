import React, { useState } from 'react';

const useMainNav = () => {
  const [isOpenNav, setIsOpenNav] = useState(true);

  return { isOpenNav, setIsOpenNav };
};

export default useMainNav;
