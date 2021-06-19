import React from 'react';
import { Container } from '@material-ui/core';
import { IReward } from '../types';

const GivenRewards = ({ rewards }: { rewards: IReward[] }): JSX.Element => {
  return <Container maxWidth="md">GivenRewards</Container>;
};

export default GivenRewards;
