export function generateId(length: number = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}

export function generateRandomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
