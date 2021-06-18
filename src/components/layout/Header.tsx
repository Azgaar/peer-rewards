import React from 'react';
import { useUser } from '../providers/AuthProvider';
import Profile from './Profile';
import Spinner from '../shared/Spinner';

const Header = (): JSX.Element => {
  const user = useUser();

  if (!user.firstname) return <Spinner />;
  return (
    <header>
      <Profile user={user} />
    </header>
  );
};

export default Header;
