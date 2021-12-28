export function range(from: number, to: number, step: number = 1): number[] {
  const length = Math.floor((to - from) / step) + 1;
  return Array.from({ length }).map((_, i) => from + i * step);
}
