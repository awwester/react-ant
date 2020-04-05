import React, { useState } from "react";
import { Menu, Layout, Drawer, Affix } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from "./style.module.less";

export default function MobileLandingHeader(props) {
  /* Generic header for any mobile headers that has a drawer to select items. The items are passed
   * in through the props.children using the <MobileDrawerItem> component.
   */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleMenuClick = () => setDrawerOpen(true);

  return (
    <Affix offsetTop={0}>
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
          onClick={() => setDrawerOpen(false)}
        >
          {props.children}
        </Drawer>
      </Layout.Header>
    </Affix>
  );
}
