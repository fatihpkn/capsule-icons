import * as React from "react";
import { SVGProps, memo } from "react";

const SvgNavigationLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <filter
        x="-35.2%"
        y="-33%"
        width="170.5%"
        height="170.5%"
        filterUnits="objectBoundingBox"
        id="navigation_left_svg__a"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <circle id="navigation_left_svg__b" cx={22} cy={22} r={22} />
      <path
        id="navigation_left_svg__c"
        d="M12.683 17.65 5.05 10l7.633-7.65L10.333 0l-10 10 10 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 9)">
        <use
          fill="#000"
          filter="url(#navigation_left_svg__a)"
          xlinkHref="#navigation_left_svg__b"
        />
        <use fill="#FFF" xlinkHref="#navigation_left_svg__b" />
      </g>
      <g transform="translate(25 21)">
        <mask id="navigation_left_svg__d" fill="#fff">
          <use xlinkHref="#navigation_left_svg__c" />
        </mask>
        <g mask="url(#navigation_left_svg__d)" fill="#53605E">
          <path d="M-13-10h40v40h-40z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgNavigationLeft);
export default Memo;
