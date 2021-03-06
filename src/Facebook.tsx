import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fillRule="nonzero" fill="none">
      <path
        d="M32 16.598C32 7.708 24.837.5 16 .5S0 7.707 0 16.598C0 24.633 5.85 31.292 13.5 32.5V21.251H9.437v-4.653H13.5V13.05c0-4.034 2.389-6.263 6.043-6.263 1.75 0 3.582.315 3.582.315v3.961h-2.017c-1.988 0-2.608 1.241-2.608 2.515v3.019h4.438l-.71 4.653H18.5V32.5C26.15 31.292 32 24.633 32 16.598z"
        fill="#1877F2"
      />
      <path
        d="m22.083 21.015.725-4.67H18.27v-3.03c0-1.277.635-2.524 2.667-2.524H23V6.816S21.127 6.5 19.337 6.5c-3.738 0-6.182 2.237-6.182 6.285v3.56H9v4.67h4.155v11.289c1.695.261 3.42.261 5.114 0v-11.29h3.814z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const Memo = memo(SvgFacebook);
export default Memo;
