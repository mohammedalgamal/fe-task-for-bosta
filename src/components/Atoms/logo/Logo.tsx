import { Image } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";
import arLogo from "../../../assets/images/arLogo.png";
import enLogo from "../../../assets/images/enLogo.png";

export const Logo = () => {
  const { currentLanguage } = useLocaleContext();
  const imgSrc = currentLanguage === "ar_EG" ? arLogo : enLogo;
  return (
    <Image
      src={imgSrc}
      alt="Bosta's Logo"
      width={"7vw"}
      style={{ minWidth: "100px" }}
      preview={false}
    />
  );
};
