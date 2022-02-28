import * as React from "react";
import { SVGProps, memo } from "react";

const SvgExpandLess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </svg>
);

const Memo = memo(SvgExpandLess);
export default Memo;
