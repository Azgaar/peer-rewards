import React from 'react';
import Profile from './Profile';
import Spinner from '../shared/Spinner';
import useStyles from './Header.style';
import { IUser } from '../../types';

const Header = ({ user }: { user: IUser }): JSX.Element => {
  const classes = useStyles();

  if (!user.firstname) return <Spinner />;
  return (
    <header className={classes.header}>
      <Profile user={user} />
    </header>
  );
};

export default Header;
