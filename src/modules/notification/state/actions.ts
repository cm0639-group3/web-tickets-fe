// TODO: check how can be improved
import type { CommonAction } from "../../../store/common";
import { createAction } from "../../../store/common";

import type { NotificationType } from "./types";

export const SET_NOTIFICATION = "notification/SET_NOTIFICATION";
export const SET_ERROR_NOTIFICATION = "notification/SET_ERROR_NOTIFICATION";
export const CLEAR_NOTIFICATION = "notification/CLEAR_NOTIFICATION";

interface SetNotificationPayload {
  message?: string;
  title?: string;
  // if '0' notification toast won't hide automatically
  delay?: number;
  type?: NotificationType;
}

export type SetNotification = CommonAction<typeof SET_NOTIFICATION, SetNotificationPayload>;
export const setNotification = (payload: SetNotificationPayload): SetNotification =>
  createAction(SET_NOTIFICATION, payload);

type SetErrorNotificationPayload = Omit<SetNotificationPayload, "type">;

export type SetErrorNotification = CommonAction<typeof SET_ERROR_NOTIFICATION, SetErrorNotificationPayload>;
export const setErrorNotification = (payload: SetErrorNotificationPayload): SetErrorNotification =>
  createAction(SET_ERROR_NOTIFICATION, payload);

export type ClearNotification = CommonAction<typeof CLEAR_NOTIFICATION, undefined>;
export const clearNotification = (): ClearNotification => createAction(CLEAR_NOTIFICATION, undefined);

export type NotificationActions = SetNotification | SetErrorNotification | ClearNotification;
