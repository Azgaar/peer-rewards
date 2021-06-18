import React, { ReactNode } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from '../providers/ErrorBoundary';
import useStyles from './Layout.style';
import Container from '@material-ui/core/Container';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Header />
      <Navbar />
      <main className={classes.main}>
        <ErrorBoundary children={children} />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
