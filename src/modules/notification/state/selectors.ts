import type { DefaultRootState } from "react-redux";

import type { NotificationState } from "./types";

export const selectNotification = (state: DefaultRootState): NotificationState => state.notification;
