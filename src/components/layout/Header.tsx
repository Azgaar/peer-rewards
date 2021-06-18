import React from 'react';
import { useUser } from '../providers/AuthProvider';

const Header = (): JSX.Element => {
  const user = useUser();
  console.log(user);

  return <header>Header</header>;
};

export default Header;
