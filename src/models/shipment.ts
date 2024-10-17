import {
  TRACKING_TIMELINE_STATES,
  ADDITIONAL_STATES,
} from "../constants/states";
import { Weekdays } from "./date";

type TrackingTimelineState = (typeof TRACKING_TIMELINE_STATES)[number];
type State = TrackingTimelineState & (typeof ADDITIONAL_STATES)[number];

type TransitEvent = {
  state: State;
  timestamp: string;
  hub?: string;
  reason?: string;
};

type CurrentStatus = {
  state: State;
  timestamp: string;
};

type WorkingDay = {
  dayDate: string;
  dayName: Weekdays;
};

export type Shipment = {
  provider: string;
  CurrentStatus: CurrentStatus;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay?: WorkingDay[];
};
