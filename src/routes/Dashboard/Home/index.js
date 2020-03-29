import React from 'react';
import { PageHeader, Button } from 'antd';

import DashboardContent from 'components/layout/DashboardContent';


export default function DashboardStats() {
  return (
    <React.Fragment>
      <PageHeader
        title="Stats"
        subTitle="View the most relevant stats about your purchases."
        ghost={false}
        extra={[
          <Button type="primary" key="1">Create New</Button>
        ]}
      />
      <DashboardContent>
        This will show graphs, charts, and key stats for the user.
      </DashboardContent>
    </React.Fragment>
  )
}
