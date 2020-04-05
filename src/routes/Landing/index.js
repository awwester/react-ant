import React from "react";

import TopnavLayout from "layouts/Topnav";
import LandingHeader from "components/navigation/LandingHeader";
import LandingSection from "components/sections/Landing";

export default function LandingRoute() {

  return (
    <TopnavLayout header={<LandingHeader />}>
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
