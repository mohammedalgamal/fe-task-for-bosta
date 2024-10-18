import { Flex } from "antd";
import { TimelineSegmentProps } from "./types";

export const TimelineSegment = ({
  title,
  content,
  contentColor,
}: TimelineSegmentProps) => {
  return (
    <Flex justify="space-between" gap={"1rem"} vertical>
      <span style={{ color: "#737373", fontSize: "1rem", fontWeight: "500" }}>
        {title}
      </span>
      <section
        style={{ color: contentColor, fontSize: "1rem", fontWeight: "700" }}
      >
        {content}
      </section>
    </Flex>
  );
};
