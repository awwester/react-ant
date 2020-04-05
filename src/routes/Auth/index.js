import React from "react";
import { Row, Col } from "antd";

import FormTitle from "components/forms/Title";
import LoginForm from "components/forms/Login";


export default function () {
  return (
    <div>
      <Row justify="center">
        <Col sm={18} md={6}>
          <FormTitle>Login</FormTitle>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}
