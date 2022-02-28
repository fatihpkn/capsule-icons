import * as React from "react";
import { SVGProps, memo } from "react";

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        d="M9.167 14.167c0 .458.375.833.833.833a.836.836 0 0 0 .833-.833.836.836 0 0 0-.833-.834.836.836 0 0 0-.833.834Zm0-11.667v3.333h1.666v-1.6c2.825.409 5 2.825 5 5.767A5.83 5.83 0 0 1 10 15.833 5.83 5.83 0 0 1 4.167 10c0-1.4.491-2.683 1.316-3.683L10 10.833l1.175-1.175-5.667-5.666v.016A7.46 7.46 0 0 0 2.5 10c0 4.142 3.35 7.5 7.5 7.5a7.5 7.5 0 0 0 0-15h-.833ZM15 10a.836.836 0 0 0-.833-.833.836.836 0 0 0-.834.833c0 .458.375.833.834.833A.836.836 0 0 0 15 10ZM5 10c0 .458.375.833.833.833A.836.836 0 0 0 6.667 10a.836.836 0 0 0-.834-.833A.836.836 0 0 0 5 10Z"
        fill="#53605E"
      />
    </g>
  </svg>
);

const Memo = memo(SvgTimer);
export default Memo;
