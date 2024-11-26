export const handleGetOptionLabel = (option: unknown, key: string) => {
  if (typeof option === 'object' && option !== null && `${key}` in option) {
    return (option as { [key: string]: string })[key];
  }
  return '';
};
