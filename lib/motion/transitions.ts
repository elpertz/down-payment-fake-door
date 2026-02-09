export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
} as const;

export const springSnappy = {
  type: "spring",
  stiffness: 400,
  damping: 25,
} as const;

export const springGentle = {
  type: "spring",
  stiffness: 200,
  damping: 30,
} as const;

export const easings = {
  default: [0.25, 0.1, 0.25, 1] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
  gentle: [0.25, 0.46, 0.45, 0.94] as const,
  spring: [0.25, 1, 0.5, 1] as const,
} as const;
