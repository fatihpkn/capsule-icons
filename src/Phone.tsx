import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
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
        d="M12.917.833H6.25c-1.15 0-2.083.934-2.083 2.084v14.166c0 1.15.933 2.084 2.083 2.084h6.667c1.15 0 2.083-.934 2.083-2.084V2.917c0-1.15-.933-2.084-2.083-2.084zm-3.334 17.5a1.25 1.25 0 1 1 1.25-1.25c0 .692-.558 1.25-1.25 1.25zM13.333 15h-7.5V3.333h7.5V15z"
        id="phone_svg__a"
      />
    </defs>
    <g transform="translate(-4)" fill="none" fillRule="evenodd">
      <mask id="phone_svg__b" fill="#fff">
        <use xlinkHref="#phone_svg__a" />
      </mask>
      <g mask="url(#phone_svg__b)" fill="#727E7C">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgPhone);
export default Memo;
