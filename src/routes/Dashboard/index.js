import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardHomeRoute from 'routes/Dashboard/Home';
import OrdersRoute from 'routes/Dashboard/Orders';
import ProductsRoute from 'routes/Dashboard/Products';
import DashboardNav from 'components/navigation/DashboardNav';

export default function DashboardBase() {
  // Base route that renders the navigation and provides a router for dashboard routes.
  return (
    <React.Fragment>
      <DashboardNav />

      <div>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardHomeRoute />
          </Route>
          <Route path="/dashboard/purchases">
            <OrdersRoute />
          </Route>
          <Route path="/dashboard/products">
            <ProductsRoute />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  )
}
