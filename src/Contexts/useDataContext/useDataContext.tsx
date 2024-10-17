import { createContext, ReactElement, useContext, useState } from "react";
import { DataContextType, UseDataContext } from "./types";
import { shipmentTrackingURL } from "./config";

const ShipmentTrackingContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: UseDataContext): ReactElement => {
  const [shipmentData, setShipmentData] =
    useState<DataContextType["shipmentData"]>(null);

  const [isDataLoading, setIsDataLoading] =
    useState<DataContextType["isDataLoading"]>(undefined);

  const fetchShipmentData = async (trackingNumber: string) => {
    setIsDataLoading(true);
    try {
      const response = await fetch(shipmentTrackingURL(trackingNumber));
      const data: DataContextType["shipmentData"] = await response.json();
      setShipmentData(data);
    } catch (error) {
      // TODO: add proper error handling if time allows
      console.error("Failed to fetch tracking data:", error);
    } finally {
      setIsDataLoading(false);
    }
  };

  return (
    <ShipmentTrackingContext.Provider
      value={{ shipmentData, fetchShipmentData, isDataLoading }}
    >
      {children}
    </ShipmentTrackingContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(ShipmentTrackingContext);
  if (!context) {
    throw new Error("useDataContext was used outside of its Provider");
  }
  return context;
};
