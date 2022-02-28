import * as React from "react";
import { SVGProps, memo } from "react";

const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M9.167 5.833a3.332 3.332 0 1 0 0 6.667 3.332 3.332 0 1 0 0-6.667Zm7.45 2.5A7.495 7.495 0 0 0 10 1.717V0H8.333v1.717a7.495 7.495 0 0 0-6.616 6.616H0V10h1.717a7.495 7.495 0 0 0 6.616 6.617v1.716H10v-1.716A7.495 7.495 0 0 0 16.617 10h1.716V8.333h-1.716ZM9.167 15a5.83 5.83 0 0 1-5.834-5.833 5.83 5.83 0 0 1 5.834-5.834A5.83 5.83 0 0 1 15 9.167 5.83 5.83 0 0 1 9.167 15Z"
        id="location_svg__a"
      />
    </defs>
    <g transform="translate(.833 .833)" fill="none" fillRule="evenodd">
      <mask id="location_svg__b" fill="#fff">
        <use xlinkHref="#location_svg__a" />
      </mask>
      <g mask="url(#location_svg__b)">
        <path fill="#53605E" d="M-.833-.833h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgLocation);
export default Memo;
