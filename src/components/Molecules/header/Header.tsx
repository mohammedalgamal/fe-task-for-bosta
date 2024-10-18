import { Divider, Layout } from "antd";
import { ChangeLanguage } from "../../Atoms/changeLanguage/ChangeLanguage";
import { Login } from "../../Atoms/login/Login";
import { Logo } from "../../Atoms/logo/Logo";
import { Navigation } from "../../Atoms/navigation/Navigation";
import { TrackShipment } from "../../Atoms/trackShipment/TrackShipment";
// import { useBreakingPoints } from "../../../hooks/useBreakingPoints/useBreakingPoints";
// import { useState } from "react";
// import { CollapsedLogo } from "../../Atoms/logo/CollapsedLogo";

export const Header = () => {
  //   const isMobile = useBreakingPoints();
  //   const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout.Header
      style={{
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Logo />
      <Navigation />
      <div>
        <TrackShipment />
        <Divider type="vertical" />
        <Login />
        <ChangeLanguage />
      </div>
    </Layout.Header>
  );
  //   ) : (
  //     <Layout.Sider
  //       theme="light"
  //       collapsible
  //       collapsed={collapsed}
  //       onCollapse={(value) => setCollapsed(value)}
  //     >
  //       {collapsed ? <CollapsedLogo /> : <Logo />}

  //       <Navigation />
  //     </Layout.Sider>
  //   );
};
