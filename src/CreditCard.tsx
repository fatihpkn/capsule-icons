import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
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
        d="M18 0H2C.89 0 .01.89.01 2L0 14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V2c0-1.11-.89-2-2-2Zm0 14H2V8h16v6Zm0-10H2V2h16v2Z"
        id="creditCard_svg__a"
      />
    </defs>
    <g transform="translate(0 .188)" fill="none" fillRule="evenodd">
      <circle fill="#E5F6ED" cx={25} cy={25} r={25} />
      <g transform="translate(15 17)">
        <mask id="creditCard_svg__b" fill="#fff">
          <use xlinkHref="#creditCard_svg__a" />
        </mask>
        <g mask="url(#creditCard_svg__b)" fill="#2DC44D">
          <path d="M-2-4h24v24H-2z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCreditCard);
export default Memo;
