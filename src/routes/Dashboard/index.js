import React from "react";
import { Route, Switch } from "react-router-dom";

import DashboardHomeRoute from "routes/Dashboard/Home";
import PurchasesRoute from "routes/Dashboard/Purchases";
import ProductsRoute from "routes/Dashboard/Products";
import DashboardNav from "components/navigation/DashboardNav";

import styles from "./style.module.less";

export default function DashboardBase() {
  // Base route that renders the navigation and provides a router for dashboard routes.
  return (
    <div className={styles.dashboardContainer}>
      <DashboardNav />

      <div className={styles.dashboardContent}>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardHomeRoute />
          </Route>
          <Route path="/dashboard/purchases">
            <PurchasesRoute />
          </Route>
          <Route path="/dashboard/products">
            <ProductsRoute />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
