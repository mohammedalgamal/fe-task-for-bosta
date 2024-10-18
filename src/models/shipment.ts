import { POSSIBLE_HUBS, POSSIBLE_REASONS } from "../constants/common";
import {
  TRACKING_TIMELINE_STATES,
  ADDITIONAL_STATES,
} from "../constants/states";
import { Weekdays } from "./date";

export type TrackingTimelineState = (typeof TRACKING_TIMELINE_STATES)[number];
export type State = TrackingTimelineState & (typeof ADDITIONAL_STATES)[number];

type Hubs = (typeof POSSIBLE_HUBS)[number];
type Reasons = (typeof POSSIBLE_REASONS)[number];

type TransitEvent = {
  state: State;
  timestamp: string;
  hub?: Hubs;
  reason?: Reasons;
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
