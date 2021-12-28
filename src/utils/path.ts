import type { Point } from "./point";

export function linepath(points: Point[], closed: boolean = false): string {
  const start = points.shift();

  const path = [
    "M",
    `${start?.x || 0},${start?.y || 0}`,
    ...points.map((p) => `L ${p.x},${p.y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();

  return path;
}
