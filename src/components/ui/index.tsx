import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`panel ${className}`}>{children}</section>;
}
export function Badge({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: string;
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
export function Button({
  children,
  to,
  secondary = false,
}: {
  children: ReactNode;
  to: string;
  secondary?: boolean;
}) {
  return (
    <Link className={`pixel-button ${secondary ? "secondary" : ""}`} to={to}>
      <ChevronRight size={16} />
      {children}
    </Link>
  );
}
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link"
    >
      {children}
      <ArrowUpRight size={16} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function SectionHeader({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-header">
      <div className="eyebrow">{index} / DEVELOPER ARCHIVE</div>
      <h1>
        {title}
        <span className="accent">_</span>
      </h1>
      <p>{description}</p>
    </header>
  );
}
