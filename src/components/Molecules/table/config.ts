import { TableProps } from "antd";
import { Shipment } from "../../../models/shipment";
import { TABLE_FALLBACK } from "../../../constants/common";
import { LocalizationFile } from "../../../models/localization";
import { getDate, getTime } from "../../../utils/date";

export const trackShipmentTableColumns = (
  localizationFile: LocalizationFile
): TableProps<Shipment["TransitEvents"][number]>["columns"] => {
  const {
    shipmentTracking: { trackingTable },
  } = localizationFile;
  return [
    {
      title: trackingTable.branch,
      render: (event: Shipment["TransitEvents"][number]) =>
        event.hub
          ? localizationFile.shipmentTracking.hubs[event.hub]
          : TABLE_FALLBACK,
    },
    {
      title: trackingTable.date,
      render: (event: Shipment["TransitEvents"][number]) =>
        getDate(event.timestamp) || TABLE_FALLBACK,
    },
    {
      title: trackingTable.time,
      render: (event: Shipment["TransitEvents"][number]) => {
        const { time, suffix } = getTime(event.timestamp);
        if (typeof time === "undefined" || typeof suffix === "undefined")
          return TABLE_FALLBACK;
        return `${time} ${localizationFile[suffix]}`;
      },
    },
    {
      title: trackingTable.details,
      render: (event: Shipment["TransitEvents"][number]) =>
        event.state
          ? localizationFile.shipmentTracking.trackingTimeline[event.state]
          : TABLE_FALLBACK,
    },
  ];
};
