import React from "react";
import { Menu } from "antd";

export default function DashboardMenuItem(props) {
  return (
    <Menu.Item { ...props }>
      {props.children}
    </Menu.Item>
  );
}
