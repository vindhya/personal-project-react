import { EVENTS_ACTION_TYPE } from '../actions/events.actions';

const INITIAL_STATE = { forkEvents: [], prEvents: [] };

const eventsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case EVENTS_ACTION_TYPE.SET_FORK_EVENTS:
      return { ...state, forkEvents: action.payload };
    case EVENTS_ACTION_TYPE.SET_PR_EVENTS:
      return { ...state, prEvents: action.payload };
    default:
      return state;
  }
};

export default eventsReducer;
