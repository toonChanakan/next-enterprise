"use client"
import { useRef, useState, useEffect } from "react";

export function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollLeft = (distance = 240) => {
    scrollRef.current?.scrollBy({ left: -distance, behavior: "smooth" });
  };

  const scrollRight = (distance = 240) => {
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return { scrollRef, canScrollLeft, canScrollRight, scrollLeft, scrollRight };
}
