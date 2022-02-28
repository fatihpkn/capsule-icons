import * as React from "react";
import { SVGProps, memo } from "react";

const SvgArrowDropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    fill="currentColor"
    {...props}
  >
    <path d="m10.5 15 7.5 7.5 7.5-7.5z" />
    <path d="M0 0h36v36H0z" fill="none" />
  </svg>
);

const Memo = memo(SvgArrowDropdown);
export default Memo;
