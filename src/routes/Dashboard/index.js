import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

import DashboardHomeRoute from 'routes/Dashboard/Home';
import OrdersRoute from 'routes/Dashboard/Orders';
import ProductsRoute from 'routes/Dashboard/Products';

export default function () {
  let history = useHistory();

  const handleLogout = () => {
    console.log('handling..');
    history.push("/");
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Products</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <Switch>
        <Route path="/dashboard" exact>
          <DashboardHomeRoute />
        </Route>
        <Route path="/dashboard/orders">
          <OrdersRoute />
        </Route>
        <Route path="/dashboard/products">
          <ProductsRoute />
        </Route>
      </Switch>
    </div>
  )
}
