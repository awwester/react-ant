import React from "react";
import { useHistory } from "react-router";

import MobileHeader from "components/navigation/MobileHeader";
import DrawerNavButton from "components/buttons/DrawerNavButton";

export default function MobileLandingHeader() {
  const history = useHistory();
  return (
    <MobileHeader>
      <DrawerNavButton type="link">nav1</DrawerNavButton>
      <DrawerNavButton type="link">nav2</DrawerNavButton>
      <DrawerNavButton type="primary" onClick={() => history.push("/auth")}>Login</DrawerNavButton>
    </MobileHeader>
  );
}
