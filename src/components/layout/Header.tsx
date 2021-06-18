import React from 'react';
import { useUser } from '../providers/AuthProvider';
import Profile from './Profile';
import Spinner from '../shared/Spinner';
import useStyles from './Header.style';

const Header = (): JSX.Element => {
  const classes = useStyles();
  const user = useUser();

  if (!user.firstname) return <Spinner />;
  return (
    <header className={classes.header}>
      <Profile user={user} />
    </header>
  );
};

export default Header;
