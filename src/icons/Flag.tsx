import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </svg>
);

const Memo = memo(SvgFlag);
export default Memo;
