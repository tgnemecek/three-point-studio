import React from "react";
import ICON_LIBRARY from "./iconLibrary";
import Theme from "../Theme";

export type IconName = keyof typeof ICON_LIBRARY;

type IconProps = {
  icon: IconName;
  color?: string;
  size?: number;
};

const Icon: React.FC<IconProps> = ({
  icon,
  color = Theme.dark.main,
  size = 20,
}) => {
  return ICON_LIBRARY[icon]({ color, size });
};

export default Icon;
