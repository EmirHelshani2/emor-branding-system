import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const motionValue = useMotionValue(0);
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals]
  );
  const transformed = useTransform(motionValue, (latest) =>
    formatter.format(latest)
  );
  const [displayValue, setDisplayValue] = useState(formatter.format(0));

  useEffect(() => {
    const unsubscribe = transformed.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [transformed]);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [inView, motionValue, value]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
