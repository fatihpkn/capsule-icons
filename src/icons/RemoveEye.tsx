import * as React from "react";
import { SVGProps, memo } from "react";

const SvgRemoveEye = (props: SVGProps<SVGSVGElement>) => (
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
        d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        id="remove-eye_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="remove-eye_svg__b" fill="#fff">
        <use xlinkHref="#remove-eye_svg__a" />
      </mask>
      <g mask="url(#remove-eye_svg__b)">
        <path fill="#53605E" d="M-1-4.5h24v24H-1z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgRemoveEye);
export default Memo;
