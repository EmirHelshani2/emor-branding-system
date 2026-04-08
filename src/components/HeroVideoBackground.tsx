import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoBackgroundProps {
  className?: string;
  posterSrc?: string;
  videoSrc?: string;
}

const defaultVideoSrc = "/media/emor-hero-placeholder.mp4";
const defaultPosterSrc = "/media/emor-hero-poster.svg";

const HeroVideoBackground = ({
  className,
  posterSrc = defaultPosterSrc,
  videoSrc = defaultVideoSrc,
}: HeroVideoBackgroundProps) => {
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(212,177,61,0.15),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(59,82,150,0.22),transparent_34%),linear-gradient(180deg,rgba(3,6,13,0.72)_0%,rgba(4,8,16,0.78)_32%,rgba(4,8,16,0.92)_100%)]" />
      <div className="hero-fallback absolute inset-0" />
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          preload="metadata"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center brightness-[0.42] contrast-[1.2] saturate-[0.6] blur-[1px] transition-opacity duration-700",
            videoReady ? "opacity-60" : "opacity-0"
          )}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="panel-grid absolute inset-0 opacity-[0.14]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(3,6,12,0.92)_2%,rgba(3,6,12,0.66)_34%,rgba(3,6,12,0.72)_64%,rgba(3,6,12,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,177,61,0.16),transparent_28%),radial-gradient(circle_at_18%_68%,rgba(65,79,138,0.12),transparent_32%)] mix-blend-screen opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroVideoBackground;
