import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const names: Record<string, string> = {
  "/about": "About",
  "/skills": "Skills",
  "/projects": "Projects",
  "/experience": "Experience",
  "/achievements": "Achievements",
  "/resume": "Resume & CV",
  "/contact": "Contact",
};
export function useMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title =
      pathname === "/"
        ? "Mohd. Sayem Lari | Full-Stack Developer & AI/ML Enthusiast"
        : `${names[pathname] || "Page not found"} | Mohd. Sayem Lari`;
    document.title = title;
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    const origin = import.meta.env.VITE_SITE_URL;
    if (origin && (Object.hasOwn(names, pathname) || pathname === "/")) {
      try {
        const url = new URL(pathname, origin);
        let canonical = document.querySelector<HTMLLinkElement>(
          'link[rel="canonical"]',
        );
        if (!canonical) {
          canonical = document.createElement("link");
          canonical.rel = "canonical";
          document.head.appendChild(canonical);
        }
        canonical.href = url.href;
      } catch {
        /* Leave canonical absent until a valid deployment origin is configured. */
      }
    } else {
      document.querySelector('link[rel="canonical"]')?.remove();
    }
  }, [pathname]);
}
