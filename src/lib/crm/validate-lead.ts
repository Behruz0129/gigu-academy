export function normalizeUzPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");

  if (digits.length === 9) {
    return `+998${digits}`;
  }

  if (digits.length === 12 && digits.startsWith("998")) {
    return `+${digits}`;
  }

  if (digits.length === 13 && digits.startsWith("998")) {
    return `+${digits.slice(0, 12)}`;
  }

  return null;
}

export function isValidAge(value: number): boolean {
  return Number.isInteger(value) && value >= 7 && value <= 99;
}
