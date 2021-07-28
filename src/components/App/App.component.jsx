import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { HomePage } from '../../pages/Home';
import { LoginPage } from '../../pages/Login';
import { NotFound } from '../../pages/NotFound';
import { Secret } from '../../pages/Secret';
import { Private } from '../Private';
import { Layout } from '../Layout';
import { Navigation } from '../Navigation';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <Secret />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
