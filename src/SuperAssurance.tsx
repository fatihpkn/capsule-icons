import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSuperAssurance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 30"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h28.8v28.8H0z" />
      <path
        d="M23.733 1.2H5.067C3.6 1.2 2.413 2.378 2.413 3.818L2.4 20.745c0 .903.467 1.702 1.173 2.173L14.4 30l10.813-7.082a2.613 2.613 0 0 0 1.174-2.173L26.4 3.818c0-1.44-1.2-2.618-2.667-2.618Z"
        fill="#2DC44D"
      />
      <path
        fill="#FFF"
        d="m10.75 19.2 3.907-2.507 3.907 2.507-1.187-4.48 3.587-2.933-4.627-.28-1.68-4.307-1.693 4.293-4.627.28 3.587 2.934z"
      />
    </g>
  </svg>
);

const Memo = memo(SvgSuperAssurance);
export default Memo;
