"use client";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  useEffect(() => {
    const loadPreline = async () => {
      try {
        await import("preline/preline");
        if (typeof window !== "undefined" && window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        }
      } catch (error) {
        console.error("Error loading Preline:", error);
      }
    };

    loadPreline();
  }, []);

  return null;
}