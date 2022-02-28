import * as React from "react";
import { SVGProps, memo } from "react";

const SvgAccessTime = (props: SVGProps<SVGSVGElement>) => (
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
        d="M8.325 0C3.725 0 0 3.733 0 8.333s3.725 8.334 8.325 8.334c4.608 0 8.342-3.734 8.342-8.334S12.933 0 8.325 0Zm.008 15a6.665 6.665 0 0 1-6.666-6.667 6.665 6.665 0 0 1 6.666-6.666A6.665 6.665 0 0 1 15 8.333 6.665 6.665 0 0 1 8.333 15ZM8.75 4.167H7.5v5l4.375 2.625.625-1.025-3.75-2.225V4.167Z"
        id="access-time_svg__a"
      />
    </defs>
    <g transform="translate(.667 .667)" fill="none" fillRule="evenodd">
      <mask id="access-time_svg__b" fill="#fff">
        <use xlinkHref="#access-time_svg__a" />
      </mask>
      <g mask="url(#access-time_svg__b)" fill="#53605E">
        <path d="M-1.667-1.667h20v20h-20z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgAccessTime);
export default Memo;
