import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPnr = (props: SVGProps<SVGSVGElement>) => (
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
        id="pnr_svg__a"
        d="M2 3.333h16a2 2 0 0 1 2 2v9.334a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.333a2 2 0 0 1 2-2Zm4.178 5.498c0-.678-.207-1.187-.62-1.529-.414-.342-1.017-.512-1.81-.512H1.656v6.543h1.387v-2.327h.596c.811 0 1.437-.187 1.877-.56.44-.373.66-.911.66-1.615ZM3.044 9.869V7.926h.632c.378 0 .657.078.834.233.178.155.267.396.267.72 0 .323-.106.568-.318.737-.212.169-.531.253-.958.253h-.457Zm9.674 3.464V6.79H11.47v3.097c0 .352.023.953.068 1.804h-.032L8.663 6.79h-1.75v6.543h1.24v-3.08c0-.372-.029-.996-.085-1.87h.04l2.847 4.95h1.763Zm2.535-2.51h.738l1.562 2.51h1.54l-1.924-2.85c.387-.17.687-.406.9-.706.211-.3.317-.642.317-1.027 0-.66-.213-1.151-.64-1.475-.427-.324-1.085-.485-1.974-.485h-1.907v6.543h1.388v-2.51Zm0-1.129V7.926h.42c.448 0 .779.066.992.197.213.132.32.352.32.663 0 .313-.104.543-.313.69-.21.145-.533.218-.972.218h-.447Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={16.5} cy={16.5} r={16.5} fill="#EFEFEF" />
      <g transform="translate(7 7)">
        <path d="M0 0h20v20H0z" />
        <use fill="#939D9A" xlinkHref="#pnr_svg__a" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgPnr);
export default Memo;
