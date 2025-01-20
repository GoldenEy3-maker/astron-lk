export function isoStringWithoutTime(date: Date) {
  return date.toISOString().split("T")[0];
}
