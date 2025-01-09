export function formatBytes(bytes: number): string {
  const units = ["б", "кб", "мб", "гб", "тб"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }

  return `${Math.round(value * 100) / 100} ${units[unitIndex]}`;
}
