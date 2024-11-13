import { KEY_STORAGE } from '../constants/common';

export const adjustColor = (color: string, amount: number = 0, format: 'hex' | 'rgb' = 'rgb'): string => {
  const colorValue = color.startsWith('#') ? color.slice(1) : color;

  const num = parseInt(colorValue, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  if (format === 'hex') {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  } else {
    return `rgba(${r}, ${g}, ${b},1)`;
  }
};

export const adjustOpacity = (color: string, adjustment: number): string => {
  const colorValue = adjustColor(color, 0);

  const rgbaMatch = colorValue.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);

  if (!rgbaMatch) {
    throw new Error('want rgba');
  }

  const [, r, g, b, a = '1'] = rgbaMatch;

  return `rgba(${r}, ${g}, ${b}, ${adjustment})`;
};
