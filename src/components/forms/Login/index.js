import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";


export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
      <Controller
        as={<Input />}
        name="login"
        control={control}
      />
      </p>
      <p>
      <Controller
        as={<Input />}
        name="password"
        type="password"
        control={control}
      />
      </p>

      <Button type="primary">Login</Button>
    </form>
  );
}
