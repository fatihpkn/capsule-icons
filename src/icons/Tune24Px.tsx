import * as React from "react";
import { SVGProps, memo } from "react";

const SvgTune24Px = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M2.5 14.167v1.666h5v-1.666h-5Zm8.333 3.333v-1.667H17.5v-1.666h-6.667V12.5H9.167v5h1.666Zm-5-10v1.667H2.5v1.666h3.333V12.5H7.5v-5H5.833ZM17.5 10.833V9.167H9.167v1.666H17.5Zm-5-3.333h1.667V5.833H17.5V4.167h-3.333V2.5H12.5v5Zm-10-3.333h8.333v1.658H2.5V4.167Z"
        id="tune_24px_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        strokeOpacity={0.01}
        stroke="#FFF"
        strokeWidth={0.1}
        opacity={0.2}
        d="M.05.05h19.9v19.9H.05z"
      />
      <mask id="tune_24px_svg__b" fill="#fff">
        <use xlinkHref="#tune_24px_svg__a" />
      </mask>
      <g mask="url(#tune_24px_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgTune24Px);
export default Memo;
