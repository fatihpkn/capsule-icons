import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFlightTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M17.5 13.333v-1.666L10.833 7.5V2.917c0-.692-.558-1.25-1.25-1.25-.691 0-1.25.558-1.25 1.25V7.5l-6.666 4.167v1.666l6.666-2.083v4.583l-1.666 1.25v1.25l2.916-.833 2.917.833v-1.25l-1.667-1.25V11.25l6.667 2.083z"
        id="flight-ticket_svg__a"
      />
    </defs>
    <g transform="rotate(90 10 9)" fill="none" fillRule="evenodd">
      <mask id="flight-ticket_svg__b" fill="#fff">
        <use xlinkHref="#flight-ticket_svg__a" />
      </mask>
      <g mask="url(#flight-ticket_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgFlightTicket);
export default Memo;
