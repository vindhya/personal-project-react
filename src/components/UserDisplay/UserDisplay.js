import React from 'react';
import { Box, Heading } from 'grommet';

const UserDisplay = props => {
  return (
    <Box align="center" pad="large">
      <Heading level="1" size="medium">
        {props.username}
      </Heading>
      <Box width="large">
        <Heading level="2" size="medium">
          Recent Forks
        </Heading>
        Sweet chocolate bar cupcake. Cotton candy pastry donut cheesecake. Lemon
        drops soufflé icing croissant marzipan jujubes macaroon gingerbread
        brownie. Jelly marzipan cookie sweet roll danish fruitcake chocolate
        sweet roll. Jelly beans chupa chups macaroon jujubes biscuit chupa chups
        chupa chups. Chocolate cake croissant tiramisu caramels cookie tiramisu
        brownie sweet roll pudding. Gummies lollipop oat cake sweet roll.
        Soufflé halvah jelly beans gummies sweet croissant tart liquorice.
        Gummies pastry chocolate sweet. Chocolate bar croissant fruitcake
        croissant muffin cheesecake bear claw muffin. Sweet muffin bonbon
        gummies candy canes candy canes. Ice cream cotton candy marshmallow
        tootsie roll fruitcake dragée pudding soufflé croissant. Marshmallow
        bear claw lollipop biscuit chocolate cake. Chocolate cake ice cream
        cookie cookie.
        <Heading level="2" size="medium">
          Recent Pull Requests
        </Heading>
      </Box>
    </Box>
  );
};

export default UserDisplay;
