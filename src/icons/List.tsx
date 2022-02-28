import * as React from "react";
import { SVGProps, memo } from "react";

const SvgList = (props: SVGProps<SVGSVGElement>) => (
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
        d="M8 4h6v2H8V4Zm0 4h6v2H8V8Zm0 4h6v2H8v-2ZM4 4h2v2H4V4Zm0 4h2v2H4V8Zm0 4h2v2H4v-2ZM17.1 0H.9C.4 0 0 .4 0 .9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V.9c0-.5-.5-.9-.9-.9ZM16 16H2V2h14v14Z"
        id="list_svg__a"
      />
    </defs>
    <g transform="translate(0 .188)" fill="none" fillRule="evenodd">
      <circle fill="#E5F6ED" cx={25} cy={25} r={25} />
      <g transform="translate(16 16)">
        <mask id="list_svg__b" fill="#fff">
          <use xlinkHref="#list_svg__a" />
        </mask>
        <g mask="url(#list_svg__b)" fill="#2DC44D">
          <path d="M-3-3h24v24H-3z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgList);
export default Memo;
