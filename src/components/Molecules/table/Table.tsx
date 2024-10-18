import { Skeleton, Table } from "antd";
import { Shipment } from "../../../models/shipment";
import { useDataContext } from "../../../contexts/useDataContext/useDataContext";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";
import { trackShipmentTableColumns } from "./config";
import { useBreakingPoints } from "../../../hooks/useBreakingPoints/useBreakingPoints";

export const TrackShipmentTable = () => {
  const { shipmentData, isDataLoading } = useDataContext();
  const { localizationFile } = useLocaleContext();
  const isMobile = useBreakingPoints();
  if (!shipmentData?.TransitEvents) return null;
  return (
    <Skeleton loading={isDataLoading}>
      <div style={{ width: `${isMobile ? "100%" : "65%"}` }}>
        <div style={{ margin: "8px" }}>
          {localizationFile.shipmentTracking.shipmentDetails}
        </div>
        <Table<Shipment["TransitEvents"][number]>
          bordered
          dataSource={shipmentData.TransitEvents}
          columns={trackShipmentTableColumns(localizationFile)}
          pagination={false}
        />
      </div>
    </Skeleton>
  );
};
