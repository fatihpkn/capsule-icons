import * as React from "react";
import { SVGProps, memo } from "react";

const SvgReservations = (props: SVGProps<SVGSVGElement>) => (
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
        d="M2.5 10.833h1.667V9.167H2.5v1.666zm0 3.334h1.667V12.5H2.5v1.667zm0-6.667h1.667V5.833H2.5V7.5zm3.333 3.333H17.5V9.167H5.833v1.666zm0 3.334H17.5V12.5H5.833v1.667zm0-8.334V7.5H17.5V5.833H5.833z"
        id="reservations_svg__a"
      />
    </defs>
    <g transform="translate(-2 -5.004)" fill="none" fillRule="evenodd">
      <mask id="reservations_svg__b" fill="#fff">
        <use xlinkHref="#reservations_svg__a" />
      </mask>
      <g mask="url(#reservations_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgReservations);
export default Memo;
