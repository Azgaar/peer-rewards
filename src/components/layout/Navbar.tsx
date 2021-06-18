/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './Navbar.style';

const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/rewards">My Rewards</NavLink>
    </nav>
  );
};

export default Navbar;
