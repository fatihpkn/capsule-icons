import * as React from "react";
import { SVGProps, memo } from "react";

const SvgShortText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        strokeOpacity={0.01}
        stroke="#FFF"
        strokeWidth={0.1}
        opacity={0.2}
        d="M.05.05h19.9v19.9H.05z"
      />
      <path
        d="M3.333 7.5h13.334v1.667H3.333V7.5Zm0 3.333h8.334V12.5H3.333v-1.667Z"
        fill="#53605E"
      />
    </g>
  </svg>
);

const Memo = memo(SvgShortText);
export default Memo;
