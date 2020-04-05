import React from "react";
import { PageHeader, Button } from "antd";

import DashboardContent from "layouts/DashboardContent";


export default function () {
  return (
    <React.Fragment>
      <PageHeader
        title="Purchases"
        subTitle="Click into a purchase to see its products."
        ghost={false}
        extra={[
          <Button type="primary" key="1">Create New</Button>,
        ]}
      />
      <DashboardContent>
        These are the purchases, which are correlated to receipts.
      </DashboardContent>
    </React.Fragment>
  );
}
