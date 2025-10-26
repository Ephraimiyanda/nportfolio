import { SVGProps } from "react";
import * as SiIcon from "react-icons/si";

export type siIcon = keyof typeof SiIcon;

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
