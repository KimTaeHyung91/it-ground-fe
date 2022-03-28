import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.utc().tz("Asia/Seoul"); // utc기준, 타임존 한국으로 설정

dayjs.extend(customParseFormat); // 커스텀 시간 형식 확장

// 시간 포맷팅 - 테스트용 함수
export const getTime = (data: { time?: string; format?: string } = {}): string => {
  const { time, format } = data;

  return dayjs(time).format(format || "YYYY-MM-DD HH:mm:ss");
};
