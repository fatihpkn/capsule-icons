import * as React from "react";
import { SVGProps, memo } from "react";

const SvgHotels = (props: SVGProps<SVGSVGElement>) => (
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
        d="M5.833 10.833c1.384 0 2.5-1.116 2.5-2.5 0-1.383-1.116-2.5-2.5-2.5a2.497 2.497 0 0 0-2.5 2.5c0 1.384 1.117 2.5 2.5 2.5zm10-5H9.167v5.834H2.5v-7.5H.833v12.5H2.5v-2.5h15v2.5h1.667v-7.5a3.332 3.332 0 0 0-3.334-3.334z"
        id="hotels_svg__a"
      />
    </defs>
    <g transform="translate(0 -4.008)" fill="none" fillRule="evenodd">
      <mask id="hotels_svg__b" fill="#fff">
        <use xlinkHref="#hotels_svg__a" />
      </mask>
      <g mask="url(#hotels_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgHotels);
export default Memo;
