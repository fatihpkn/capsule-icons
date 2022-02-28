import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowBackIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
  </svg>
);

const Memo = memo(SvgArrowBackIos);
export default Memo;
