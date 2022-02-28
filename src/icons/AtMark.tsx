import * as React from "react";
import { SVGProps, memo } from "react";

const SvgAtMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 34 34"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M16.667 0C7.467 0 0 7.467 0 16.667c0 9.2 7.467 16.666 16.667 16.666H25V30h-8.333C9.433 30 3.333 23.9 3.333 16.667c0-7.234 6.1-13.334 13.334-13.334C23.9 3.333 30 9.433 30 16.667v2.383c0 1.317-1.183 2.617-2.5 2.617s-2.5-1.3-2.5-2.617v-2.383c0-4.6-3.733-8.334-8.333-8.334a8.336 8.336 0 0 0-8.334 8.334c0 4.6 3.734 8.333 8.334 8.333 2.3 0 4.4-.933 5.9-2.45C23.65 24.033 25.517 25 27.5 25c3.283 0 5.833-2.667 5.833-5.95v-2.383C33.333 7.467 25.867 0 16.667 0Zm0 21.667c-2.767 0-5-2.234-5-5 0-2.767 2.233-5 5-5 2.766 0 5 2.233 5 5 0 2.766-2.234 5-5 5Z"
        id="at-mark_svg__a"
      />
    </defs>
    <g transform="translate(.333 .333)" fill="none" fillRule="evenodd">
      <mask id="at-mark_svg__b" fill="#fff">
        <use xlinkHref="#at-mark_svg__a" />
      </mask>
      <g mask="url(#at-mark_svg__b)" fill="#FFF">
        <path d="M-3.333-3.333h40v40h-40z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgAtMark);
export default Memo;
