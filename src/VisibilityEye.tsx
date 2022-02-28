import * as React from "react";
import { SVGProps, memo } from "react";

const SvgVisibilityEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-1-2h24v24H-1V-2zm0 0h24v24H-1V-2zm0 0h24v24H-1V-2zm0 0h24v24H-1V-2z" />
      <path
        d="M11 4.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C20.27 5.11 16 2 11 2c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM1.71 1.16a.996.996 0 0 0 0 1.41l1.97 1.97A11.892 11.892 0 0 0 0 9.5C1.73 13.89 6 17 11 17c1.52 0 2.97-.3 4.31-.82l2.72 2.72a.996.996 0 1 0 1.41-1.41L3.13 1.16c-.39-.39-1.03-.39-1.42 0zM11 14.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L13.14 14c-.65.32-1.37.5-2.14.5zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64z"
        fill="#53605E"
      />
    </g>
  </svg>
);

const Memo = memo(SvgVisibilityEye);
export default Memo;
