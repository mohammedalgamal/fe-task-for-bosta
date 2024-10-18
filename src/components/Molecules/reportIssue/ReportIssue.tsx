import { Button, Card, Image } from "antd";
import reportIssueImg from "../../../assets/images/png-transparent-red-question-mark-thumbnail.png";
import { useLocaleContext } from "../../../contexts/useLocaleContext/useLocaleContext";

export const ReportIssue = () => {
  const { localizationFile } = useLocaleContext();
  return (
    <Card>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Image preview={false} src={reportIssueImg} width={"40px"} />
        <aside
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <text style={{ fontWeight: "700" }}>
            {localizationFile.shipmentTracking.issueReport.title}
          </text>
          <Button type="primary">
            {localizationFile.shipmentTracking.issueReport.reportButton}
          </Button>
        </aside>
      </div>
    </Card>
  );
};
