import * as React from "react";
import { SVGProps, memo } from "react";

const SvgHuaweiStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 123 38"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <rect
        width={122}
        height={37}
        x={-0.5}
        y={-0.5}
        fill="#FFF"
        stroke="#D7DDDB"
        rx={4}
      />
      <path
        fill="#E14459"
        d="M13.308 8h11.384A4.308 4.308 0 0 1 29 12.308v11.384A4.308 4.308 0 0 1 24.692 28H13.308A4.308 4.308 0 0 1 9 23.692V12.308A4.308 4.308 0 0 1 13.308 8"
      />
      <path
        fill="#C73148"
        d="M24.053 9.307a.568.568 0 1 0 .57.567.568.568 0 0 0-.57-.567m-10.178 0a.568.568 0 1 0 .57.567.568.568 0 0 0-.57-.567"
      />
      <path
        fill="#FFF"
        d="m18.062 18.503.386.877.026.06h-.817l.026-.06.38-.877zm5.613-.66v2.615h2.011v-.477h-1.478v-.648h.983v-.477h-.983v-.536h1.427v-.477h-1.96zm-7.83 0v1.498c0 .426-.214.653-.605.653-.392 0-.608-.234-.608-.671v-1.48h-.54v1.498c0 .736.416 1.159 1.141 1.159.733 0 1.153-.43 1.153-1.18v-1.478h-.54zm-4.801-.002v2.619h.54v-1.064h1.22v1.064h.54v-2.618h-.54v1.056h-1.22v-1.056h-.54zm15.285 2.615h.533V17.84h-.533v2.615zm-8.495-2.615-1.173 2.616h.551l.227-.506.016-.038h1.218l.24.544h.566l-1.163-2.6-.01-.016h-.472zm3.21 0-.604 1.8-.588-1.8h-.575l.928 2.618h.447l.606-1.72.605 1.72h.451l.926-2.617h-.56l-.59 1.799-.605-1.8h-.44zm-7.191-8.045c-.198.01-.188.298-.188.298 1.063 2.07 3.02 3.085 5.276 3.085 2.253-.003 4.23-1.03 5.29-3.096 0 0 .043-.39-.371-.255-1.089 1.804-2.917 2.871-4.918 2.875-2.004 0-3.826-1.056-4.917-2.863a.36.36 0 0 0-.172-.044z"
      />
      <text
        fill="#53605E"
        fontFamily="Arial-BoldMT, Arial"
        fontSize={12}
        fontWeight="bold"
        transform="translate(9 5)"
      >
        <tspan x={26.439} y={11}>
          {"AppGallery"}
        </tspan>
        <tspan
          x={26}
          y={24.053}
          fontFamily="ArialMT, Arial"
          fontWeight="normal"
        >
          {"\u2019den indirin"}
        </tspan>
      </text>
    </g>
  </svg>
);

const Memo = memo(SvgHuaweiStore);
export default Memo;
