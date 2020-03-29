import React from 'react';

import styles from './style.module.less';

export default function DashboardContent(props) {
  return (
    <div className={styles.dashboardContent}>
      {props.children}
    </div>
  )
}
