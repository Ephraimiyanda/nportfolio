import { Button } from "@heroui/button";
import { MdArrowOutward } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GoArrowUpRight } from "react-icons/go";
export function ContactForm() {
  return (
    <section
      id="Contact"
      className=" flex flex-col items-center justify-center text-center gap-8 w-full "
    >
      <div className="text-default-500 text-xl">
        <p>
          Let’s make something awesome together! <br />
          Got a project, an idea, or just want to say hi?
          <br />
        </p>
      </div>
      <div className="flex items-start gap-4 justify-center">
        <Button
          as={Link}
          href="mailto:iyandaephraim@gmail.com"
          endContent={<GoArrowUpRight size={24} />}
          variant="bordered"
          className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
        >
          Lets talk
        </Button>
        <Button
          as={Link}
          href={siteConfig.meetingLink}
          startContent={<IoCalendarOutline size={24} />}
          target="_blank"
          variant="bordered"
          className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
        >
          Book a call
        </Button>
      </div>
    </section>
  );
}
