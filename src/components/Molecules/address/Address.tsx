import { Card } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";

export const Address = () => {
  const { localizationFile } = useLocaleContext();
  return (
    <div>
      <div style={{ margin: "8px" }}>
        {localizationFile.shipmentTracking.deliveryAddress}
      </div>
      <Card style={{ backgroundColor: "#cccccc" }}>
        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك ,,, Cairo 23
      </Card>
    </div>
  );
};
