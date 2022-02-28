import * as React from "react";
import { SVGProps, memo } from "react";

const SvgDepositCar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M15 12.5v.833C15 14.25 14.25 15 13.333 15H1.667C.742 15 0 14.25 0 13.333V1.667C0 .75.742 0 1.667 0h11.666C14.25 0 15 .75 15 1.667V2.5H7.5c-.925 0-1.667.75-1.667 1.667v6.666c0 .917.742 1.667 1.667 1.667H15Zm-7.5-1.667h8.333V4.167H7.5v6.666Zm3.333-2.083c-.691 0-1.25-.558-1.25-1.25s.559-1.25 1.25-1.25c.692 0 1.25.558 1.25 1.25s-.558 1.25-1.25 1.25Z"
        id="deposit-car_svg__a"
      />
    </defs>
    <g transform="translate(.5 .5)" fill="none" fillRule="evenodd">
      <mask id="deposit-car_svg__b" fill="#fff">
        <use xlinkHref="#deposit-car_svg__a" />
      </mask>
      <g mask="url(#deposit-car_svg__b)" fill="#53605E">
        <path d="M-2.5-2.5h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgDepositCar);
export default Memo;
