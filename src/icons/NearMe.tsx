import * as React from "react";
import { SVGProps, memo } from "react";

const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
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
      <filter
        x="-10.2%"
        y="-5.4%"
        width="120.3%"
        height="112.2%"
        filterUnits="objectBoundingBox"
        id="near-me_svg__a"
      >
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy={5} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={11}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <rect id="near-me_svg__b" x={0} y={0} width={408} height={680} rx={4} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#939D9A" d="M-1874-1532h5053V920h-5053z" />
      <g transform="translate(-15 -80)">
        <use
          fill="#000"
          filter="url(#near-me_svg__a)"
          xlinkHref="#near-me_svg__b"
        />
        <use fill="#FFF" xlinkHref="#near-me_svg__b" />
      </g>
      <path d="M-15-20h408v60H-15z" />
      <path d="M0 0h20v20H0z" />
      <path
        d="m14.392 5.608-3.534 8.442-1.1-2.85-.266-.692-.684-.266L5.95 9.133l8.442-3.525ZM17.5 2.5l-15 6.275v.817L8.2 11.8l2.2 5.7h.817l6.283-15Z"
        fill="#53605E"
      />
    </g>
  </svg>
);

const Memo = memo(SvgNearMe);
export default Memo;
