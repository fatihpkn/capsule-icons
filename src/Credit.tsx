import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCredit = (props: SVGProps<SVGSVGElement>) => (
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
        d="M3.333 8.333v5.834h2.5V8.333h-2.5zm5 0v5.834h2.5V8.333h-2.5zm-6.666 10H17.5v-2.5H1.667v2.5zm11.666-10v5.834h2.5V8.333h-2.5zm-3.75-7.5L1.667 5v1.667H17.5V5L9.583.833z"
        id="credit_svg__a"
      />
    </defs>
    <g transform="translate(-1)" fill="none" fillRule="evenodd">
      <mask id="credit_svg__b" fill="#fff">
        <use xlinkHref="#credit_svg__a" />
      </mask>
      <g mask="url(#credit_svg__b)" fill="#727E7C">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCredit);
export default Memo;
