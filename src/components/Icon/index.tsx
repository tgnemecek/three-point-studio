import React from "react";
import ICON_LIBRARY from "./iconLibrary";
import Theme from "../Theme";

export type IconName = keyof typeof ICON_LIBRARY;

type IconProps = {
  icon: IconName;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ icon, color = Theme.dark.main }) => {
  return ICON_LIBRARY[icon]({ color });
};

export default Icon;
