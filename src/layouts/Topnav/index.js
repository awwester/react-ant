import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

export default function TopnavLayout({ header, ...props }) {
  return (
    <Layout>
      {header}
      {props.children}
    </Layout>
  );
}

TopnavLayout.propTypes = {
  header: PropTypes.object.isRequired,
};
