export const MOTION_ENABLED = process.env.NEXT_PUBLIC_UI_MOTION === "on";

export function motionProps<T extends Record<string, unknown>>(props: T): Partial<T> {
  return MOTION_ENABLED ? props : ({} as Partial<T>);
}
