import { Flex, Layout } from "antd";
import { Address } from "../address/Address";
import { ReportIssue } from "../reportIssue/ReportIssue";
import { TrackShipmentTable } from "../table/Table";
import { Timeline } from "../timeline/Timeline";
import { useBreakingPoints } from "../../../hooks/useBreakingPoints/useBreakingPoints";

export const LayoutContent = () => {
  const isMobile = useBreakingPoints();
  return (
    <Layout.Content
      style={{
        padding: `${isMobile ? "1rem" : "3rem"}`,
        backgroundColor: "white",
      }}
    >
      <Timeline />
      <Flex
        justify="space-between"
        vertical={isMobile}
        gap={isMobile ? "1rem" : ""}
      >
        <TrackShipmentTable />
        <Flex vertical justify="flex-start" gap={"2rem"}>
          <Address />
          <ReportIssue />
        </Flex>
      </Flex>
    </Layout.Content>
  );
};
