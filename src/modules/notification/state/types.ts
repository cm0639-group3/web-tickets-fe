export enum NotificationType {
  Info,
  Error,
  Success,
  Loading,
}

export interface NotificationState {
  type: NotificationType;
  message?: string;
  title?: string;
  /**
   * Delay in seconds.
   * How long the notification toast is visible
   */
  delay: number;
  display: boolean;
}
