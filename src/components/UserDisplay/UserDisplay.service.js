import { EVENT } from '../../constants';

export const getForkAndPREvents = events => {
  return events.reduce(
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
};
