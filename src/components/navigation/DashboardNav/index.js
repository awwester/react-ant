import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { FundFilled, ShoppingCartOutlined, StarFilled, UnlockFilled } from "@ant-design/icons";

import DashboardMenuItem from "../DashboardMenuItem";

import styles from "./style.module.less";

export default function DashboardNav() {
  let history = useHistory();

  const handleLogout = () => history.push("/");
  const handleNav = url => history.push(url);

  return (
    <Menu
      className={styles.menuStyle}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
    >
      <DashboardMenuItem key="1" onClick={() => handleNav("/dashboard")}>
        <FundFilled />
        <span>Stats</span>
      </DashboardMenuItem>
      <DashboardMenuItem key="2" onClick={() => handleNav("/dashboard/purchases")}>
        <ShoppingCartOutlined />
        <span>Purchases</span>
      </DashboardMenuItem>
      <DashboardMenuItem key="3" onClick={() => handleNav("/dashboard/products")}>
        <StarFilled />
        <span>Products</span>
      </DashboardMenuItem>
      <DashboardMenuItem key="12" onClick={handleLogout} className={styles.logoutItem}>
        <UnlockFilled />
        Logout
      </DashboardMenuItem>
    </Menu>
  );
}
