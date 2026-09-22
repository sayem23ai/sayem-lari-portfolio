import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduce ? 0 : 0.35 }}
    >
      {children}
    </motion.div>
  );
}
