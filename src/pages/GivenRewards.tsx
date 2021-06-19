import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import UserAvatar from '../components/shared/UserAvatar';
import useStyles from './List.style';
import { IReward } from '../types';
import { getFullName, getRelativeDate } from '../utils';

const GivenRewards = ({ rewards }: { rewards: IReward[] }): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {rewards.map(({ id, to, reward, datetime, message }) => {
        const rewardee = getFullName(to);
        const date = getRelativeDate(datetime);

        return (
          <ListItem key={id}>
            <ListItemAvatar>
              <UserAvatar user={to} />
            </ListItemAvatar>
            <ListItemText
              primary={message}
              secondary={
                <span>
                  {`You rewarded ${rewardee} `}
                  <b>{reward}</b>
                  {` ${date}`}
                </span>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default GivenRewards;
