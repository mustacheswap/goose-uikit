import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 410 52" {...props}>
      <image width="410" height="52" href={isDark ? '/images/mustache/LogoTextNewDark.png' : '/images/mustache/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
