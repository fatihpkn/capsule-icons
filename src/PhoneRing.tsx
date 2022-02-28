import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPhoneRing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M17 12.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 5.5 1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1c0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM16 9h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"
        id="phone-ring_svg__a"
      />
    </defs>
    <g transform="translate(3 3)" fill="none" fillRule="evenodd">
      <mask id="phone-ring_svg__b" fill="#fff">
        <use xlinkHref="#phone-ring_svg__a" />
      </mask>
      <g mask="url(#phone-ring_svg__b)" fill="#53605E">
        <path d="M-3-3h24v24H-3z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgPhoneRing);
export default Memo;
