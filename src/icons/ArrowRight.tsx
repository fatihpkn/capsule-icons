import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    fill="currentColor"
    {...props}
  >
    <path d="m10 17 5-5-5-5v10z" />
    <path d="M0 24V0h24v24H0z" fill="none" />
  </svg>
);

const Memo = memo(SvgArrowRight);
export default Memo;
