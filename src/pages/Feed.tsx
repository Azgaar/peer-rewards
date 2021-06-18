import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './Feed.style';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const Feed = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      {Array(10)
        .fill(0)
        .map((_) => (
          <div>
            {LOREM}
            <br />
            <br />
          </div>
        ))}
    </>
  );
};

export default Feed;
