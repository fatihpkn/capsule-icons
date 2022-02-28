import * as React from "react";
import { SVGProps, memo } from "react";

const SvgKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M7.41 7.84 12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    <path d="M0-.75h24v24H0z" fill="none" />
  </svg>
);

const Memo = memo(SvgKeyboardArrowDown);
export default Memo;
