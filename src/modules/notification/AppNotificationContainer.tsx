import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationToast, NotificationToastContainer, NotificationToastType } from "./NotificationToast";
import { clearNotification, NotificationType, selectNotification } from "./state";

function getNotificationToastType(type: NotificationType) {
  switch (type) {
    case NotificationType.Info:
      return NotificationToastType.Info;
    case NotificationType.Error:
      return NotificationToastType.Error;
    case NotificationType.Success:
      return NotificationToastType.Success;
    case NotificationType.Loading:
      return NotificationToastType.Loading;
  }
}

export const AppNotificationContainer: React.FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector(selectNotification);

  const handleToastClose = useCallback(() => {
    dispatch(clearNotification());
  }, [dispatch]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // run auto hide only when delay is > 0
    if (notification.display && notification.delay > 0) {
      timeout = setTimeout(() => {
        handleToastClose();
      }, notification.delay * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [handleToastClose, notification]);

  if (!notification.display) return null;

  return (
    <NotificationToastContainer>
      <NotificationToast
        message={notification.message}
        title={notification.title}
        type={getNotificationToastType(notification.type)}
      />
    </NotificationToastContainer>
  );
};
