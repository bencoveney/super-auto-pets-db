export function sanitiseName(name: string): string {
  return name.toLowerCase().replace(/\s/g, "_");
}
