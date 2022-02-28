import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCarCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="m4.129 8.75 1.216 1.215L5 11h1.379l7.999 8H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l1.129-3.25ZM17.5 5c.66 0 1.22.42 1.42 1.01L21 12v6.55l-2.75-2.75c.41-.236.696-.66.743-1.155L19 14.5c0-.83-.67-1.5-1.5-1.5-.557 0-1.041.301-1.3.75L13.448 11H19l-1.5-4.5H8.948L7.448 5Zm-11 8c-.83 0-1.5.67-1.5 1.5S5.67 16 6.5 16 8 15.33 8 14.5 7.33 13 6.5 13Z"
        id="car-cancel_svg__a"
      />
    </defs>
    <g fill="#0087FF" fillRule="evenodd">
      <use fillRule="nonzero" xlinkHref="#car-cancel_svg__a" />
      <rect
        transform="rotate(45 12.06 13.06)"
        x={-1.439}
        y={12.061}
        width={27}
        height={2}
        rx={1}
      />
    </g>
  </svg>
);

const Memo = memo(SvgCarCancel);
export default Memo;
