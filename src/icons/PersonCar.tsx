import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPersonCar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M6.667 8.333c.501 0 1.115.057 1.765.17a5.8 5.8 0 0 0-.932 3.164c0 .579.084 1.139.242 1.667H0v-1.667C0 9.45 4.442 8.333 6.667 8.333Zm0-8.333a3.332 3.332 0 1 1 0 6.667 3.332 3.332 0 1 1 0-6.667Z"
        id="person-car_svg__a"
      />
      <path
        d="M7.186.456A.674.674 0 0 0 6.546 0H1.58a.679.679 0 0 0-.641.456L0 3.16v3.61c0 .25.203.452.451.452h.452a.453.453 0 0 0 .451-.451v-.452h5.417v.452c0 .248.203.451.451.451h.452a.453.453 0 0 0 .451-.451V3.16L7.186.456ZM1.58 4.966a.676.676 0 1 1 0-1.355.676.676 0 1 1 0 1.354Zm4.965 0a.676.676 0 1 1 0-1.355.676.676 0 1 1 0 1.354ZM.903 2.707 1.58.678h4.965l.677 2.03H.902Z"
        id="person-car_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        strokeOpacity={0.01}
        stroke="#FFF"
        strokeWidth={0.1}
        opacity={0.2}
        d="M.05.05h19.9v19.9H.05z"
      />
      <g transform="translate(.833 1.667)">
        <mask id="person-car_svg__b" fill="#fff">
          <use xlinkHref="#person-car_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#person-car_svg__a" />
        <path
          fill="#53605E"
          mask="url(#person-car_svg__b)"
          d="M-2.5-1.667h20v20h-20z"
        />
      </g>
      <g transform="translate(10.52 9.757)">
        <mask id="person-car_svg__d" fill="#fff">
          <use xlinkHref="#person-car_svg__c" />
        </mask>
        <g mask="url(#person-car_svg__d)" fill="#53605E">
          <path d="M-1.354-2.257H9.479V8.576H-1.354z" />
        </g>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgPersonCar);
export default Memo;
