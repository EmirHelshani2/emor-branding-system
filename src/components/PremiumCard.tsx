import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type PremiumCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  interactive?: boolean;
  glow?: "gold" | "soft";
  children?: ReactNode;
};

const PremiumCard = ({
  className,
  interactive = true,
  glow = "gold",
  children,
  ...props
}: PremiumCardProps) => (
  <motion.div
    className={cn(
      "group premium-card",
      interactive && "premium-card-interactive",
      glow === "soft" && "premium-card-soft-glow",
      className
    )}
    {...props}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,177,61,0.15),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(73,90,148,0.08),transparent_28%)] opacity-80"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 -translate-x-[120%] bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition duration-700 group-hover:translate-x-[240%] group-hover:opacity-100"
    />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default PremiumCard;
