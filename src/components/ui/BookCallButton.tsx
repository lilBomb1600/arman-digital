"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";
import { studio } from "@/data/business";

export function BookCallButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: studio.cal.eventSlug });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#d9a441" } },
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace={studio.cal.eventSlug}
      data-cal-link={`${studio.cal.username}/${studio.cal.eventSlug}`}
      data-cal-config={JSON.stringify({ layout: "month_view" })}
      className={cn("shine-btn", className)}
    >
      {children}
    </button>
  );
}
