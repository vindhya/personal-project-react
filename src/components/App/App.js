import React from 'react';
import { connect } from 'react-redux';
import { grommet, Grommet } from 'grommet';

import UsernameForm from '../UsernameForm/UsernameForm';
import UserDisplay from '../UserDisplay/UserDisplay';

// mockup button colour: '#57BE9D'

const App = props => {
  return (
    <Grommet full theme={grommet}>
      {props.showUser ? <UserDisplay /> : <UsernameForm />}
    </Grommet>
  );
};

const mapStateToProps = state => ({ showUser: state.user.showUser });

export default connect(mapStateToProps)(App);
