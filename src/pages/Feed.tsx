import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import UserAvatar from '../components/shared/UserAvatar';
import useStyles from './Feed.style';
import { IReward, IUser } from '../types';
import { getFullName, getRelativeDate } from '../utils';

const Feed = ({ rewards, users }: { rewards: IReward[]; users: IUser[] }): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {rewards.map((reward) => {
        const from = getFullName(reward.from);
        const to = getFullName(reward.to);
        const date = getRelativeDate(reward.datetime);

        return (
          <ListItem key={reward.id}>
            <ListItemAvatar>
              <UserAvatar user={reward.to} />
            </ListItemAvatar>
            <ListItemText
              primary={reward.message}
              secondary={`${to} rewarded by ${from} ${date}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Feed;
