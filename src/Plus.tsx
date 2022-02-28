import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const Memo = memo(SvgPlus);
export default Memo;
