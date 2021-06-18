import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { IUser } from '../../types';
import useStyles from './Profile.style';

const Profile = ({ user }: { user: IUser }): JSX.Element => {
  const classes = useStyles();
  const { firstname, lastname, initials } = user;
  const fullname = `${firstname} ${lastname}`;

  return (
    <Grid container item wrap={'nowrap'}>
      <Grid className={classes.avatar} item sm={2}>
        <Avatar alt="avatar">{initials}</Avatar>
        <Typography variant="body1">{fullname}</Typography>
      </Grid>

      <Grid item sm={3}>
        <Typography className={classes.sectionTitle}>My Rewards</Typography>
        <Typography className={classes.sectionValue}>30$</Typography>
      </Grid>

      <Grid item sm={3}>
        <Typography className={classes.sectionTitle}>Give</Typography>
        <Typography className={classes.sectionValue}>100$</Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
