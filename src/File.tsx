import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M548.3 352.8h271.5L548.3 83.6v269.2zM205.5 10h393.4l294.5 294.5v588.9c0 26.1-10 48.7-29.9 67.9-19.9 19.2-42.9 28.8-69 28.8h-589c-26.1 0-49.1-9.6-69-28.8-19.9-19.2-29.9-41.8-29.9-67.9l2.3-786.8c0-26.1 9.6-48.7 28.8-67.9C156.8 19.6 179.5 10 205.5 10z" />
  </svg>
);

const Memo = memo(SvgFile);
export default Memo;
