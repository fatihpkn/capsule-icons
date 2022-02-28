import * as React from "react";
import { SVGProps, memo } from "react";

const SvgContactPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
        id="contact_phone_svg__a"
      />
    </defs>
    <g transform="translate(-3 -3)" fill="none" fillRule="evenodd">
      <mask id="contact_phone_svg__b" fill="#fff">
        <use xlinkHref="#contact_phone_svg__a" />
      </mask>
      <g mask="url(#contact_phone_svg__b)" fill="#53605E">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgContactPhone);
export default Memo;
