import React from 'react';
import { IconProps } from '../../constants/icon';
import { useThemeCustom } from '../../theme/theme-context';

const IconClose = (props: IconProps) => {
  const { colors } = useThemeCustom();
  return (
    <svg
      width={props?.width || '24px'}
      height={props?.height || '24px'}
      fill={props?.fill || colors.text}
      viewBox="0 0 64 64"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <rect id="Icons" x="-448" y="-64" width="1280" height="800" style={{ fill: 'none' }}></rect>
        <g id="Icons1">
          <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g>
          <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g>
          <g id="hamburger-2"> </g> <g id="list-ol"> </g>
          <g id="list-task"> </g> <g id="trash"> </g>
          <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g>
          <g id="sidebar-2"> </g> <g id="Pen"> </g>
          <g id="Pen1"></g>
          <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g>
          <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g>
          <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g>
          <g id="logo"> </g>
          <path
            id="times"
            d="M32.033,29.19l15.55,-15.55l2.863,2.863l-15.55,15.55l15.55,15.55l-2.863,2.863l-15.55,-15.55l-15.55,15.55l-2.863,-2.863l15.55,-15.55l-15.55,-15.55l2.863,-2.863l15.55,15.55Z"
          ></path>
          <path d="M32.033,29.19l15.55,-15.55l2.863,2.863l-15.55,15.55l15.55,15.55l-2.863,2.863l-15.55,-15.55l-15.55,15.55l-2.863,-2.863l15.55,-15.55l-15.55,-15.55l2.863,-2.863l15.55,15.55Z"></path>
          <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g>
          <g id="toggle-off"> </g> <g id="shredder"> </g>
          <g id="spinner--loading--dots-"></g>
          <g id="react"> </g> <g id="check-selected"> </g>
          <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g>
          <g id="coffee-bean"> </g>
          <g id="coffee-beans">
            <g id="coffee-bean1"></g>
          </g>
          <g id="coffee-bean-filled"> </g>
          <g id="coffee-beans-filled">
            <g id="coffee-bean2"></g>
          </g>
          <g id="clipboard"> </g> <g id="clipboard-paste"> </g>
          <g id="clipboard-copy"> </g> <g id="Layer1"> </g>
        </g>
      </g>
    </svg>
  );
};

export default IconClose;
