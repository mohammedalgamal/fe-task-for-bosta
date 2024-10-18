import { Card, Divider, Flex, Steps } from "antd";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";
import { stepsItems, timelineSegments } from "./config";
import { useDataContext } from "../../../contexts/useDataContext/useDataContext";
import { TimelineSegment } from "../../Atoms/timelineSegment/TimelineSegment";
import { useBreakingPoints } from "../../../hooks/useBreakingPoints/useBreakingPoints";

export const Timeline = () => {
  const { localizationFile, currentLanguage } = useLocaleContext();
  const { shipmentData } = useDataContext();
  const isMobile = useBreakingPoints();
  if (!shipmentData) return null;
  const segments = timelineSegments(
    localizationFile,
    shipmentData,
    currentLanguage
  );
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Flex
        justify="space-between"
        vertical={isMobile}
        gap={isMobile ? "20px" : ""}
      >
        {segments.map((segment, index) => (
          <TimelineSegment
            title={segment.title}
            content={segment.content}
            contentColor={segment.contentColor}
            key={index}
          />
        ))}
      </Flex>
      <Divider />
      <Steps progressDot items={stepsItems(localizationFile, shipmentData)} />
    </Card>
  );
};
