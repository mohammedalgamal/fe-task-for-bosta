import { useEffect, useState } from "react";
import { MOBILE_WIDTH } from "../../constants/common";

export const useBreakingPoints = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
};
