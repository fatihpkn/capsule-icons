import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSignIn = (props: SVGProps<SVGSVGElement>) => (
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
        d="M10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.333 14.6 18.333 10 14.6 1.667 10 1.667zm0 2.5c1.383 0 2.5 1.116 2.5 2.5 0 1.383-1.117 2.5-2.5 2.5a2.497 2.497 0 0 1-2.5-2.5c0-1.384 1.117-2.5 2.5-2.5zM10 16a6 6 0 0 1-5-2.683c.025-1.659 3.333-2.567 5-2.567 1.658 0 4.975.908 5 2.567A6 6 0 0 1 10 16z"
        id="sign-in_svg__a"
      />
    </defs>
    <g transform="translate(-1 -1)" fill="none" fillRule="evenodd">
      <mask id="sign-in_svg__b" fill="#fff">
        <use xlinkHref="#sign-in_svg__a" />
      </mask>
      <g mask="url(#sign-in_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgSignIn);
export default Memo;
