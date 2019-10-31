import { combineReducers } from 'redux';

import user from './user.reducer';
import events from './events.reducer';
import { BACK_TO_FORM } from '../actions';

const appReducer = combineReducers({ user, events });

const rootReducer = (state, action) => {
  if (action.type === BACK_TO_FORM) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
