import React from "react";

export default function Show({
  children,
  when,
  fallback,
}: {
  children: React.ReactNode;
  when: boolean;
  fallback?: React.ReactNode;
}) {
  if (!when && !fallback) return null;
  if (!when && fallback) return fallback;
  return children;
}
