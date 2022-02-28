import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowForwardIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
  </svg>
);

const Memo = memo(SvgArrowForwardIos);
export default Memo;
