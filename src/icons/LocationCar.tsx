import * as React from "react";
import { SVGProps, memo } from "react";

const SvgLocationCar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 18"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M5.833 0A5.83 5.83 0 0 0 0 5.833c0 4.375 5.833 10.834 5.833 10.834s5.834-6.459 5.834-10.834A5.83 5.83 0 0 0 5.833 0Zm0 7.917a2.084 2.084 0 1 1 .002-4.169 2.084 2.084 0 0 1-.002 4.169Z"
        id="location-car_svg__a"
      />
    </defs>
    <g transform="translate(.167 .667)" fill="none" fillRule="evenodd">
      <mask id="location-car_svg__b" fill="#fff">
        <use xlinkHref="#location-car_svg__a" />
      </mask>
      <g mask="url(#location-car_svg__b)" fill="#1B2F6F">
        <path d="M-4.167-1.667h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgLocationCar);
export default Memo;
