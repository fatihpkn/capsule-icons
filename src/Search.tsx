import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M10.417 9.167h-.659l-.233-.225a5.393 5.393 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.416 5.416 5.393 5.393 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"
        id="search_svg__a"
      />
    </defs>
    <g transform="translate(.5 .5)" fill="none" fillRule="evenodd">
      <mask id="search_svg__b" fill="#fff">
        <use xlinkHref="#search_svg__a" />
      </mask>
      <g mask="url(#search_svg__b)">
        <path fill="#53605E" d="M-2.5-2.5h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgSearch);
export default Memo;
