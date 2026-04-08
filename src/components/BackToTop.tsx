import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-gold-light transition-all duration-300 hover:scale-105"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
