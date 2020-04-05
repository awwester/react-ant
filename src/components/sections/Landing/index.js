import React from "react";

import styles from "./style.module.less";

export default function LargeSection(props) {
  return (
    <section className={styles.landingSection}>
      {props.children}
    </section>
  );
}
