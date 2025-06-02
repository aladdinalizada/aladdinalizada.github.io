import { useEffect, useState } from "react";
import { GitFork, Star } from "lucide-react";

import { analyticsEvents, captureEvent } from "@/lib/analytics";
import { scrollToSection } from "@/lib/utils";

export const Footer: React.FC = () => {
 

  

  return (
    <footer>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/aladdinalizada"
          className="m-2 hover:underline"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_LINK, {
              origin: "footer",
              target: "https://github.com/aladdinalizada",
            })
          }
        >
          Made with 💙 by Aladdin Alizada
        </a>
      </div>
      <div className="flex justify-center items-center"></div>
      <div className="flex justify-center items-center pb-8">
        <p
          onClick={() => {
            captureEvent(analyticsEvents.SCROLL_NEXT, {
              origin: "footer",
              target: "landing",
            });
            scrollToSection("landing");
          }}
        >
          🚀 Click me to scroll to the top! 🚀
        </p>
      </div>
    </footer>
  );
};
