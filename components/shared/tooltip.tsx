"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode | string;
  fullWidth?: boolean;
};

export default function Tooltip({
  children,
  content,
  fullWidth,
}: TooltipProps) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const mobileTooltipRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 500, damping: 30 };

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height =
      mobileTooltipRef.current?.getBoundingClientRect().height ?? 0;

    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      setOpenTooltip(false);
      return;
    }

    controls.start({ y: 0, transition: transitionProps });
  };

  const tooltipContent =
    typeof content === "string" ? (
      <div className="p-5">
        <span className="block max-w-xs text-center text-sm text-gray-700">
          {content}
        </span>
      </div>
    ) : (
      content
    );

  return (
    <>
      <button
        type="button"
        className={cn(fullWidth ? "w-full" : "inline-flex", "sm:hidden")}
        onClick={() => setOpenTooltip(true)}
      >
        {children}
      </button>
      <AnimatePresence>
        {openTooltip && (
          <>
            <motion.div
              ref={mobileTooltipRef}
              key="mobile-tooltip"
              className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab active:cursor-grabbing sm:hidden"
              initial={{ y: "100%" }}
              animate={{
                y: 0,
                transition: transitionProps,
              }}
              exit={{ y: "100%" }}
              transition={transitionProps}
              drag="y"
              dragDirectionLock
              onDragEnd={handleDragEnd}
              dragElastic={{ top: 0, bottom: 1 }}
              dragConstraints={{ top: 0, bottom: 0 }}
            >
              <div className="rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-200 bg-white">
                <div className="-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
                <div className="h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
              </div>
              <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white align-middle shadow-xl">
                {tooltipContent}
              </div>
            </motion.div>
            <motion.button
              key="mobile-tooltip-backdrop"
              type="button"
              aria-label="Close tooltip"
              className="fixed inset-0 z-30 bg-gray-100/10 backdrop-blur sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenTooltip(false)}
            />
          </>
        )}
      </AnimatePresence>
      <TooltipPrimitive.Provider delayDuration={100}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger className="hidden sm:inline-flex" asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            sideOffset={8}
            side="top"
            className="z-30 hidden items-center overflow-hidden rounded-md border border-gray-200 bg-white drop-shadow-lg radix-side-top:animate-slide-down-fade radix-side-bottom:animate-slide-up-fade sm:block"
          >
            <TooltipPrimitive.Arrow className="fill-current text-white" />
            {tooltipContent}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </>
  );
}
