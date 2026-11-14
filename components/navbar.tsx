"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { GoArrowUpRight } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-[60] mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <NextLink href="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] font-mono text-xs tracking-[0.12em] text-accent shadow-[var(--shadow-soft)]">
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

        <nav className="glass-pill hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
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
          <button
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink shadow-[var(--shadow-soft)] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div className="mobile-menu relative z-50 md:hidden" data-open={open}>
        <div className="mobile-menu-inner">
          <div className="mx-4 mb-4 overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-black/85 px-5 py-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
            <div className="flex flex-col gap-1">
              {siteConfig.navItems.map((item, index) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-3 py-3 font-mono text-sm uppercase tracking-[0.18em] text-ink transition duration-300 hover:bg-white/5 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${90 + index * 45}ms` : "0ms",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NextLink>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-[color:var(--line)] pt-5">
              <Button
                as={Link}
                href="mailto:iyandaephraim@gmail.com"
                endContent={<GoArrowUpRight size={20} />}
                className="btn-glow h-12 rounded-full px-5 text-sm font-medium"
              >
                Let’s talk
              </Button>
              <Button
                as={Link}
                href={siteConfig.resume}
                endContent={<PiReadCvLogo size={20} />}
                className="h-12 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-5 text-sm text-ink shadow-soft"
              >
                Download Resume
              </Button>
            </div>

            <div className="mt-5 flex justify-center gap-5">
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
          </div>
        </div>
      </div>
    </header>
  );
};
