import React from 'react';
import { Container } from '@material-ui/core';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const Feed = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      {Array(10)
        .fill(0)
        .map((_) => (
          <div>
            {LOREM}
            <br />
            <br />
          </div>
        ))}
    </Container>
  );
};

export default Feed;
