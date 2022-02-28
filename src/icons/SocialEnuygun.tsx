import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSocialEnuygun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <g transform="translate(0 .498)" fillRule="evenodd">
      <circle cx={17} cy={17} r={17} fill="none" />
      <path d="M27 22.467V12h-3.596v5.494L19.986 12h-3.643v10.467h3.596l.002-5.493 3.43 5.493zM14.884 14.762V12.01H7v10.467h7.884v-2.753h-4.088v-1.188h3.108v-2.613h-3.108v-1.16z" />
    </g>
  </svg>
);

const Memo = memo(SvgSocialEnuygun);
export default Memo;
