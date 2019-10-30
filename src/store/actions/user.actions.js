export const USER_ACTION_TYPE = {
  TOGGLE_SHOW_USER: 'show user',
  SET_USERNAME: 'set username',
  SET_INPUT_VALUE: 'set input value'
};

export const toggleShowUser = () => ({
  type: USER_ACTION_TYPE.TOGGLE_SHOW_USER
});

export const setUsername = username => ({
  type: USER_ACTION_TYPE.SET_USERNAME,
  payload: username
});

export const setUserInput = input => ({
  type: USER_ACTION_TYPE.SET_INPUT_VALUE,
  payload: input
});
