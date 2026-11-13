import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";

import { siteConfig } from "@/config/site";

export function ContactForm() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
      <p className="text-lg leading-relaxed text-mute sm:text-xl">
        Let’s make something sharp together. Got a product, a redesign, or just
        want to say hi?
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="mailto:iyandaephraim@gmail.com"
          className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-ink shadow-accent transition hover:brightness-110"
        >
          Let’s talk
          <GoArrowUpRight size={18} />
        </Link>
        <Link
          href={siteConfig.meetingLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-[color:var(--line)] px-5 py-3 text-sm text-ink transition hover:border-accent/40 hover:text-accent"
        >
          <IoCalendarOutline size={18} />
          Book a call
        </Link>
      </div>
    </div>
  );
}
