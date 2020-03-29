import React from "react";
import { Typography } from "antd";

export default function FormTitle() {
  // Shared component to render the title for forms.
  const { Title } = Typography;

  return (
    <Title level={4} style={{textAlign: "center", margin: 20}}>Login</Title>
  );
}
