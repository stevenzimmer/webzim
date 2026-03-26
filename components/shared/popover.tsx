"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useRef } from "react";
import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import * as PopoverPrimitive from "@radix-ui/react-popover";

type PopoverProps = {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openPopover: boolean;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
};

export default function Popover({
  children,
  content,
  align = "center",
  openPopover,
  setOpenPopover,
}: PopoverProps) {
  const mobilePopoverRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 500, damping: 30 };

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height =
      mobilePopoverRef.current?.getBoundingClientRect().height ?? 0;

    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      setOpenPopover(false);
      return;
    }

    controls.start({ y: 0, transition: transitionProps });
  };

  return (
    <>
      <div className="md:hidden">{children}</div>
      <AnimatePresence>
        {openPopover && (
          <>
            <motion.div
              ref={mobilePopoverRef}
              key="mobile-popover"
              className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab active:cursor-grabbing md:hidden"
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
                {content}
              </div>
            </motion.div>
            <motion.button
              key="mobile-popover-backdrop"
              type="button"
              aria-label="Close popover"
              className="fixed inset-0 z-30 bg-gray-100/10 backdrop-blur md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPopover(false)}
            />
          </>
        )}
      </AnimatePresence>
      <PopoverPrimitive.Root open={openPopover} onOpenChange={setOpenPopover}>
        <PopoverPrimitive.Trigger className="hidden md:inline-flex" asChild>
          {children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          sideOffset={8}
          align={align}
          className="z-20 hidden items-center rounded-md border border-gray-200 bg-white drop-shadow-lg radix-side-top:animate-slide-down-fade radix-side-bottom:animate-slide-up-fade md:block"
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </>
  );
}
