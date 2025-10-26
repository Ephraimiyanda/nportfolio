import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

export function ProjectCard({
  imgUrl,
  name,
  description,
  liveLink,
}: {
  imgUrl: string;
  name: string;
  description: string;
  liveLink: string;
}) {
  return (
    <Card
      isBlurred
      shadow="none"
      className="border-black/10 dark:border-white/15 border-[0.5px] bg-default-100/10 h-full sm:max-h-[350px]"
      as={Link}
      href={liveLink}
      target="_blank"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          radius="none"
          alt={"card image"}
          className="w-full object-cover h-[220px] rounded-t-lg"
          src={imgUrl}
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-2 py-4 px-4 sm:px-6 text-left dark:bg-default-100/30 justify-normal items-start border-t-[0.5px] border-black/10 dark:border-white/15 h-full">
        {/* <Link href={liveLink}></Link> */}
        <div className="flex justify-between  w-full items-center">
          <span className="font-bold text-lg">{name}</span>
          <Button
            variant="bordered"
            className=" px-4 border-black/10 dark:border-white/15 border-[0.5px] rounded-full text-base  dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
          >
            View
          </Button>
        </div>

        <p className="text-default-500">{description}</p>
      </CardFooter>
    </Card>
  );
}
