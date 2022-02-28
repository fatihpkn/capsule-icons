import * as React from "react";
import { SVGProps, memo } from "react";

const SvgGear = (props: SVGProps<SVGSVGElement>) => (
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
        d="M14.167 1.93a1.931 1.931 0 0 0-3.864 0c0 .839.54 1.548 1.288 1.814V6.44H7.73V3.744A1.932 1.932 0 0 0 9.015 1.93a1.932 1.932 0 0 0-3.863 0c0 .839.536 1.548 1.287 1.814V6.44H2.576V3.744A1.93 1.93 0 0 0 3.864 1.93 1.932 1.932 0 0 0 0 1.93c0 .839.54 1.548 1.288 1.814v6.675A1.935 1.935 0 0 0 0 12.237a1.931 1.931 0 0 0 3.864 0c0-.843-.54-1.548-1.288-1.815V7.727h3.863v2.692a1.93 1.93 0 0 0-1.287 1.818c0 1.063.866 1.93 1.93 1.93a1.934 1.934 0 0 0 1.933-1.93c0-.843-.54-1.548-1.284-1.815V7.727h5.151V3.744a1.927 1.927 0 0 0 1.285-1.814"
        id="gear_svg__a"
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
      <g transform="translate(3.333 3.333)">
        <mask id="gear_svg__b" fill="#fff">
          <use xlinkHref="#gear_svg__a" />
        </mask>
        <use fill="#39434E" xlinkHref="#gear_svg__a" />
        <path
          fill="#53605E"
          mask="url(#gear_svg__b)"
          d="M-2.917-2.917h20v20h-20z"
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgGear);
export default Memo;
