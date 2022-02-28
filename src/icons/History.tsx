import * as React from "react";
import { SVGProps, memo } from "react";

const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
        d="M10.833 2.5a7.5 7.5 0 0 0-7.5 7.5h-2.5l3.334 3.325L7.5 10H5a5.83 5.83 0 0 1 5.833-5.833A5.83 5.83 0 0 1 16.667 10a5.83 5.83 0 0 1-5.834 5.833 5.786 5.786 0 0 1-4.116-1.716L5.533 15.3a7.462 7.462 0 0 0 5.3 2.2 7.5 7.5 0 0 0 0-15zM10 6.667v4.166l3.542 2.1.641-1.066-2.933-1.742V6.667H10z"
        id="history_svg__a"
      />
    </defs>
    <g transform="translate(0 -2.002)" fill="none" fillRule="evenodd">
      <mask id="history_svg__b" fill="#fff">
        <use xlinkHref="#history_svg__a" />
      </mask>
      <g mask="url(#history_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgHistory);
export default Memo;
