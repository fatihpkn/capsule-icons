import * as React from "react";
import { SVGProps, memo } from "react";

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M.686.5h20v20h-20z" />
      <path
        d="M10.686 5.5a8.142 8.142 0 0 1 7.35 4.583 8.142 8.142 0 0 1-7.35 4.584 8.142 8.142 0 0 1-7.35-4.584 8.142 8.142 0 0 1 7.35-4.583Zm0-1.667c-4.167 0-7.725 2.592-9.167 6.25 1.442 3.659 5 6.25 9.167 6.25s7.725-2.591 9.167-6.25c-1.442-3.658-5-6.25-9.167-6.25Zm0 4.167a2.084 2.084 0 1 1-.002 4.168A2.084 2.084 0 0 1 10.686 8Zm0-1.667a3.756 3.756 0 0 0-3.75 3.75 3.756 3.756 0 0 0 3.75 3.75 3.756 3.756 0 0 0 3.75-3.75 3.756 3.756 0 0 0-3.75-3.75Z"
        fill="#53605E"
      />
    </g>
  </svg>
);

const Memo = memo(SvgEye);
export default Memo;
