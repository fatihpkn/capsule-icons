import * as React from "react";
import { SVGProps, memo } from "react";

const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
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
        d="M7.4 2.107 5.493.2C2.293 2.64.187 6.4 0 10.667h2.667A11.26 11.26 0 0 1 7.4 2.107zm16.52 8.56h2.667C26.387 6.4 24.28 2.64 21.093.2L19.2 2.107a11.327 11.327 0 0 1 4.72 8.56zm-2.627.666c0-4.093-2.186-7.52-6-8.426V2c0-1.107-.893-2-2-2-1.106 0-2 .893-2 2v.907c-3.826.906-6 4.32-6 8.426V18l-2.666 2.667V22H23.96v-1.333L21.293 18v-6.667zm-8 14.667c.187 0 .36-.013.534-.053a2.705 2.705 0 0 0 1.92-1.574c.133-.32.2-.666.2-1.04h-5.334A2.686 2.686 0 0 0 13.293 26z"
        id="notification_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <rect fill="#E5F3FF" width={46} height={46} rx={12} />
      <g transform="translate(9.707 10.333)">
        <mask id="notification_svg__b" fill="#fff">
          <use xlinkHref="#notification_svg__a" />
        </mask>
        <g mask="url(#notification_svg__b)">
          <path fill="#0087FF" d="M-2.707-3.333h32v32h-32z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgNotification);
export default Memo;
