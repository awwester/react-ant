import React from "react";
import { Layout } from "antd";

export default function TopnavLayout({ header, ...props }) {
  return (
    <Layout>
      {header}
      {props.children}
    </Layout>
  );
}
