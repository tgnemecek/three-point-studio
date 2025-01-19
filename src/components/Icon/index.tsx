import React from "react";
import ICON_LIBRARY from "./iconLibrary";

export type IconName = keyof typeof ICON_LIBRARY;

type IconProps = {
  icon: IconName;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ icon, color }) => {
  return ICON_LIBRARY[icon]({ color });
};

export default Icon;
