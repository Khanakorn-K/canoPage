"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
  useEffect(() => {
    const baseTitle = "Manop";
    let index = 0;

    document.title = "";

    const interval = setInterval(() => {
      if (index <= baseTitle.length) {
        document.title = baseTitle.slice(0, index);
        index++;
      } else {
        document.title = `❤️ ${baseTitle}`;
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
