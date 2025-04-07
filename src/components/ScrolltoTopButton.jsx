import React, { useState, useEffect } from "react";
import { useScrollToTop } from "../components/ToTop";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTopButton() {
  const scrollToTop = useScrollToTop();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-3 right-1 text-white px-4 py-2 rounded-full hover:text-[#2ac3ed] z-50"
      >
        <BsArrowUpCircleFill size={40} />
      </button>
    )
  );
}
