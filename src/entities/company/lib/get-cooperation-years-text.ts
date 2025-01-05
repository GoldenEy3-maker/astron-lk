export function getCooperationYearsText(years: number): string {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${years} лет`;
  }

  if (lastDigit === 1) {
    return `${years} год`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${years} года`;
  }

  return `${years} лет`;
}
