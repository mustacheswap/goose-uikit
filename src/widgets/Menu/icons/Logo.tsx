import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <h1
      style={{
        fontFamily: "mustache",
        textTransform: "uppercase",
        fontSize: "14pt",
      }}
    >
      Mustacheswap
    </h1>
  );
};

export default Logo;
