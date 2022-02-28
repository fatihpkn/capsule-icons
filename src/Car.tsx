import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCar = (props: SVGProps<SVGSVGElement>) => (
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
        d="M15.767 5.008a1.245 1.245 0 0 0-1.184-.841H5.417c-.55 0-1.009.35-1.184.841L2.5 10v6.667c0 .458.375.833.833.833h.834A.836.836 0 0 0 5 16.667v-.834h10v.834c0 .458.375.833.833.833h.834a.836.836 0 0 0 .833-.833V10l-1.733-4.992zm-10.35 8.325c-.692 0-1.25-.558-1.25-1.25a1.25 1.25 0 1 1 1.25 1.25zm9.166 0a1.25 1.25 0 1 1 1.25-1.25c0 .692-.558 1.25-1.25 1.25zM4.167 9.167l1.25-3.75h9.166l1.25 3.75H4.167z"
        id="car_svg__a"
      />
    </defs>
    <g transform="translate(-2 -4)" fill="none" fillRule="evenodd">
      <mask id="car_svg__b" fill="#fff">
        <use xlinkHref="#car_svg__a" />
      </mask>
      <g mask="url(#car_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCar);
export default Memo;
