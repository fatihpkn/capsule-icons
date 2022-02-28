import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSwap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M5.842 7.5H0v1.667h5.842v2.5l3.325-3.334L5.842 5v2.5Zm4.983-.833v-2.5h5.842V2.5h-5.842V0L7.5 3.333l3.325 3.334Z"
        id="swap_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#D7DDDB" fill="#F8FAF9" cx={14} cy={14} r={13.5} />
      <g transform="translate(5.667 8.167)">
        <mask id="swap_svg__b" fill="#fff">
          <use xlinkHref="#swap_svg__a" />
        </mask>
        <g mask="url(#swap_svg__b)">
          <path fill="#53605E" d="M-1.667-4.167h20v20h-20z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgSwap);
export default Memo;
