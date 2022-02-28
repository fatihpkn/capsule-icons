import * as React from "react";
import { SVGProps, memo } from "react";

const SvgAirline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fill="#9B9B9B"
      d="m2 20 9.65-13.408c.32-.444 1.018-.897 1.56-1.01l7.3-1.538c1.075-.227 1.712.447 1.418 1.515L17.961 20H2Z"
      fillRule="evenodd"
    />
  </svg>
);

const Memo = memo(SvgAirline);
export default Memo;
