export const capitalize = str => {
  const strArray = str.split('');
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join('');
};
