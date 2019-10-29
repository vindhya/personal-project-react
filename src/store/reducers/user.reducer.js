import { USER_ACTION_TYPE } from '../actions/user.actions';

const INITIAL_STATE = { showUser: false, username: '' };

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case USER_ACTION_TYPE.TOGGLE_SHOW_USER: {
      return { ...state, showUser: !state.showUser };
    }
    case USER_ACTION_TYPE.SET_USERNAME: {
      return { ...state, username: action.payload };
    }
    default:
      return state;
  }
};
