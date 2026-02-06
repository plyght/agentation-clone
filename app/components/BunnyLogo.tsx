"use client";

export default function BunnyLogo({ className = "" }: { className?: string }) {
  return (
    <object
      data="/assets/bunny-logo-nav.svg"
      type="image/svg+xml"
      width="36"
      height="36"
      className={className}
      aria-label="Bunny Logo"
    />
  );
}
