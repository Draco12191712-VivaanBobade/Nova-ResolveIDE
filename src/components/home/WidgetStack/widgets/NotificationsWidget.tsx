import { UIIcons } from "../../../../assets/icons/ui";

interface Notification {
  id: string;
  title: string;
  type: string;
}

export default function NotificationsWidget() {
  /*
   * TODO:
   * Replace with:
   * const notifications = await NotificationProvider.getNotifications();
   */
  const notifications: Notification[] = [];

  const handleNotifications = () => {
    // TODO:
    // router.navigate("/notifications");
  };

  if (notifications.length === 0) {
    return (
      <div className="notificationsWidget">
        <div className="notificationsWidget__empty">
          <img
            src={UIIcons.Notifications}
            alt=""
            className="notificationsWidget__icon"
            draggable={false}
          />

          <h3 className="notificationsWidget__title">You're All Caught Up</h3>

          <p className="notificationsWidget__description">
            New notifications, extension updates, community activity, and
            important alerts will appear here.
          </p>

          <button
            type="button"
            className="notificationsWidget__button"
            onClick={handleNotifications}
          >
            View Notifications
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="notificationsWidget">
      {/* Notification cards will be rendered here */}
    </div>
  );
}
