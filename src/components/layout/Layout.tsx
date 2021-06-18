import React, { ReactChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../providers/ErrorBoundary';

const Layout = ({ children }: { children: ReactChildren }): JSX.Element => {
  return (
    <div>
      <div></div>
      <Header />
      <ErrorBoundary children={children} />
      <Footer />
    </div>
  );
};

export default Layout;
