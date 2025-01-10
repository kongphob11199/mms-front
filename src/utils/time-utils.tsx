import dayjs, { Dayjs } from 'dayjs';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export const ConvertTimeToTimestamp = (time: Dayjs) => {
  const newTimestamp = new Timestamp();
  newTimestamp.setSeconds(time.unix());
  newTimestamp.setNanos(time.millisecond() * 1e6);
  return newTimestamp;
};

export const ConvertTimestampToTime = (timestamp: Timestamp): Dayjs => {
  const seconds = timestamp.getSeconds();
  const nanos = timestamp.getNanos();
  return dayjs.unix(seconds).millisecond(nanos / 1e6);
};
