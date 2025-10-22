// src/lib/hooks.js
import { useEffect, useState } from "react";

export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids?.[0] || "home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);
  return active;
};
