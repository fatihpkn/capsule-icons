import * as React from "react";
import { SVGProps, memo } from "react";

const SvgVerifiedUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M9 0 0 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4L9 0zM7 16l-4-4 1.41-1.41L7 13.17l6.59-6.59L15 8l-8 8z"
        id="verified-user_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="verified-user_svg__b" fill="#fff">
        <use xlinkHref="#verified-user_svg__a" />
      </mask>
      <g mask="url(#verified-user_svg__b)">
        <path fill="currentColor" d="M-3-1h24v24H-3z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgVerifiedUser);
export default Memo;
