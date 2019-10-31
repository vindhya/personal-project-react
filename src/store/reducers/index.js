import { combineReducers } from 'redux';

import user from './user.reducer';
import events from './events.reducer';

export default combineReducers({ user, events });
