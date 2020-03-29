import React from 'react';
import { PageHeader, Button } from 'antd';

import DashboardContent from 'components/layout/DashboardContent';

export default function () {
  return (
    <React.Fragment>
      <PageHeader
        title="Products"
        subTitle="All the items that you have purchased"
        ghost={false}
        extra={[
          <Button type="secondary" key="1">Create New</Button>
        ]}
      />
      <DashboardContent>
        These are the products.
      </DashboardContent>
    </React.Fragment>
  )
}
