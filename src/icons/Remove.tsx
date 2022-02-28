import * as React from "react";
import { SVGProps, memo } from "react";

const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M19 13H5v-2h14v2z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const Memo = memo(SvgRemove);
export default Memo;
