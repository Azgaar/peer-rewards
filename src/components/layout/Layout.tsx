import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../providers/ErrorBoundary';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div>
      <Header />
      <main>
        <ErrorBoundary children={children} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
