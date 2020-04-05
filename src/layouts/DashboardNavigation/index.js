import React from "react";
import { isMobile } from "react-device-detect";
import { Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import DashboardSidenav from "components/navigation/DashboardSidenav";
import MobileDashboardHeader from "components/navigation/MobileDashboardHeader";
import styles from "./style.module.less";

export default function DashboardLayout(props) {
  /* General layout for the dashboard. This will render the various forms of navigation as well as
   * the content for each section of the dashboard.
  */

  const routeData = [
    {
      "label": "nav 1",
      "icon": <UserOutlined />,
      "navigation": "/dashboard/nav1",
    },
    {
      "label": "nav 2",
      "icon": <VideoCameraOutlined />,
      "navigation": "/dashboard/nav2",
    },
    {
      "label": "nav 3",
      "icon": <UploadOutlined />,
      "navigation": "/dashboard/nav3",
    },
  ];

  const navigation = () => {
    // render the navigation based on screen size.
    if (isMobile)
      return <MobileDashboardHeader routeData={routeData} />;
    else
      return <DashboardSidenav routeData={routeData} />;
  };

  return (
    <Layout className={styles.fullHeight}>
      {navigation()}

      <Layout.Content>
        {props.children}
      </Layout.Content>
    </Layout>
  );
}
