import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import useStyles from './Feed.style';

const Feed = (): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{'TS'}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="For all you did for me!"
          secondary="Alex Brandt rewarder by Alisa Moorkmowers Jan 9, 2014"
        />
      </ListItem>
    </List>
  );
};

export default Feed;
