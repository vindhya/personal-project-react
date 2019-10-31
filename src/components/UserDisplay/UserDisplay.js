import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Heading } from 'grommet';
import { Previous } from 'grommet-icons';

import { EVENT } from '../../constants';
import EventList from '../EventList/EventList';
import { fetchEventsThunk } from '../../store/actions/events.actions';
import { backToForm } from '../../store/actions';

const UserDisplay = ({
  username,
  fetchEventData,
  forkEvents,
  prEvents,
  backToForm
}) => {
  useEffect(() => {
    fetchEventData(username);
  }, [fetchEventData, username]);

  return (
    <Box align="center" pad="large">
      <Box fill>
        <Button icon={<Previous />} onClick={backToForm} aria-label="back" />
      </Box>
      <Heading level="1" size="medium">
        {username}
      </Heading>
      <Box width="large">
        <EventList type={EVENT.FORK} name="Recent Forks" data={forkEvents} />
        <EventList
          type={EVENT.PULL_REQUEST}
          name="Recent Pull Requests"
          data={prEvents}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = state => ({
  username: state.user.username,
  forkEvents: state.events.forkEvents,
  prEvents: state.events.prEvents
});

const mapDispatchToProps = dispatch => ({
  fetchEventData: username => dispatch(fetchEventsThunk(username)),
  backToForm: () => dispatch(backToForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDisplay);
