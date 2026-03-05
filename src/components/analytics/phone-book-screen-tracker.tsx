"use client";

import { useEffect, useRef } from "react";

import { capturePostHogEvent, initPostHog, isPostHogConfigured } from "@/lib/analytics/posthog-client";

type TrackerProperties = Record<string, string | number | boolean | null | undefined>;

type PhoneBookScreenTrackerProps = {
  version: "A" | "B";
  screenName: string;
  flowName?: string;
  markFlowStart?: boolean;
  markFlowComplete?: boolean;
  properties?: TrackerProperties;
};

export function PhoneBookScreenTracker({
  version,
  screenName,
  flowName = "phone_book",
  markFlowStart = false,
  markFlowComplete = false,
  properties = {}
}: PhoneBookScreenTrackerProps) {
  const propertiesRef = useRef(properties);

  useEffect(() => {
    if (!isPostHogConfigured()) {
      return;
    }

    initPostHog();

    const mountedAt = Date.now();
    const flowStorageKey = `${flowName}:${version}:flow_start_ms`;
    const baseProperties: TrackerProperties = {
      flow_name: flowName,
      screen_name: screenName,
      version,
      ...propertiesRef.current
    };

    capturePostHogEvent("phone_book_screen_view", baseProperties);

    if (markFlowStart) {
      window.sessionStorage.setItem(flowStorageKey, String(mountedAt));
      capturePostHogEvent("phone_book_flow_start", baseProperties);
    }

    if (markFlowComplete) {
      const rawFlowStart = window.sessionStorage.getItem(flowStorageKey);
      const flowStart = rawFlowStart ? Number(rawFlowStart) : NaN;

      capturePostHogEvent("phone_book_flow_complete", {
        ...baseProperties,
        flow_duration_ms: Number.isFinite(flowStart) ? mountedAt - flowStart : null
      });

      window.sessionStorage.removeItem(flowStorageKey);
    }

    return () => {
      capturePostHogEvent("phone_book_screen_leave", {
        ...baseProperties,
        dwell_ms: Date.now() - mountedAt
      });
    };
  }, [flowName, markFlowComplete, markFlowStart, screenName, version]);

  return null;
}
