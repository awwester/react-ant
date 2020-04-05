import React from "react";
import { PageHeader, Skeleton } from "antd";

import DashboardContent from "layouts/DashboardContent";


export default function () {
  return (
    <React.Fragment>
      <PageHeader
        title="Purchases"
        subTitle="Click into a purchase to see its products."
        ghost={false}
      />
      <DashboardContent>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </DashboardContent>
    </React.Fragment>
  );
}
