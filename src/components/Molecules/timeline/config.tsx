import { StepProps } from "antd";
import { LocalizationFile } from "../../../models/localization";
import { Shipment, TrackingTimelineState } from "../../../models/shipment";
import { TRACKING_TIMELINE_STATES } from "../../../constants/states";
import { getTimelineStatus } from "../../../utils/state";
import { TimelineSegmentProps } from "../../Atoms/timelineSegment/types";
import { getDate, getTime } from "../../../utils/date";
import { MONTHS } from "../../../constants/date";
import { SupportedLanguages } from "../../../contexts/useLocaleContext/types";

export const timelineSegments = (
  localizationFile: LocalizationFile,
  shipmentData: Shipment,
  currentLanguage: SupportedLanguages
): TimelineSegmentProps[] => {
  const { time, suffix } = getTime(shipmentData.CurrentStatus.timestamp);
  const promisedDateArray = getDate(shipmentData.PromisedDate).split("-");
  return [
    {
      title: `${localizationFile.shipmentTracking.headers.trackingNumber} ${shipmentData.TrackingNumber}`,
      content:
        localizationFile.shipmentTracking.trackingTimeline[
          shipmentData.CurrentStatus.state
        ],
      contentColor: "black",
    },
    {
      title: localizationFile.shipmentTracking.headers.lastUpdate,
      content: `${getDate(shipmentData.CurrentStatus.timestamp)} ${time} ${
        suffix ? localizationFile[suffix] : ""
      }`,
      contentColor: "black",
    },
    {
      title: localizationFile.shipmentTracking.headers.providerName,
      content: shipmentData.provider,
      contentColor: "black",
    },
    {
      title: localizationFile.shipmentTracking.headers.estimatedDeliveryTime,
      content: `${promisedDateArray[currentLanguage === "en_GB" ? 0 : 2]} ${
        localizationFile.shipmentTracking.months[
          MONTHS[Number(promisedDateArray[1])]
        ]
      } ${promisedDateArray[currentLanguage === "en_GB" ? 2 : 0]}`,
      contentColor: "black",
    },
  ];
};

export const stepsItems = (
  localizationFile: LocalizationFile,
  shipmentData: Shipment
): StepProps[] => {
  const uniqueValidStatesSet = new Set<TrackingTimelineState>();

  shipmentData.TransitEvents.forEach((event) => {
    if (TRACKING_TIMELINE_STATES.includes(event.state)) {
      uniqueValidStatesSet.add(event.state);
    }
  });

  const statesArray = Array.from(uniqueValidStatesSet);

  return [
    {
      title: localizationFile.shipmentTracking.trackingTimeline.TICKET_CREATED,
      status: getTimelineStatus(
        statesArray,
        "TICKET_CREATED",
        "PACKAGE_RECEIVED"
      ),
    },
    {
      title:
        localizationFile.shipmentTracking.trackingTimeline.PACKAGE_RECEIVED,
      status: getTimelineStatus(
        statesArray,
        "PACKAGE_RECEIVED",
        "OUT_FOR_DELIVERY"
      ),
    },
    {
      title:
        localizationFile.shipmentTracking.trackingTimeline.OUT_FOR_DELIVERY,
      status: getTimelineStatus(statesArray, "OUT_FOR_DELIVERY", "DELIVERED"),
    },
    {
      title: localizationFile.shipmentTracking.trackingTimeline.DELIVERED,
      status: getTimelineStatus(statesArray, "DELIVERED", "DELIVERED"),
    },
  ];
};
