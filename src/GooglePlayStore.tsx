import * as React from "react";
import { SVGProps, memo } from "react";

const SvgGooglePlayStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 17 18"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <defs>
      <linearGradient
        id="google-play-store_svg__a"
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
        id="google-play-store_svg__c"
        x1="-14.698%"
        x2="74.844%"
        y1="-51.246%"
        y2="89.529%"
      >
        <stop offset="0%" stopColor="#FC227C" />
        <stop offset="100%" stopColor="#FEEB7B" />
      </linearGradient>
      <linearGradient
        id="google-play-store_svg__d"
        x1="43.777%"
        x2="49.484%"
        y1="-14.814%"
        y2="82.894%"
      >
        <stop offset="0%" stopColor="#0E4DA0" />
        <stop offset="100%" stopColor="#6BFED4" />
      </linearGradient>
      <linearGradient
        id="google-play-store_svg__f"
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
        id="google-play-store_svg__b"
        d="M12.213 6.094 1.365.17C1.058.002.774-.037.544.034L9.43 8.86l2.783-2.766"
      />
      <path
        id="google-play-store_svg__e"
        d="M.544.034C.214.136 0 .468 0 .97l.002 15.8c0 .497.207.824.527.933l8.9-8.841L.545.034"
      />
      <path
        id="google-play-store_svg__g"
        d="M.53 17.703c.23.078.52.042.835-.13l10.861-5.934L9.43 8.862l-8.9 8.841"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(.238 .014)">
      <use
        fill="url(#google-play-store_svg__a)"
        xlinkHref="#google-play-store_svg__b"
      />
      <path
        fill="url(#google-play-store_svg__c)"
        d="m12.227 11.64 3.704-2.023c.75-.412.75-1.082 0-1.492l-3.717-2.03L9.43 8.86l2.797 2.78"
      />
      <use
        fill="url(#google-play-store_svg__d)"
        xlinkHref="#google-play-store_svg__e"
      />
      <use
        fill="url(#google-play-store_svg__f)"
        xlinkHref="#google-play-store_svg__g"
      />
    </g>
  </svg>
);

const Memo = memo(SvgGooglePlayStore);
export default Memo;
