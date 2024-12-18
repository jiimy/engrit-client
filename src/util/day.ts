import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export const dayformat = (dateString: string) => {
  return dayjs(dateString).format("YY.MM.DD");
};

export const dayformatTime = (dateString: string) => {
  return dayjs(dateString).format("YY.MM.DD HH:mm");
};



