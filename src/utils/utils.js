import { API_PREFIX, API_SUFFIX } from '../constants';

export const capitalize = str => {
  const strArray = str.split('');
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join('');
};

export const getEventApiUrl = username => API_PREFIX + username + API_SUFFIX;
