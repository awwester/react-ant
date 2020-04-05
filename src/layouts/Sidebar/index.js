import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import SidenavItem from "components/navigation/SidenavItem";
import styles from "./style.module.less";

const { Header, Sider, Content } = Layout;

export default function SidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <Layout className={styles.fullHeight}>
      <Sider trigger={null} collapsible collapsed={collapsed} className={styles.fullHeight}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <SidenavItem key="1">
            <UserOutlined />
            <span>nav 1</span>
          </SidenavItem>
          <SidenavItem key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </SidenavItem>
          <SidenavItem key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </SidenavItem>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, backgroundColor: "white" }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: handleToggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
