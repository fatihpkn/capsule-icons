import * as React from "react";
import { SVGProps, memo } from "react";

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M2.375 13.656v2.969h2.969L14.1 7.869 11.13 4.9l-8.755 8.756Zm14.02-8.083a.788.788 0 0 0 0-1.116l-1.852-1.852a.788.788 0 0 0-1.116 0l-1.45 1.448 2.97 2.97 1.448-1.45Z"
        id="edit_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        strokeOpacity={0.01}
        stroke="#FFF"
        strokeWidth={0.1}
        opacity={0.2}
        d="M.05.05h18.9v18.9H.05z"
      />
      <mask id="edit_svg__b" fill="#fff">
        <use xlinkHref="#edit_svg__a" />
      </mask>
      <g mask="url(#edit_svg__b)" fill="#2DC44D">
        <path d="M0 0h19v19H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgEdit);
export default Memo;
