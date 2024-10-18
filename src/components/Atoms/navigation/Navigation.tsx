import { Menu } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";
import { items } from "./config";
import { useBreakingPoints } from "../../../hooks/useBreakingPoints/useBreakingPoints";

export const Navigation = () => {
  const { localizationFile } = useLocaleContext();
  const isMobile = useBreakingPoints();
  return (
    <Menu
      mode={isMobile ? "vertical" : "horizontal"}
      items={items(localizationFile)}
      style={{
        border: "none",
        fontWeight: "700",
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};
