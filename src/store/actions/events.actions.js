import { getEventApiUrl } from '../../utils/utils';
import { EVENT } from '../../constants';

export const EVENTS_ACTION_TYPE = {
  SET_FORK_EVENTS: 'set fork events',
  SET_PR_EVENTS: 'set pull request events'
};

const setForkEvents = (forkEvents = []) => ({
  type: EVENTS_ACTION_TYPE.SET_FORK_EVENTS,
  payload: forkEvents
});

const setPREvents = (prEvents = []) => ({
  type: EVENTS_ACTION_TYPE.SET_PR_EVENTS,
  payload: prEvents
});

export const fetchEventsThunk = username => dispatch => {
  fetch(getEventApiUrl(username))
    .then(response => response.json())
    .then(data => {
      const events = data.reduce(
        (acc, currentEvent) => {
          if (currentEvent.type === EVENT.FORK) {
            return { ...acc, forkEvents: [...acc.forkEvents, currentEvent] };
          } else if (currentEvent.type === EVENT.PULL_REQUEST) {
            return { ...acc, prEvents: [...acc.prEvents, currentEvent] };
          }
          return acc;
        },
        { forkEvents: [], prEvents: [] }
      );

      dispatch(setForkEvents(events.forkEvents));
      dispatch(setPREvents(events.prEvents));
    });
};
