export function getFiscalQuarter(date: Date) {
  const quarter = Math.floor(date.getMonth() / 3 + 2);

  return quarter > 4 ? quarter - 4 : quarter;
}

export function getMonthsByFiscalQuarter(quarter: number) {
  switch (quarter) {
    case 1:
      return [9, 10, 11];
    case 2:
      return [0, 1, 2];
    case 3:
      return [3, 4, 5];
    case 4:
      return [6, 7, 8];
    default:
      throw new Error(
        "Invalid fiscal quarter value. Should be between 1 and 4."
      );
  }
}
