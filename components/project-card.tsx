import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import clsx from "clsx";
import Link from "next/link";

export function ProjectCard({
  imgUrl,
  name,
  description,
  liveLink,
  className,
}: {
  imgUrl: string;
  name: string;
  description: string;
  liveLink: string;
  className?: string;
}) {
  return (
    <Card
      as={Link}
      className={clsx(
        "h-full w-full border-[0.5px] border-black/10 bg-default-100/10 dark:border-white/15",
        className,
      )}
      href={liveLink}
      shadow="none"
      target="_blank"
    >
      <CardBody className="shrink-0 overflow-visible p-0">
        <Image
          alt={`${name} preview`}
          className="h-[220px] w-full rounded-t-lg object-cover"
          radius="none"
          src={imgUrl}
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex h-auto flex-col items-start justify-normal gap-2 border-t-[0.5px] border-black/10 px-4 py-4 text-left dark:border-white/15 dark:bg-default-100/30 sm:px-6">
        <div className="flex w-full items-center justify-between gap-3">
          <span className="font-bold text-lg">{name}</span>
          <Button
            className="shrink-0 rounded-full border-[0.5px] border-black/10 px-4 text-base transition-[box-shadow] duration-250 ease-in-out hover:shadow-sm hover:shadow-black/30 dark:border-white/15 dark:hover:shadow-white/40"
            variant="bordered"
          >
            View
          </Button>
        </div>

        <p className="w-full break-words text-default-500">{description}</p>
      </CardFooter>
    </Card>
  );
}
