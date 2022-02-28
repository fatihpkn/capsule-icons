import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSocialTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M23.927 11.008a6.003 6.003 0 0 1-1.926.744 3.006 3.006 0 0 0-2.212-.969c-1.673 0-3.03 1.375-3.03 3.07 0 .24.026.474.078.699a8.565 8.565 0 0 1-6.248-3.208c-.26.455-.41.983-.41 1.544 0 1.065.535 2.005 1.349 2.555a2.999 2.999 0 0 1-1.374-.383v.038a3.06 3.06 0 0 0 2.433 3.01 2.989 2.989 0 0 1-1.37.054 3.036 3.036 0 0 0 2.831 2.13 6.03 6.03 0 0 1-4.487 1.273 8.512 8.512 0 0 0 4.646 1.378c5.576 0 8.624-4.676 8.624-8.733 0-.134-.003-.267-.008-.398a6.18 6.18 0 0 0 1.511-1.59 5.993 5.993 0 0 1-1.74.484 3.07 3.07 0 0 0 1.333-1.698" />
  </svg>
);

const Memo = memo(SvgSocialTwitter);
export default Memo;
