import { TrackingTimelineState } from "../models/shipment";
import { PossibleTimelineStatus } from "../models/timeline";

export const getTimelineStatus = (
  statusArray: TrackingTimelineState[],
  currentState?: TrackingTimelineState,
  nextState?: TrackingTimelineState
): PossibleTimelineStatus => {
  if (statusArray.includes("DELIVERED")) return "finish";

  if (
    typeof currentState === "undefined" ||
    !statusArray.includes(currentState)
  )
    return "wait";

  if (typeof nextState === "undefined" || !statusArray.includes(nextState))
    return "process";

  return "finish";
};
