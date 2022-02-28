import * as React from "react";
import { SVGProps, memo } from "react";

const SvgTicketCancel = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17.5 13.333v-1.666L10.833 7.5V2.917c0-.692-.558-1.25-1.25-1.25-.691 0-1.25.558-1.25 1.25v2.591l7.209 7.209 1.958.616zM15.608 17.5l1.175-1.175L3.675 3.217 2.5 4.392 6.658 8.55l-4.991 3.117v1.666l6.666-2.083v4.583l-1.666 1.25v1.25l2.916-.833 2.917.833v-1.25l-1.667-1.25v-3.108l4.775 4.775z"
        id="ticket-cancel_svg__a"
      />
    </defs>
    <g transform="translate(-1 -.976)" fill="none" fillRule="evenodd">
      <mask id="ticket-cancel_svg__b" fill="#fff">
        <use xlinkHref="#ticket-cancel_svg__a" />
      </mask>
      <g mask="url(#ticket-cancel_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgTicketCancel);
export default Memo;
