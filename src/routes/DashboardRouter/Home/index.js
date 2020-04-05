import React from "react";
import { PageHeader } from "antd";

import DashboardContent from "layouts/DashboardContent";


export default function DashboardStats() {
  return (
    <React.Fragment>
      <PageHeader
        title="Stats"
        subTitle="View the most relevant stats about your purchases."
        ghost={false}
      />
      <DashboardContent>
        This will show graphs, charts, and key stats for the user.
      </DashboardContent>
    </React.Fragment>
  );
}
