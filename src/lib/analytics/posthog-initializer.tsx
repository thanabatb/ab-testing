"use client";

import { useEffect } from "react";

import { initPostHog } from "./posthog-client";

export function PostHogInitializer() {
  useEffect(() => {
    initPostHog();
  }, []);

  return null;
}
