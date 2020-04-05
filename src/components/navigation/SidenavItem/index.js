import React from "react";
import { Menu } from "antd";


export default function SidenavItem({children, ...props}) {
  return (
    <Menu.Item { ...props }>
      {children}
    </Menu.Item>
  );
}
