import { Button } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";

export const Login = () => {
  const { localizationFile } = useLocaleContext();
  return (
    <Button
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
        fontWeight: "700",
      }}
    >
      {localizationFile.buttons.login}
    </Button>
  );
};
