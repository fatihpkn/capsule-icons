import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPlace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const Memo = memo(SvgPlace);
export default Memo;
