import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="arrow-circle-down_svg__a"
        d="m8.748 3.977.015.015 3.933 3.99a.5.5 0 0 1 0 .702l-3.943 4a.5.5 0 0 1-.707.006l-.06-.06c-.05-.053-.137-.14-.256-.261a.5.5 0 0 1-.001-.702l2.29-2.334a.167.167 0 0 0-.118-.284H3a.5.5 0 0 1-.5-.5v-.432a.5.5 0 0 1 .5-.5h6.9a.167.167 0 0 0 .12-.283L7.729 5a.5.5 0 0 1 0-.702l.312-.316a.5.5 0 0 1 .707-.005z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={12} cy={12} r={11.5} stroke="#FFF" />
      <g transform="rotate(90 8 12)">
        <mask id="arrow-circle-down_svg__b" fill="#fff">
          <use xlinkHref="#arrow-circle-down_svg__a" />
        </mask>
        <use
          fill="#FFF"
          fillRule="nonzero"
          xlinkHref="#arrow-circle-down_svg__a"
        />
        <path
          fill="#FFF"
          d="M0 0h16v16H0z"
          mask="url(#arrow-circle-down_svg__b)"
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgArrowCircleDown);
export default Memo;
