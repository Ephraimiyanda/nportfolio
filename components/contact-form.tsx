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
          className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
        >
          Let’s talk
          <GoArrowUpRight size={18} />
        </Link>
        <Link
          href={siteConfig.meetingLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-5 py-3 text-sm text-ink shadow-soft transition hover:border-accent/35 hover:text-accent"
        >
          <IoCalendarOutline size={18} />
          Book a call
        </Link>
      </div>
    </div>
  );
}
