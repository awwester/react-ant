import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm() {
  const history = useHistory();
  const onFinish = values => history.push("/dashboard/nav1");
  const onFinishFailed = errorInfo => console.log("Failed:", errorInfo);

  return (
    <Form
      {...layout}
      name="login-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username" }]}
      >
        <Input autoFocus />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
