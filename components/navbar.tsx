"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <NextLink href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[color:var(--line)] bg-soft font-mono text-xs tracking-[0.12em] text-accent">
            EI
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium tracking-[0.04em] text-ink">
              Ephraim Iyanda
            </span>
            <span className="block truncate font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Frontend developer
            </span>
          </span>
        </NextLink>

        <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elevated)]/80 px-2 py-1.5 backdrop-blur-md md:flex">
          {siteConfig.navItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mute transition hover:bg-white/5 hover:text-ink"
            >
              {item.label}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
              className="icon-blend"
            >
              <TwitterIcon className="text-current" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedIn}
              className="icon-blend"
            >
              <LinkedInIcon className="text-current" />
            </Link>
            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.links.github}
              className="icon-blend"
            >
              <GithubIcon className="text-current" />
            </Link>
          </div>
          <ThemeSwitch />
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center border border-[color:var(--line)] text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="font-mono text-xs">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--bg)]/95 px-5 py-6 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.navItems.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className="font-mono text-sm uppercase tracking-[0.18em] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NextLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
