import * as React from "react";
import { SVGProps, memo } from "react";

const SvgAppStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fillRule="evenodd"
    viewBox="0 0 123 38"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <rect
      width={122}
      height={37}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#d7dddb"
      rx={4}
    />
    <g fill="#53605e">
      <path d="M23.514 14.214c1.232 0 2.537.67 3.467 1.825-3.047 1.666-2.552 6.005.527 7.166-.424.937-.627 1.355-1.173 2.183-.76 1.156-1.834 2.596-3.164 2.608-1.182.01-1.485-.767-3.09-.76s-1.938.772-3.12.76c-1.33-.012-2.347-1.312-3.108-2.468-2.13-3.233-2.352-7.027-1.04-9.044.933-1.433 2.405-2.272 3.8-2.272 1.4 0 2.296.77 3.46.77 1.13 0 1.82-.772 3.45-.772zM23.157 10c.163 1.094-.287 2.164-.878 2.922-.634.812-1.726 1.44-2.782 1.41-.193-1.047.302-2.124.902-2.85.66-.8 1.792-1.414 2.76-1.48z" />
      <text fontFamily="Arial-BoldMT, Arial" fontSize={12} fontWeight="bold">
        <tspan x={36.439} y={17}>
          {"App Store"}
        </tspan>
        <tspan
          x={36}
          y={30.053}
          fontFamily="ArialMT, Arial"
          fontWeight="normal"
        >
          {"\u2019dan indirin"}
        </tspan>
      </text>
    </g>
  </svg>
);

const Memo = memo(SvgAppStore);
export default Memo;
