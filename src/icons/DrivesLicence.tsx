import * as React from "react";
import { SVGProps, memo } from "react";

const SvgDrivesLicence = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17.857 3.333H2.143c-.72 0-1.31.429-1.31.953v11.428c0 .524.59.953 1.31.953h15.714c.72 0 1.31-.429 1.31-.953V4.286c0-.524-.59-.953-1.31-.953ZM6.667 6.458c1.033 0 1.875.842 1.875 1.875a1.878 1.878 0 0 1-1.875 1.875 1.878 1.878 0 0 1-1.875-1.875c0-1.033.841-1.875 1.875-1.875Zm0 5.209c1.25 0 3.75.625 3.75 1.875v.625h-7.5v-.625c0-1.25 2.5-1.875 3.75-1.875ZM16.852 10c.356 0 .648.375.648.833 0 .459-.292.834-.648.834h-4.537c-.357 0-.648-.375-.648-.834 0-.458.291-.833.648-.833h4.537Zm0-3.333c.356 0 .648.375.648.833 0 .458-.292.833-.648.833h-4.537c-.357 0-.648-.375-.648-.833 0-.458.291-.833.648-.833h4.537Z"
        fill="#1B2F6F"
      />
    </g>
  </svg>
);

const Memo = memo(SvgDrivesLicence);
export default Memo;
