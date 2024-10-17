import { ReactElement } from "react";
import { Shipment } from "../../models/shipment";

export type DataContextType = {
  shipmentData: Shipment | null;
  isDataLoading: boolean | undefined;
  fetchShipmentData: (trackingNumber: string) => void;
};

export type UseDataContext = {
  children: ReactElement;
};
