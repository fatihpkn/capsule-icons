import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSocialYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M22.724 11.77a2.012 2.012 0 0 0-1.73-1.551C19.01 10 17.002 9.999 15.003 10c-2-.001-4.008 0-5.992.219a2.011 2.011 0 0 0-1.73 1.55C7.004 12.965 7 14.27 7 15.5s0 2.535.279 3.73a2.01 2.01 0 0 0 1.729 1.551c1.984.219 3.992.22 5.991.219 2 .001 4.008 0 5.992-.219a2.012 2.012 0 0 0 1.73-1.55c.278-1.196.279-2.5.279-3.73 0-1.232.002-2.536-.276-3.732zM13 18v-5l5 2.508L13 18z" />
  </svg>
);

const Memo = memo(SvgSocialYoutube);
export default Memo;
