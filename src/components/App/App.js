import React from 'react';
import { connect } from 'react-redux';
import { grommet, Grommet } from 'grommet';

import { toggleShowUser, setUsername } from '../../store/actions/user.actions';
import UsernameForm from '../UsernameForm/UsernameForm';
import UserDisplay from '../UserDisplay/UserDisplay';

// mockup button colour: '#57BE9D'

const App = props => {
  const handleUserInput = name => {
    props.setUsername(name);
    props.toggleShowUser();
  };

  return (
    <Grommet full theme={grommet}>
      {props.showUser ? (
        <UserDisplay username={props.username} />
      ) : (
        <UsernameForm onUsernameSubmission={handleUserInput} />
      )}
    </Grommet>
  );
};

const mapStateToProps = ({ showUser, username }) => ({ showUser, username });

const mapDispatchToProps = dispatch => ({
  toggleShowUser: () => dispatch(toggleShowUser()),
  setUsername: username => dispatch(setUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
