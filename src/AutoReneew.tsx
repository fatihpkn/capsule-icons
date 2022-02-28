import * as React from "react";
import { SVGProps, memo } from "react";

const SvgAutoReneew = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M8 5v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L2.7 13.8A5.87 5.87 0 0 1 2 11c0-3.31 2.69-6 6-6Zm6.76 1.74L13.3 8.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26Z"
        id="auto-reneew_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="auto-reneew_svg__b" fill="#fff">
        <use xlinkHref="#auto-reneew_svg__a" />
      </mask>
      <g mask="url(#auto-reneew_svg__b)" fill="#53605E">
        <path d="M-4-1h24v24H-4z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgAutoReneew);
export default Memo;
