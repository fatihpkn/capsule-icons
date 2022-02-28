import * as React from "react";
import { SVGProps, memo } from "react";

const SvgContact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path
        d="M16.667 3.333H3.333c-.916 0-1.658.75-1.658 1.667l-.008 10c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V5c0-.917-.75-1.667-1.666-1.667zm0 11.667H3.333V6.667L10 10.833l6.667-4.166V15zM10 9.167 3.333 5h13.334L10 9.167z"
        id="contact_svg__a"
      />
    </defs>
    <g transform="translate(-1 -2.463)" fill="none" fillRule="evenodd">
      <mask id="contact_svg__b" fill="#fff">
        <use xlinkHref="#contact_svg__a" />
      </mask>
      <g mask="url(#contact_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgContact);
export default Memo;
