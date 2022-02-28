import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFuel = (props: SVGProps<SVGSVGElement>) => (
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
        d="M7.386 5.153c0 .137-.11.248-.246.248H2.066a.247.247 0 0 1-.246-.248V1.276c0-.137.11-.248.246-.248H7.14c.136 0 .246.111.246.248v3.877Zm5.575-.3-.153-1.298a.439.439 0 0 0-.164-.292l-1.48-1.17a.435.435 0 0 0-.39-.076L9.291.84l-.45.572 1.5 1.188c0 .011 0 .023.002.034l.184 1.658a.438.438 0 0 0 .164.296l1.286 1.016a.434.434 0 0 0 .28.094c.39.714.602 1.522.602 2.36l.024 2.934c.046.704-.528 1.382-1.286 1.382-.711 0-1.29-.582-1.29-1.297V7.346c0-1.03-.839-1.765-1.725-1.764h-.21V.868A.865.865 0 0 0 7.509 0H1.624A.865.865 0 0 0 .76.868v12.82c0 .136-.11.244-.247.244H.246a.244.244 0 0 0-.246.245v.575c0 .137.11.248.246.248h8.64a.247.247 0 0 0 .247-.248v-.575a.245.245 0 0 0-.247-.245h-.268a.244.244 0 0 1-.246-.245V6.565h.145c.576 0 .804.463.804.781v3.732a2.282 2.282 0 0 0 2.276 2.289c1.261 0 2.333-1.068 2.273-2.374l.002-2.935c0-1.135-.32-2.225-.908-3.16l-.003-.045Z"
        id="fuel_svg__a"
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
      <g transform="translate(3.333 2.5)">
        <mask id="fuel_svg__b" fill="#fff">
          <use xlinkHref="#fuel_svg__a" />
        </mask>
        <use fill="#000" xlinkHref="#fuel_svg__a" />
        <path
          fill="#53605E"
          mask="url(#fuel_svg__b)"
          d="M-3.064-2.5h20v20h-20z"
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgFuel);
export default Memo;
