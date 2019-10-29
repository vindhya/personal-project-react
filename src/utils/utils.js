import { API_PREFIX, API_SUFFIX } from '../constants';

// what is the correct return value when invalid parameters are passed?
// i.e., parameter(s) not defined

export const capitalize = str => {
  if (str) {
    const strArray = str.split('');
    strArray[0] = strArray[0].toUpperCase();
    return strArray.join('');
  }
  return null;
};

export const getEventApiUrl = username =>
  username ? API_PREFIX + username + API_SUFFIX : null;
