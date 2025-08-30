"use client";
import { useMemo } from "react";

export function useHero() {
  const bg = useMemo(
    () =>
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWb-51P9Ma3X4nl1WSyljGDP6UodKbRSteAjKrsj2XgZLqydMJ4SP16GViQl-wdYWaz_0aGOY_nrWYWECL4a-t1M72IvMX4svOoI3P-4PwywUFKpTZ9YNK-IGw6ZX8DmKyzFhvlnt3btjpc09UQ9WMm-KGuAz2ElvvJ3E-IeUSEyFXpe-1JW7cP9zqboSOQKnJChRUQsVZrVJu1s31yFcKSsfwllTDaYsskD1JcMmcMOgS-YSN7hxQXC4DKRDgiC-lQ5Ehc7IhMAHM",
    []
  );

  return {
    title: "Elevate Your Style",
    subtitle: "Discover the latest trends and timeless classics in fashion.",
    cta: { label: "Shop Now", href: "#products" },
    backgroundUrl: bg,
  };
}
