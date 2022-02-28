import * as React from "react";
import { SVGProps, memo } from "react";

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 51"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2ZM5 5c0-1.66 1.34-3 3-3s3 1.34 3 3v2H5V5Zm9 14H2V9h12v10Zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z"
        id="lock_svg__a"
      />
    </defs>
    <g transform="translate(0 .188)" fill="none" fillRule="evenodd">
      <circle fill="#E5F6ED" cx={25} cy={25} r={25} />
      <g transform="translate(17 14)">
        <mask id="lock_svg__b" fill="#fff">
          <use xlinkHref="#lock_svg__a" />
        </mask>
        <g mask="url(#lock_svg__b)" fill="#2DC44D">
          <path d="M-4-1h24v24H-4z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgLock);
export default Memo;
