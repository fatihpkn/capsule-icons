import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 51"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g transform="translate(0 .188)" fill="none" fillRule="evenodd">
      <circle fill="#E5F6ED" cx={25} cy={25} r={25} />
      <path d="M13 13h24v24H13z" />
      <path
        d="M22 25c1.93 0 3.5-1.57 3.5-3.5S23.93 18 22 18s-3.5 1.57-3.5 3.5S20.07 25 22 25Zm0-5c.83 0 1.5.67 1.5 1.5S22.83 23 22 23s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Zm.05 10h-4.28c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V32h7v-1.5c0-.17.02-.34.05-.5Zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V32h11v-1.5c0-1.99-3.66-3-5.5-3Zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18a2.5 2.5 0 0 0-5 0c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32.44 0 .85-.12 1.21-.32Z"
        fill="#2DC44D"
      />
    </g>
  </svg>
);

const Memo = memo(SvgPublic);
export default Memo;
