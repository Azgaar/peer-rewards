import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import useStyles from './Feed.style';
import { IReward, IUser } from '../types';

const Feed = ({ rewards, users }: { rewards: IReward[]; users: IUser[] }): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {rewards.map((reward) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>{'TS'}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={reward.message}
            secondary={`${reward.to} rewarded by ${reward.from} on ${reward.datetime}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Feed;
