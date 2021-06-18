/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import Add from '../icons/Add';
import useStyles from './Navbar.style';

const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/rewards">My Rewards</NavLink>
      <Fab aria-label="add reward" className={classes.addButton}>
        <Add />
      </Fab>
    </nav>
  );
};

export default Navbar;
