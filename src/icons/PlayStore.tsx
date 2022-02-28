import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPlayStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 123 38"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <defs>
      <linearGradient
        id="play-store_svg__a"
        x1="19.215%"
        x2="69.302%"
        y1=".908%"
        y2="75.098%"
      >
        <stop offset="0%" stopColor="#19A3B4" />
        <stop offset="34.817%" stopColor="#5BC3AF" />
        <stop offset="92.234%" stopColor="#C8F7A6" />
        <stop offset="100%" stopColor="#D7FEA5" />
      </linearGradient>
      <linearGradient
        id="play-store_svg__c"
        x1="-14.698%"
        x2="74.844%"
        y1="-51.246%"
        y2="89.529%"
      >
        <stop offset="0%" stopColor="#FC227C" />
        <stop offset="100%" stopColor="#FEEB7B" />
      </linearGradient>
      <linearGradient
        id="play-store_svg__d"
        x1="43.777%"
        x2="49.484%"
        y1="-14.814%"
        y2="82.894%"
      >
        <stop offset="0%" stopColor="#0E4DA0" />
        <stop offset="100%" stopColor="#6BFED4" />
      </linearGradient>
      <linearGradient
        id="play-store_svg__f"
        x1="132.245%"
        x2="5.959%"
        y1="30.669%"
        y2="93.99%"
      >
        <stop offset="0%" stopColor="#FC472E" />
        <stop offset=".332%" stopColor="#FC472F" />
        <stop offset="100%" stopColor="#893CD8" />
      </linearGradient>
      <path
        id="play-store_svg__b"
        d="M12.451 6.108 1.603.183C1.295.015 1.012-.023.782.048l8.886 8.826 2.783-2.766"
      />
      <path
        id="play-store_svg__e"
        d="M.781.048C.451.15.238.482.238.984l.002 15.8c0 .497.207.824.527.933l8.9-8.842L.782.048"
      />
      <path
        id="play-store_svg__g"
        d="M.767 17.717c.231.078.52.042.836-.13l10.86-5.934-2.795-2.778-8.9 8.842"
      />
    </defs>
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
      <g transform="translate(11 9)">
        <use fill="url(#play-store_svg__a)" xlinkHref="#play-store_svg__b" />
        <path
          fill="url(#play-store_svg__c)"
          d="M12.465 11.653 16.17 9.63c.75-.411.75-1.08 0-1.492l-3.717-2.03-2.784 2.766 2.797 2.78"
        />
        <use fill="url(#play-store_svg__d)" xlinkHref="#play-store_svg__e" />
        <use fill="url(#play-store_svg__f)" xlinkHref="#play-store_svg__g" />
      </g>
      <text
        fill="#53605E"
        fontFamily="Arial-BoldMT, Arial"
        fontSize={12}
        fontWeight="bold"
        transform="translate(11 5)"
      >
        <tspan x={24.439} y={11}>
          {"Google Play"}
        </tspan>
        <tspan
          x={24}
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

const Memo = memo(SvgPlayStore);
export default Memo;
