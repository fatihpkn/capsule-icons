import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBusTicket = (props: SVGProps<SVGSVGElement>) => (
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
        d="M3.333 13.333c0 .734.325 1.392.834 1.85v1.484c0 .458.375.833.833.833h.833a.836.836 0 0 0 .834-.833v-.834h6.666v.834c0 .458.375.833.834.833H15a.836.836 0 0 0 .833-.833v-1.484a2.488 2.488 0 0 0 .834-1.85V5c0-2.917-2.984-3.333-6.667-3.333S3.333 2.083 3.333 5v8.333zm2.917.834c-.692 0-1.25-.559-1.25-1.25 0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25c0 .691-.558 1.25-1.25 1.25zm7.5 0c-.692 0-1.25-.559-1.25-1.25 0-.692.558-1.25 1.25-1.25s1.25.558 1.25 1.25c0 .691-.558 1.25-1.25 1.25zm1.25-5H5V5h10v4.167z"
        id="bus-ticket_svg__a"
      />
    </defs>
    <g transform="translate(-3 -1)" fill="none" fillRule="evenodd">
      <mask id="bus-ticket_svg__b" fill="#fff">
        <use xlinkHref="#bus-ticket_svg__a" />
      </mask>
      <g mask="url(#bus-ticket_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgBusTicket);
export default Memo;
