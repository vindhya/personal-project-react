import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const AnimationBox = styled(Box)`
  animation-iteration-count: infinite;
`;

const AnimatedBox = ({ ...rest }) => (
  <AnimationBox
    animation={{
      type: 'fadeOut',
      duration: 3000
    }}
    background="light-4"
    round
    {...rest}
  />
);

const Loading = () => {
  return (
    <Box gap="small">
      <AnimatedBox height="15px" width="400px" />
      <AnimatedBox height="10px" width="350px" />
      <AnimatedBox height="10px" width="350px" />
    </Box>
  );
};

export default Loading;
