import React from 'react';
import { Heading } from 'grommet';

import List from '../List/List';
import EventListItem from '../EventList/EventListItem';

const EventList = ({ data, name, type }) => {
  console.log(type, data);

  return (
    <>
      <Heading level="2" size="medium">
        {name}
      </Heading>
      {data.length > 0 ? (
        <List>
          {data.map((event, index) => (
            <EventListItem
              type={type}
              event={event}
              index={index}
              key={event.id}
            />
          ))}
        </List>
      ) : (
        `There are no ${name.toLowerCase()} :(`
      )}
    </>
  );
};

export default EventList;
