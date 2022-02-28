import * as React from "react";
import { SVGProps, memo } from "react";

const SvgInternet = (props: SVGProps<SVGSVGElement>) => (
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
        d="M.833 7.5 2.5 9.167c4.142-4.142 10.858-4.142 15 0L19.167 7.5C14.108 2.442 5.9 2.442.833 7.5zM7.5 14.167l2.5 2.5 2.5-2.5a3.53 3.53 0 0 0-5 0zm-3.333-3.334L5.833 12.5c2.3-2.3 6.034-2.3 8.334 0l1.666-1.667c-3.216-3.216-8.441-3.216-11.666 0z"
        id="internet_svg__a"
      />
    </defs>
    <g transform="translate(0 -3)" fill="none" fillRule="evenodd">
      <mask id="internet_svg__b" fill="#fff">
        <use xlinkHref="#internet_svg__a" />
      </mask>
      <g mask="url(#internet_svg__b)" fill="#727E7C">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgInternet);
export default Memo;
