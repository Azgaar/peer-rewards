import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../providers/ErrorBoundary';
import useStyles from './Layout.style';
import Container from '@material-ui/core/Container';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Header />
      <main>
        <ErrorBoundary children={children} />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
