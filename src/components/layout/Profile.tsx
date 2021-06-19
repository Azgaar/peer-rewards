import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { IUser } from '../../types';
import useStyles from './Profile.style';
import UserAvatar from '../shared/UserAvatar';
import { getFullName } from '../../utils';

const Profile = ({ user }: { user: IUser }): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4} alignItems="center">
        <Grid item sm={2}>
          <UserAvatar user={user} size="big" />
        </Grid>

        <Grid item sm={2}>
          <Typography variant="body1">Received</Typography>
          <Typography variant="h5">$30</Typography>
        </Grid>

        <Grid item sm={2}>
          <Typography variant="body1">Given</Typography>
          <Typography variant="h5">$100</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" className={classes.fullName}>
        {getFullName(user)}
      </Typography>
    </>
  );
};

export default Profile;
