"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const tabs = [
  "Description",
  "Ingredients",
  "Nutrients",
  "Usage",
  "Additional",
];

interface Props {
  description: string;
}

function parseTabs(description: string) {

  const sections: Record<string, string> = {};

  const regex =
    /\[TAB:(.*?)\]([\s\S]*?)(?=\[TAB:|$)/g;

  let match;

  while ((match = regex.exec(description))) {

    const title =
      match[1].trim();

    const content =
      match[2]
        .trim()
        .replace(/\n\n/g, "<br /><br />")
        .replace(/\n/g, " ");
    sections[title] = content;
  }

  return sections;
}

export default function ProductTabs({
  description,
}: Props) {

  const [activeTab, setActiveTab] =
    useState("Description");

  const parsed =
    parseTabs(description);

  const getContent = () => {

    switch (activeTab) {

      case "Description":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                parsed.Description ||
                "Description coming soon.",
            }}
          />
        );

      case "Ingredients":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                parsed.Ingredients ||
                "Ingredients coming soon.",
            }}
          />
        );

      case "Nutrients":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                parsed.Nutrients ||
                "Nutritional information coming soon.",
            }}
          />
        );

      case "Usage":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                parsed.Usage ||
                "Usage instructions coming soon.",
            }}
          />
        );

      case "Additional":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                parsed.Additional ||
                "Additional information coming soon.",
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="mt-12 md:mt-16">

      {/* TABS */}
      <div className="flex items-center gap-3 overflow-x-auto pb-3 no-scrollbar">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`
              shrink-0
              px-5
              py-3
              rounded-full
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                activeTab === tab
                  ? "bg-[var(--forest)] text-white"
                  : "bg-[#f7fffd] border border-black/5 text-[var(--forest-dark)]"
              }
            `}
          >

            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT CARD */}
      <div
        className="
          mt-6
          bg-[#f7fffd]
          rounded-[32px]
          border
          border-black/5
          overflow-hidden
        "
      >

        {/* SCROLL AREA */}
        <div
  className="
    max-h-[320px]
    md:max-h-[420px]
    overflow-y-auto
    overflow-x-hidden
    custom-scrollbar
    px-6
    md:px-8
    py-5
    md:py-6
  "
>

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                text-black/70
                leading-7
                md:leading-8
                text-base
                md:text-lg
              "
            >

              {getContent()}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}