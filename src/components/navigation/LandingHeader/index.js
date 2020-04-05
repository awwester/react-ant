import React from "react";
import { useHistory } from "react-router";
import { Menu, Layout, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import styles from "./style.module.less";

export default function LandingHeader() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/auth");
  };

  return (
    <Layout.Header>
      <div className={styles.logo} />
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <div style={{ float: "right" }}>
          <Menu.Item key="4" style={{ float: "right" }}>
            <Button onClick={handleLoginClick} type="primary" size="large">
              <LoginOutlined /> Login
            </Button>
          </Menu.Item>
        </div>
      </Menu>
    </Layout.Header>
  );
}
