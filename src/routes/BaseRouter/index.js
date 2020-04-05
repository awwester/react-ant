import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingRoute from "routes/Landing";
import AuthRoute from "routes/Auth";
import DashboardRoute from "routes/DashboardRouter";


export default function BaseRouter() {
  // Router that contgains all of the top level navigation routes.

  return (
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
  );
}
