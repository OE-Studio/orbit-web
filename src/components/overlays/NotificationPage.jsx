import { TrashIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import SideBarWrapper from "../SideBarWrapper";

import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../features/NotificationsSlice";

const Notification = ({
  toggle,
  setToggle,
  setMainNotification,
  current_notification,
}) => {
  const { notifications } = useSelector((state) => state.notifications);

  const dispatch = useDispatch();

  return (
    <SideBarWrapper toggle={toggle}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={async () => {
            await dispatch(fetchNotifications());
            setToggle(false);
            setMainNotification(true);
          }}
        >
          <ChevronLeftIcon className="text-green600 h-6 " />
        </div>
        <div
          className="bg-neutral100 w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => {
            notifications.splice(current_notification, 1);
            setToggle(false);
            setMainNotification(true);
          }}
        >
          <TrashIcon className=" w-6 h-6" />
        </div>
      </div>
      <div className="h-9" />
      <div className="h-full overflow-y-scroll pb-14">
        <div className="bg-white border border-[#E5ECF5] rounded-[8px] p-6">
          <p className="text-neutral300 text-xs mb-6 uppercase">
            {format(
              Date.parse(notifications[current_notification].createdAt),
              "dd MMM, yyy"
            )}
          </p>
          <p className={`font-medium text-grey150`}>
            {notifications[current_notification].title}
          </p>
          <p className="text-neutral300 text-sm mt-1">
            {notifications[current_notification].message}
          </p>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default Notification;
