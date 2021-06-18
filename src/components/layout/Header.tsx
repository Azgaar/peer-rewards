import React from 'react';
import { Container } from '@material-ui/core';
import { useUser } from '../providers/AuthProvider';
import Profile from './Profile';

const Header = (): JSX.Element => {
  const user = useUser();
  console.log(user);

  return (
    <header>
      <Container maxWidth="md">
        <Profile user={user} />
      </Container>
    </header>
  );
};

export default Header;
