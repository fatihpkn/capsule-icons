import * as React from "react";
import { SVGProps, memo } from "react";

const SvgMyTicket = (props: SVGProps<SVGSVGElement>) => (
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
        d="M18.333 8.333V5c0-.925-.75-1.667-1.666-1.667H3.333A1.66 1.66 0 0 0 1.675 5v3.333c.917 0 1.658.75 1.658 1.667s-.741 1.667-1.666 1.667V15c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667v-3.333c-.916 0-1.666-.75-1.666-1.667s.75-1.667 1.666-1.667zm-7.5 6.25H9.167v-1.666h1.666v1.666zm0-3.75H9.167V9.167h1.666v1.666zm0-3.75H9.167V5.417h1.666v1.666z"
        id="my-ticket_svg__a"
      />
    </defs>
    <g transform="translate(-1 -3.006)" fill="none" fillRule="evenodd">
      <mask id="my-ticket_svg__b" fill="#fff">
        <use xlinkHref="#my-ticket_svg__a" />
      </mask>
      <g mask="url(#my-ticket_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgMyTicket);
export default Memo;
