/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import Add from '../icons/Add';
import AddReward from '../dialogs/AddReward/AddReward';
import useStyles from './Navbar.style';

const Navbar = (): JSX.Element => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <nav className={classes.navbar}>
      <NavLink to="/feed">Feed</NavLink>
      <NavLink to="/rewards/received">Received</NavLink>
      <NavLink to="/rewards/given">Given</NavLink>
      <Fab aria-label="add reward" onClick={openDialog} className={classes.addButton}>
        <Add />
      </Fab>
      <AddReward open={isOpen} closeDialog={closeDialog} />
    </nav>
  );
};

export default Navbar;
