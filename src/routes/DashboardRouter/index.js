import React from "react";
import { Route, Switch } from "react-router-dom";

import DashboardHomeRoute from "routes/DashboardRouter/Home";
import PurchasesRoute from "routes/DashboardRouter/Purchases";
import ProductsRoute from "routes/DashboardRouter/Products";
import DashboardLayout from "layouts/DashboardNavigation";

export default function DashboardBase(props) {
  // Base route that renders the navigation and provides a router for dashboard routes.
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/dashboard/nav1">
          <DashboardHomeRoute />
        </Route>
        <Route path="/dashboard/nav2">
          <PurchasesRoute />
        </Route>
        <Route path="/dashboard/nav3">
          <ProductsRoute />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}
