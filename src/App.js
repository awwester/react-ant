import React from "react";

import BaseRouter from "routes/BaseRouter";
import styles from "./App.module.less";

function App() {
  return (
    <div className={styles.app}>
      <BaseRouter />
    </div>
  );
}

export default App;
