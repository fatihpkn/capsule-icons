import * as React from "react";
import { SVGProps, memo } from "react";

const SvgGallery = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17.5 15.833V4.167c0-.917-.75-1.667-1.667-1.667H4.167C3.25 2.5 2.5 3.25 2.5 4.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667zM7.083 11.25l2.084 2.508L12.083 10l3.75 5H4.167l2.916-3.75z"
        id="gallery_svg__a"
      />
    </defs>
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <mask id="gallery_svg__b" fill="#fff">
        <use xlinkHref="#gallery_svg__a" />
      </mask>
      <g mask="url(#gallery_svg__b)" fill="#727E7C">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgGallery);
export default Memo;
