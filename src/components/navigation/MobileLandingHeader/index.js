import React, { useState } from "react";
import { useHistory } from "react-router";
import { Menu, Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import DrawerNavButton from "components/buttons/DrawerNavButton";
import styles from "./style.module.less";

export default function MobileLandingHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const handleMenuClick = () => setDrawerOpen(true);

  return (
    <Layout.Header style={{ paddingLeft: 15, paddingRight: 0 }}>
      <div className={styles.logo} />
      <Menu selectable={false} mode="horizontal" theme="dark" inlineIndent={5}>
        <Menu.Item key="1" style={{ float: "right" }}>
          <MenuOutlined style={{ marginRight: 0 }} onClick={handleMenuClick} />
        </Menu.Item>
      </Menu>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setDrawerOpen(false)}
        visible={drawerOpen}
      >
        <DrawerNavButton type="link">nav1</DrawerNavButton>
        <DrawerNavButton type="link">nav2</DrawerNavButton>
        <DrawerNavButton type="primary" onClick={() => history.push("/auth")}>Login</DrawerNavButton>
      </Drawer>
    </Layout.Header>
  );
}
