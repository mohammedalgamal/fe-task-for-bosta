import { Image } from "antd";
import collapsedImg from "../../../../tabImage.png";

export const CollapsedLogo = () => {
  return (
    <Image
      src={collapsedImg}
      alt="Bosta's Logo"
      width={"4vw"}
      style={{ minWidth: "35px" }}
      preview={false}
    />
  );
};
