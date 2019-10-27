import React, { useState } from 'react';
import { grommet, Grommet } from 'grommet';

import UsernameForm from '../UsernameForm/UsernameForm';
import UserDisplay from '../UserDisplay/UserDisplay';

// mockup button colour: '#57BE9D'

const App = () => {
  const [showUser, setShowUser] = useState(false);
  const [username, setUsername] = useState('');

  const handleUserInput = name => {
    setUsername(name);
    setShowUser(true);
  };

  return (
    <Grommet full theme={grommet}>
      {showUser ? (
        <UserDisplay username={username} />
      ) : (
        <UsernameForm onUsernameSubmission={handleUserInput} />
      )}
    </Grommet>
  );
};

export default App;
