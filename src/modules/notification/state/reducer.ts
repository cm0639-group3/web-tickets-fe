import type { NotificationActions } from "./actions";
import { CLEAR_NOTIFICATION, SET_ERROR_NOTIFICATION, SET_NOTIFICATION } from "./actions";
import type { NotificationState } from "./types";
import { NotificationType } from "./types";

const initialNotificationState: NotificationState = Object.freeze({
  type: NotificationType.Info,
  message: undefined,
  title: undefined,
  delay: 5,
  display: false,
});

export const notificationReducer = (
  state = initialNotificationState,
  action: NotificationActions,
): NotificationState => {
  switch (action.type) {
    case SET_NOTIFICATION: {
      const { message, title, delay, type } = action.payload;

      /**
       * When NotificationType.Loading delay should be 0.
       * It means that notification toast won't hide automatically
       * and 'clearNotification' should be called
       */
      const notificationDelay = type === NotificationType.Loading ? 0 : delay || initialNotificationState.delay;

      return {
        ...state,
        type: type || initialNotificationState.type,
        message: message,
        title: title,
        delay: notificationDelay,
        display: true,
      };
    }
    case SET_ERROR_NOTIFICATION: {
      const { message, title, delay } = action.payload;

      return {
        ...state,
        message: message,
        title: title,
        type: NotificationType.Error,
        delay: delay || initialNotificationState.delay,
        display: true,
      };
    }
    case CLEAR_NOTIFICATION:
      return initialNotificationState;
    default:
      return state;
  }
};
