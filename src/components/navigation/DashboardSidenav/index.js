import React from "react";
import { useHistory } from "react-router";
import PropType from "prop-types";
import { Menu, Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import SidenavItem from "components/navigation/SidenavItem";
import styles from "./style.module.less";

export default function DashboardSideNav({ routeData }) {
  // Render the sidenav navigation for desktop dashboard.

  const history = useHistory();

  const renderNavItems = () => {
    return routeData.map((item, index) => {
      return (
        <SidenavItem key={index} onClick={() => history.push(item.navigation)}>
          {item.icon}
          <span>{item.label}</span>
        </SidenavItem>
      );
    });
  };

  return (
    <Layout.Sider className={styles.fullHeight}>
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {renderNavItems()}
        <Menu.Item className={styles.logout} onClick={() => history.push("/")}>
          <LogoutOutlined />
          Logout
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

DashboardSideNav.propTypes = {
  routeData: PropType.array.isRequired,
};
