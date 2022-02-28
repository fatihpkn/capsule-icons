import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBgNotification = (props: SVGProps<SVGSVGElement>) => (
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
        d="M11.733 28.6a2.942 2.942 0 0 0 2.934-2.933H8.8a2.942 2.942 0 0 0 2.933 2.933zm8.8-8.8v-7.333c0-4.503-2.39-8.272-6.6-9.27V2.2c0-1.217-.982-2.2-2.2-2.2-1.217 0-2.2.983-2.2 2.2v.997c-4.194.998-6.6 4.752-6.6 9.27V19.8L0 22.733V24.2h23.467v-1.467L20.533 19.8zM17.6 21.267H5.867v-8.8c0-3.638 2.214-6.6 5.866-6.6 3.652 0 5.867 2.962 5.867 6.6v8.8z"
        id="bgNotification_svg__a"
      />
    </defs>
    <g transform="translate(0 .25)" fill="none" fillRule="evenodd">
      <rect fill="#EFF3F2" width={80} height={80} rx={40} />
      <g transform="translate(28.267 26.067)">
        <mask id="bgNotification_svg__b" fill="#fff">
          <use xlinkHref="#bgNotification_svg__a" />
        </mask>
        <g mask="url(#bgNotification_svg__b)" fill="#BDC5C1">
          <path d="M-5.867-3.667h35.2v35.2h-35.2z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgBgNotification);
export default Memo;
