import React, { useEffect, useState } from 'react';
import { Anchor, Text } from 'grommet';

import ListItem from '../List/ListItem';
import { capitalize } from '../../utils/utils';
import { EVENT } from '../../constants';

const EventListItem = ({ event, index, type }) => {
  const [mainText, setMainText] = useState('');
  const [subText, setSubText] = useState('');
  const [htmlUrl, setHtmlUrl] = useState('');
  const [prStatus, setPRStatus] = useState('');

  useEffect(() => {
    // consider moving this logic up the component tree to make this component
    // more "dumb"
    if (event && type === EVENT.FORK) {
      setMainText(event.payload.forkee.full_name);
      setSubText(`Forked from: ${event.repo.name}`);
      setHtmlUrl(event.payload.forkee.html_url);
    } else if (event && type === EVENT.PULL_REQUEST) {
      fetch(event.payload.pull_request.url)
        .then(response => response.json())
        .then(data => setPRStatus(data.state));

      setMainText(event.payload.pull_request.title);
      setSubText(`Status: ${capitalize(prStatus)}`);
      setHtmlUrl(event.payload.pull_request.html_url);
    }
    // why doesn't including prStatus below result in an infinite loop of this useEffect hook?
  }, [event, prStatus, type]);

  return (
    <ListItem index={index}>
      <Anchor href={htmlUrl} target="_blank">
        {mainText}
      </Anchor>
      <Text size="small">{subText}</Text>
    </ListItem>
  );
};

export default EventListItem;
