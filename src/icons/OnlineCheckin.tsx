import * as React from "react";
import { SVGProps, memo } from "react";

const SvgOnlineCheckin = (props: SVGProps<SVGSVGElement>) => (
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
        id="online-checkin_svg__a"
        d="M8.55 21.858h15.833v1.667H8.55v-1.667Zm16.308-7.8a1.247 1.247 0 0 0-1.533-.883L18.9 14.358 13.15 9l-1.608.425 3.45 5.975-4.142 1.108-1.642-1.283L8 15.55l1.517 2.633.641 1.109L23.967 15.6a1.268 1.268 0 0 0 .891-1.542Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={16.5} cy={16.5} r={16.5} fill="#EFEFEF" />
      <use
        fill="#939D9A"
        fillRule="nonzero"
        xlinkHref="#online-checkin_svg__a"
      />
    </g>
  </svg>
);

const Memo = memo(SvgOnlineCheckin);
export default Memo;
