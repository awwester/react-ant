import React from "react";
import { Button } from "antd";

export default function DrawerNavButton({ children, ...props}) {
  return (
    <Button block {...props}>{children}</Button>
  );
}
