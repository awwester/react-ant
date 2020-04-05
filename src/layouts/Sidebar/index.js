import React from "react";
import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

import SidenavItem from "components/navigation/SidenavItem";
import styles from "./style.module.less";

const { Sider, Content } = Layout;

export default function SidebarLayout(props) {
  const history = useHistory();

  const renderNavItems = () => {
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
    <Layout className={styles.fullHeight}>
      <Sider className={styles.fullHeight}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {renderNavItems()}
          <Menu.Item className={styles.logout} onClick={() => history.push("/")}>
            <LogoutOutlined />
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
