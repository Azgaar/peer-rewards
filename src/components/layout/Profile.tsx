import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { IUser } from '../../types';
import useStyles from './Profile.style';
import { AVATAR_PATH } from '../../config';
import { getInitials } from '../../utils';

const Profile = ({ user }: { user: IUser }): JSX.Element => {
  const classes = useStyles();
  const { firstname, lastname, image } = user;
  const fullname = `${firstname} ${lastname}`;

  return (
    <>
      <Grid container spacing={6} alignItems="center">
        <Grid item sm={2}>
          {image ? (
            <Avatar alt="avatar" src={AVATAR_PATH + image} className={classes.avatar} />
          ) : (
            <Avatar alt="avatar" className={classes.avatar}>
              {firstname ? getInitials(firstname, lastname) : ''}
            </Avatar>
          )}
        </Grid>

        <Grid item sm={3}>
          <Typography variant="body1">My Rewards</Typography>
          <Typography variant="h5">$30</Typography>
        </Grid>

        <Grid item sm={3}>
          <Typography variant="body1">Give</Typography>
          <Typography variant="h5">$100</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" className={classes.fullName}>
        {fullname}
      </Typography>
    </>
  );
};

export default Profile;
