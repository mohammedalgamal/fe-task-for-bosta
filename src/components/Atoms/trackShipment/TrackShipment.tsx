import { Button, Input, Popover, Space } from "antd";
import { useState } from "react";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";
import { useDataContext } from "../../../contexts/useDataContext/useDataContext";

export const TrackShipment = () => {
  const { localizationFile } = useLocaleContext();
  const [isOpen, setIsOpen] = useState(false);
  const { fetchShipmentData } = useDataContext();

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
  };

  return (
    <Popover
      content={
        <Space.Compact>
          <Input.Search
            placeholder={localizationFile.shipmentTracking.trackingNumber}
            allowClear
            enterButton
            onSearch={(value) =>
              value && !Number.isNaN(value) && fetchShipmentData(value)
            }
          />
        </Space.Compact>
      }
      trigger="click"
      title={localizationFile.buttons.followShipment}
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Button
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          fontWeight: "700",
        }}
        onClick={() => handleOpenChange(true)}
      >
        {localizationFile.buttons.followShipment}
      </Button>
    </Popover>
  );
};
