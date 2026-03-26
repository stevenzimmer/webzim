"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useCallback, useEffect, useRef } from "react";
import type { PanInfo } from "framer-motion";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import FocusTrap from "focus-trap-react";
import { cn } from "@/lib/utils";

type ModalProps = {
  children: ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  bgColor?: string;
  closeWithX?: boolean;
};

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
} as const;

export default function Modal({
  children,
  showModal,
  setShowModal,
  bgColor = "bg-white",
  closeWithX = false,
}: ModalProps) {
  const mobileModalRef = useRef<HTMLDivElement>(null);
  const desktopModalRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const closeModal = useCallback(() => {
    if (!closeWithX) {
      setShowModal(false);
    }
  }, [closeWithX, setShowModal]);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    controls.start({
      y: 0,
      transition: transitionProps,
    });
  }, [controls, showModal]);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, showModal]);

  const handleDragEnd = async (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = mobileModalRef.current?.getBoundingClientRect().height ?? 0;

    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      closeModal();
      return;
    }

    controls.start({ y: 0, transition: transitionProps });
  };

  return (
    <AnimatePresence>
      {showModal && (
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
          <div className="absolute">
            <motion.div
              ref={mobileModalRef}
              key="mobile-modal"
              className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab active:cursor-grabbing sm:hidden"
              initial={{ y: "100%" }}
              animate={controls}
              exit={{ y: "100%" }}
              transition={transitionProps}
              drag="y"
              dragDirectionLock
              onDragEnd={handleDragEnd}
              dragElastic={{ top: 0, bottom: 1 }}
              dragConstraints={{ top: 0, bottom: 0 }}
            >
              <div
                className={cn(
                  "rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-gray-200",
                  bgColor,
                )}
              >
                <div className="-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12" />
                <div className="h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12" />
              </div>
              {children}
            </motion.div>
            <motion.div
              ref={desktopModalRef}
              key="desktop-modal"
              className="fixed inset-0 z-40 hidden min-h-screen items-center justify-center sm:flex"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onMouseDown={(event) => {
                if (desktopModalRef.current === event.target) {
                  closeModal();
                }
              }}
            >
              {children}
            </motion.div>
            <motion.button
              key="backdrop"
              type="button"
              aria-label="Close dialog"
              className="fixed inset-0 z-30 bg-gray-100/10 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
}
