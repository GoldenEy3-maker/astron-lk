export function getUTCDate(year: number, month?: number, day?: number) {
  return new Date(Date.UTC(year, month, day, 12, 0, 0, 0));
}

export function getUTCDateFromDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      12,
      0,
      0,
      0
    )
  );
}
