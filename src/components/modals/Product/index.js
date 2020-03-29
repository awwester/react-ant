import React, { useState } from "react";

import { Modal, Button } from "antd";

export default function ProductModal(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false);
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={showModal}>
        {props.children}
      </Button>
      <Modal
        key="modal-create-product"
        title="Create new product"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Create product form</p>
      </Modal>
    </React.Fragment>
  );
}
