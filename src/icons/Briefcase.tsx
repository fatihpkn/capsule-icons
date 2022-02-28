import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M8 13v-1H1.01L1 16c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1H8Zm10-9h-4V2l-2-2H8L6 2v2H2C.9 4 0 4.9 0 6v3c0 1.11.89 2 2 2h6V9h4v2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm-6 0H8V2h4v2Z"
        id="briefcase_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="briefcase_svg__b" fill="#fff">
        <use xlinkHref="#briefcase_svg__a" />
      </mask>
      <g mask="url(#briefcase_svg__b)" fill="#FFF">
        <path d="M-2-3h24v24H-2z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgBriefcase);
export default Memo;
