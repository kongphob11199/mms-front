import { Dayjs } from 'dayjs';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export const ConvertTimeToTimestamp = (time: Dayjs) => {
  const newTimestamp = new Timestamp();
  newTimestamp.setSeconds(time.unix());
  newTimestamp.setNanos(time.millisecond() * 1e6);
  return newTimestamp;
};
