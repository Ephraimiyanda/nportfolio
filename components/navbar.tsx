import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { User } from "@heroui/user";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  SearchIcon,
  LinkedInIcon,
} from "@/components/icons";
import { GoArrowUpRight } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="xl"
      isBordered
      isBlurred
      className="z-100 fixed top-[0]"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <User
              avatarProps={{
                src: "/icon.png",
              }}
              classNames={{
                name: "uppercase font-medium text-foreground",
                description: "uppercase text-default-500",
              }}
              description="Frontend developer"
              name="Ephraim Iyanda"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium uppercase font-medium hover:text-white"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className=" basis-1 pl-4" justify="end">
        <NavbarItem className="sm:flex gap-2 hidden justify-center items-center">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-foreground" />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedIn}
          >
            <LinkedInIcon className="text-foreground" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-foreground" />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex justify-center items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className="md:hidden flex gap-2" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4 mb-4 justify-center items-center text-center">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href="#"
                size="lg"
                className="uppercase font-medium text-2xl hover:text-white"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarMenuItem>
          <div className="flex items-start gap-4 justify-center">
            <Button
              as={Link}
              href="mailto:iyandaephraim@gmail.com"
              endContent={<GoArrowUpRight size={24} />}
              variant="bordered"
              className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
            >
              Let’s talk
            </Button>
            <Button
              as={Link}
              endContent={<PiReadCvLogo size={24} />}
              href={siteConfig.resume}
              variant="bordered"
              className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
            >
              Download Resume
            </Button>
          </div>
        </NavbarMenuItem>
        <NavbarItem className="flex flex-col gap-4">
          <p className="py-2 text-default-500 text-xl text-center">
            I&apos;m on social media
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedIn}
            >
              <LinkedInIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
        </NavbarItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
