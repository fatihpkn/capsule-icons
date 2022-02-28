import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCancelTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 33 33"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        id="cancel-ticket_svg__a"
        d="M16.5 12.333v-1.666L9.833 6.5V1.917c0-.692-.558-1.25-1.25-1.25-.691 0-1.25.558-1.25 1.25v2.591l7.209 7.209 1.958.616ZM14.608 16.5l1.175-1.175L2.675 2.217 1.5 3.392 5.658 7.55.667 10.667v1.666l6.666-2.083v4.583l-1.666 1.25v1.25l2.916-.833 2.917.833v-1.25l-1.667-1.25v-3.108l4.775 4.775Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={16.5} cy={16.5} r={16.5} fill="#EFEFEF" />
      <use
        fill="#939D9A"
        fillRule="nonzero"
        transform="translate(8 8)"
        xlinkHref="#cancel-ticket_svg__a"
      />
    </g>
  </svg>
);

const Memo = memo(SvgCancelTicket);
export default Memo;
