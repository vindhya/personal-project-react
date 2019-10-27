import React from 'react';
import { Anchor, Text } from 'grommet';

import ListItem from '../List/ListItem';
import { capitalize } from '../../utils/utils';

const EventListItem = ({ event, index, type }) => {
  let mainText = '';
  let subText = '';
  let url = '';
  if (event && type === 'fork') {
    mainText = event.payload.forkee.full_name;
    subText = `Forked from: ${event.repo.name}`;
    url = event.payload.forkee.html_url;
  } else if (event && type === 'pr') {
    mainText = event.payload.pull_request.title;
    subText = `Status: ${capitalize(event.payload.pull_request.state)}`;
    url = event.payload.pull_request.html_url;
  }

  return (
    <ListItem index={index}>
      <Anchor href={url} target="_blank">
        {mainText}
      </Anchor>
      <Text size="small">{subText}</Text>
    </ListItem>
  );
};

export default EventListItem;
