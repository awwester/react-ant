import React from "react";
import { useHistory } from "react-router";
import { UserOutlined, UploadOutlined, VideoCameraOutlined, LogoutOutlined } from "@ant-design/icons";

import MobileHeader from "components/navigation/MobileHeader";
import DrawerNavButton from "components/buttons/DrawerNavButton";

export default function MobileLandingHeader() {
  const history = useHistory();

  const routeData = [
    {
      "label": "nav 1",
      "icon": <UserOutlined />,
      "navigation": "/dashboard/nav1",
    },
    {
      "label": "nav 2",
      "icon": <VideoCameraOutlined />,
      "navigation": "/dashboard/nav2",
    },
    {
      "label": "nav 3",
      "icon": <UploadOutlined />,
      "navigation": "/dashboard/nav3",
    },
    {
      "label": "Logout",
      "icon": <LogoutOutlined />,
      "navigation": "/",
    },
  ];

  const renderItems = () => {
    return routeData.map((route, index) => {
      return (
        <DrawerNavButton
          key={index}
          type="link"
          onClick={() => history.push(route.navigation)}
        >
          {route.label}
        </DrawerNavButton>
      );
    });
  };

  return (
    <MobileHeader>
      {renderItems()}
    </MobileHeader>
  );
}
