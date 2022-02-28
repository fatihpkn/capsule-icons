import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m14 7-5 5 5 5V7z" />
    <path d="M24 0v24H0V0h24z" fill="none" />
  </svg>
);

const Memo = memo(SvgArrowLeft);
export default Memo;
