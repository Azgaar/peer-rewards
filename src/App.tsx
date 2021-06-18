import '@fontsource/roboto';
import React, { Suspense } from 'react';
import Content from './components/layout/Content';
import { AuthProvider } from './components/providers/AuthProvider';
import ErrorBoundary from './components/providers/ErrorBoundary';
import Spinner from './components/shared/Spinner';

function App(): JSX.Element {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthProvider>
        <ErrorBoundary children={<Content />} />
      </AuthProvider>
    </Suspense>
  );
}

export default App;
