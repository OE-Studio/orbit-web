import {
  BellIcon,
  EllipsisVerticalIcon,
  ClipboardIcon,
  TrashIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import SideBarWrapper from "../SideBarWrapper";
import { format } from "date-fns";
// import notifications from "../../data/notifications";
import { useDispatch, useSelector } from "react-redux";
import emptyTransaction from "../../assets/empty-state/emptyNotification.svg";
import { MarkNotificationRead } from "./NotificationApi";
import CloseButton from "../Inputs/CloseButton";
import { fetchNotifications } from "../../features/NotificationsSlice";

const NotificationItem = ({
  read,
  date,
  description,
  title,
  setToggleNotification,
  setTogglePage,
  setCurrent,
  index,
  id,
}) => {
  return (
    <div
      className="w-full flex gap-4 py-4 border-t border-neutral100  font-inter cursor-pointer"
      onClick={async () => {
        // notifications[index].read = true;
        await MarkNotificationRead({ notificationId: id });
        setCurrent(index);
        setToggleNotification(false);
        setTogglePage(true);
      }}
    >
      <div className="bg-neutral100 w-[30px] h-[30px] flex items-center justify-center rounded-full">
        <EnvelopeIcon
          className={`h-4 ${read ? "text-neutral300" : "text-green700"}`}
        />
      </div>
      <div>
        <p
          className={`font-medium 
        ${read ? "text-grey150" : "text-grey500"}`}
        >
          {title}
        </p>
        <p className="text-neutral300 text-sm mt-1">{description}</p>
        <p className="text-neutral300 text-xs mt-2 uppercase">
          {format(Date.parse(date), "dd MMM, yyy")}
        </p>
      </div>
    </div>
  );
};

export const EmptyTransaction = () => {
  return (
    <div className="center flex-col h-[350px] w-full">
      <img src={emptyTransaction} alt="" />
      <div className="h-4"></div>
      <p className="text-neutral300">No notification at the moment</p>
    </div>
  );
};

const Notification = ({
  toggle,
  setToggle,
  setTogglePage,
  set_current_notification,
}) => {
  const [toggleOptions, setToggleOptions] = useState(false);

  const { notifications } = useSelector((state) => state.notifications);
  const [filteredNotifications, setFilteredNotifications] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotifications());

    let filterOperation;

    // Sort by date in descending order
    if (notifications !== null) {
      filterOperation = [...notifications].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    }
    setFilteredNotifications(filterOperation);
    // eslint-disable-next-line
  }, []);

  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <BellIcon className="text-green600 h-6 " />
          <p className="text-sm font-medium leading-normal text-grey400">
            Notification
          </p>
          <div className="relative">
            <div
              className="rounded-full w-5 h-5 bg-neutral100 flex items-center justify-center cursor-pointer"
              onClick={() => {
                setToggleOptions(!toggleOptions);
              }}
            >
              <EllipsisVerticalIcon className="h-4 text-grey600" />
            </div>
            {toggleOptions && (
              <div className="absolute left-full top-full bg-white shadow-[10px_40px_100px_0px_#00000014] rounded-lg p-2 w-[180px]">
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full">
                  <p className="text-sm font-medium font-inter text-grey200">
                    Mark all as read
                  </p>
                  <ClipboardIcon className="w-5 h-5 rounded-lg text-blue25" />
                </div>
                <div className="hover:bg-neutral100  flex space-x-3 items-center justify-between px-3 py-2 rounded-full w-full mt-2">
                  <p className="text-sm text-grey200 font-medium font-inter">
                    Delete all
                  </p>
                  <TrashIcon className="w-5 h-5 rounded-lg text-red500" />
                </div>
              </div>
            )}
          </div>
        </div>
        <CloseButton
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification, index) => {
            return (
              <NotificationItem
                setToggleNotification={setToggle}
                setTogglePage={setTogglePage}
                title={notification.message}
                // description={notification.message}
                date={notification.createdAt}
                id={notification.id}
                read={notification.status === "read"}
                setCurrent={set_current_notification}
                index={index}
                key={index}
              />
            );
          })
        ) : (
          <EmptyTransaction />
        )}
      </div>
    </SideBarWrapper>
  );
};

export default Notification;
