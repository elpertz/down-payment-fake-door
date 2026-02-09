import { Tag, tagVariants } from "@/components/ui/tag";
import type { TagProps } from "@/components/ui/tag";

/**
 * @deprecated Use Tag instead. Badge is kept as a compatibility alias.
 */
const Badge = Tag;
const badgeVariants = tagVariants;

type BadgeProps = TagProps;

export { Badge, badgeVariants };
export type { BadgeProps };
