import 'fontsource-roboto';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Spinner from './components/shared/Spinner';

const Feed = React.lazy(() => import('./pages/Feed'));
const MyRewards = React.lazy(() => import('./pages/MyRewards'));
const Page404 = React.lazy(() => import('./pages/Page404'));

function App(): JSX.Element {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Redirect exact from="/" to="/feed" />

          <Route path="/feed" component={Feed} />
          <Route path="/myRewards" component={MyRewards} />

          <Route path="/*" component={Page404} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
