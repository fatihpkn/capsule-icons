import * as React from "react";
import { SVGProps, memo } from "react";

const SvgDeposit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path fill="#727E7C" d="M.833 3.333h18.333v13.333H.833z" />
      <path
        d="M2.6 7.494c.741-.057 1.314-.285 1.719-.686.405-.4.651-.981.738-1.743h9.865c.257.778.575 1.36.954 1.743.378.385.858.613 1.438.686v4.811c-.545.01-1.024.238-1.438.682-.415.445-.733 1.072-.954 1.884H5.057c-.065-.81-.312-1.439-.738-1.884-.426-.445-1-.672-1.719-.682v-4.81z"
        fill="#FFF"
      />
      <path
        d="M9.806 6.021c-1.634.006-3.193 1.661-3.193 3.972 0 2.312 1.545 3.935 3.238 3.93 1.693-.006 3.429-1.622 3.429-3.951 0-2.329-1.84-3.956-3.474-3.95z"
        fill="#727E7C"
      />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M11.883 12.5v-1.142h-1.317V6.833h-.84l-1.85.642v1.216l1.332-.375v3.042H7.791V12.5z"
      />
    </g>
  </svg>
);

const Memo = memo(SvgDeposit);
export default Memo;
