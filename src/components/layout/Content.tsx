import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from '../shared/Spinner';
import useStyles from './Content.style';
import Container from '@material-ui/core/Container';
import { fetchJSON } from '../../utils';
import { IReward } from '../../types';

const Feed = React.lazy(() => import('../../pages/Feed'));
const MyRewards = React.lazy(() => import('../../pages/MyRewards'));
const Page404 = React.lazy(() => import('../../pages/Page404'));

const Content = (): JSX.Element => {
  const classes = useStyles();
  const [rewards, setRewards] = useState([] as IReward[]);

  useEffect(() => {
    fetchJSON('/mockups/rewards.json', (json) => setRewards(json));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Header />
      <Navbar />
      <main className={classes.main}>
        {rewards.length ? (
          <Switch>
            <Redirect exact from="/" to="/feed" />
            <Route path="/feed" component={Feed} />
            <Route path="/rewards" component={MyRewards} />
            <Route path="/*" component={Page404} />
          </Switch>
        ) : (
          <Spinner />
        )}
      </main>
      <Footer />
    </Container>
  );
};

export default Content;
