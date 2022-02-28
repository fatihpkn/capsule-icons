import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M8.333 0A8.326 8.326 0 0 0 0 8.333a8.326 8.326 0 0 0 8.333 8.334 8.326 8.326 0 0 0 8.334-8.334A8.326 8.326 0 0 0 8.333 0ZM12.5 11.325 11.325 12.5 8.333 9.508 5.342 12.5l-1.175-1.175 2.991-2.992-2.991-2.991 1.175-1.175 2.991 2.991 2.992-2.991L12.5 5.342 9.508 8.333l2.992 2.992Z"
        id="cancel_svg__a"
      />
    </defs>
    <g transform="translate(.667 .667)" fill="none" fillRule="evenodd">
      <mask id="cancel_svg__b" fill="#fff">
        <use xlinkHref="#cancel_svg__a" />
      </mask>
      <g mask="url(#cancel_svg__b)" fill="#1B2F6F">
        <path d="M-1.667-1.667h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCancel);
export default Memo;
