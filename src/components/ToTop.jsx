// hooks/useScrollToTop.ts
import { useCallback } from "react";

export const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scroll
    });
  }, []);

  return scrollToTop; // Return the scrollToTop function
};
