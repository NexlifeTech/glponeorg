import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  sheen?: boolean;
  as?: "div" | "article" | "aside" | "section";
};

// Liquid-glass surface. Theme-aware (vars flip with the scroll journey).
export function Glass({ children, className = "", sheen = true, as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={`glass ${sheen ? "glass-sheen" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
