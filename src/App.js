import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingRoute from 'routes/Landing';
import AuthRoute from 'routes/Auth';
import DashboardRoute from 'routes/Dashboard';


import styles from './App.module.less'

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LandingRoute />
          </Route>
          <Route path="/dashboard">
            <DashboardRoute />
          </Route>
          <Route path="/auth">
            <AuthRoute />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
