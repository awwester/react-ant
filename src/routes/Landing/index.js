import React from "react";
import { isMobile } from "react-device-detect";

import TopnavLayout from "layouts/Topnav";
import LandingHeader from "components/navigation/LandingHeader";
import MobileLandingHeader from "components/navigation/MobileLandingHeader";
import LandingSection from "components/sections/Landing";

export default function LandingRoute() {
  const header = isMobile ? <MobileLandingHeader /> : <LandingHeader />;

  return (
    <TopnavLayout header={header}>
      <LandingSection>
        This is the first section
      </LandingSection>
      <LandingSection>
        Lorem ipsum something
      </LandingSection>
      <LandingSection>
        And finally....
      </LandingSection>
    </TopnavLayout>
  );
}
