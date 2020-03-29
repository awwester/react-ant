import React from 'react';
import { PageHeader } from 'antd';

import DashboardContent from 'components/layout/DashboardContent';
import ProductModal from 'components/modals/Product';

export default function () {
  return (
    <React.Fragment>
      <PageHeader
        title="Products"
        subTitle="All the items that you have purchased"
        ghost={false}
        extra={[
          <ProductModal key="1">Create new</ProductModal>
        ]}
      />
      <DashboardContent>
        These are the products.
      </DashboardContent>
    </React.Fragment>
  )
}
