import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
);

const Memo = memo(SvgArrowUp);
export default Memo;
