"use client";

import posthog from "posthog-js";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

let isInitialized = false;

export function isPostHogConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
}

export function initPostHog() {
  if (isInitialized) {
    return;
  }

  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!apiKey) {
    return;
  }

  posthog.init(apiKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    defaults: "2026-01-30",
    person_profiles: "identified_only"
  });

  isInitialized = true;
}

export function capturePostHogEvent(eventName: string, properties: EventProperties = {}) {
  if (!isPostHogConfigured()) {
    return;
  }

  initPostHog();
  posthog.capture(eventName, properties);
}
