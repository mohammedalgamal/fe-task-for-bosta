import { Button } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";

export const ChangeLanguage = () => {
  const { localizationFile, changeLanguage } = useLocaleContext();
  return (
    <Button
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        fontWeight: "700",
        color: "#ff4d4f",
      }}
      onClick={() => changeLanguage()}
    >
      {localizationFile.buttons.switchLanguage}
    </Button>
  );
};
