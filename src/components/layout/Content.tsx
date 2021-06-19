import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from '../shared/Spinner';
import Container from '@material-ui/core/Container';
import { useUser } from '../providers/AuthProvider';
import { fetchJSON } from '../../utils';
import { IReward, IUser } from '../../types';
import useStyles from './Content.style';

const Feed = React.lazy(() => import('../../pages/Feed'));
const MyRewards = React.lazy(() => import('../../pages/MyRewards'));
const Page404 = React.lazy(() => import('../../pages/Page404'));

const Content = (): JSX.Element => {
  const classes = useStyles();
  const user = useUser();
  const [rewards, setRewards] = useState([] as IReward[]);
  const [users, setUsers] = useState([] as IUser[]);

  useEffect(() => {
    fetchJSON('/mockups/rewards.json', (json) => setRewards(json));
    fetchJSON('/mockups/users.json', (json) => setUsers(json));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Header user={user} />
      <Navbar />
      <main className={classes.main}>
        {rewards.length ? (
          <Switch>
            <Redirect exact from="/" to="/feed" />
            <Route path="/feed">
              <Feed rewards={rewards} users={users} />
            </Route>
            <Route path="/rewards">
              <MyRewards rewards={rewards} />
            </Route>
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
