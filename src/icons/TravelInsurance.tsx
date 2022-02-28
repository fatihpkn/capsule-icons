import * as React from "react";
import { SVGProps, memo } from "react";

const SvgTravelInsurance = (props: SVGProps<SVGSVGElement>) => (
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
        d="M10 .833 2.5 4.167v5c0 4.625 3.2 8.95 7.5 10 4.3-1.05 7.5-5.375 7.5-10v-5L10 .833zM8.333 14.167 5 10.833l1.175-1.175 2.158 2.15 5.492-5.491L15 7.5l-6.667 6.667z"
        id="travel-insurance_svg__a"
      />
    </defs>
    <g transform="translate(-2 -.488)" fill="none" fillRule="evenodd">
      <mask id="travel-insurance_svg__b" fill="#fff">
        <use xlinkHref="#travel-insurance_svg__a" />
      </mask>
      <g mask="url(#travel-insurance_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgTravelInsurance);
export default Memo;
