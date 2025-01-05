export function getProjectsCountText(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} проектов`;
  }

  if (lastDigit === 1) {
    return `${count} проект`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} проекта`;
  }

  return `${count} проектов`;
}
