import * as React from "react";
import { SVGProps, memo } from "react";

const SvgThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 4"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        id="three_dots_svg__a"
      />
    </defs>
    <g transform="translate(-3.957 -10)" fill="none" fillRule="evenodd">
      <mask id="three_dots_svg__b" fill="#fff">
        <use xlinkHref="#three_dots_svg__a" />
      </mask>
      <g mask="url(#three_dots_svg__b)" fill="#53605E">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgThreeDots);
export default Memo;
