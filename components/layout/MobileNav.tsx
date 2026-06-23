"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

type MobileNavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  items: readonly MobileNavItem[];
};

export default function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 shadow-lg shadow-slate-950/30 transition hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 z-50 flex w-[min(20rem,calc(100vw-2rem))] flex-col border-l border-slate-800 bg-slate-950 px-6 py-5 shadow-2xl shadow-slate-950/60 outline-none md:hidden">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-lg font-semibold text-slate-100">
                Steven Zimmer
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-400">
                Full-stack engineering, AI workflows, CMS platforms, and SEO.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-100 transition hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile primary" className="mt-10">
            <ul className="space-y-2">
              {items.map(({ href, label }) => (
                <li key={href}>
                  <Dialog.Close asChild>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center justify-between rounded-lg border border-transparent px-4 py-3 font-display text-lg font-semibold text-slate-100 transition hover:border-slate-800 hover:bg-slate-900/80",
                        label === "Contact" &&
                          "border-sky-400/40 bg-sky-500/10 text-sky-100",
                      )}
                    >
                      {label}
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-slate-800 pt-5">
            <p className="text-sm text-slate-400">
              Building discoverable, maintainable web platforms for product and
              go-to-market teams.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
