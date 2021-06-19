import React from 'react';
import { Container } from '@material-ui/core';
import { IReward } from '../types';

const ReceivedRewards = ({ rewards }: { rewards: IReward[] }): JSX.Element => {
  return <Container maxWidth="md">ReceivedRewards</Container>;
};

export default ReceivedRewards;
