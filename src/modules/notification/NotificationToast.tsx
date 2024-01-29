import cn from "classnames";

import css from "./NotificationToast.module.scss";

export enum NotificationToastType {
  Info,
  Error,
  Success,
  Loading,
}

interface NotificationToastProps {
  message?: string;
  title?: string;
  type?: NotificationToastType;
}

function getDefaultTitle(type: NotificationToastType) {
  switch (type) {
    case NotificationToastType.Info:
      return "Information";
    case NotificationToastType.Error:
      return "Error";
    case NotificationToastType.Success:
      return "Success!";
    case NotificationToastType.Loading:
      return "Processing...";
  }
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  title,
  type = NotificationToastType.Info,
}) => {
  return (
    <div className={css.notificationToast}>
      <div
        className={cn(css.notificationToastIcon, {
          [css.error]: type === NotificationToastType.Error,
          [css.success]: type === NotificationToastType.Success,
          [css.loading]: type === NotificationToastType.Loading,
        })}
      />

      <div className={css.notificationToastContent}>
        <div className={css.notificationToastTitle}>{title || getDefaultTitle(type)}</div>
        <div className={css.notificationToastMessage}>{message}</div>
      </div>
    </div>
  );
};

export const NotificationToastContainer: React.FC = ({ children }) => (
  <div className={css.notificationContainer}>{children}</div>
);
