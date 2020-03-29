import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

export default function ButtonAppBar() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/auth");
  };

  return (
    <div>
      <Button onClick={handleLoginClick} type="primary">Login</Button>
    </div>
  );
}
