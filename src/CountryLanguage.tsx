import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCountryLanguage = (props: SVGProps<SVGSVGElement>) => (
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
        d="M9.992 1.667c-4.6 0-8.325 3.733-8.325 8.333s3.725 8.333 8.325 8.333c4.608 0 8.341-3.733 8.341-8.333S14.6 1.667 9.992 1.667zm5.775 5h-2.459a13.04 13.04 0 0 0-1.15-2.967 6.691 6.691 0 0 1 3.609 2.967zM10 3.367c.692 1 1.233 2.108 1.592 3.3H8.408c.359-1.192.9-2.3 1.592-3.3zm-6.45 8.3A6.868 6.868 0 0 1 3.333 10c0-.575.084-1.133.217-1.667h2.817c-.067.55-.117 1.1-.117 1.667s.05 1.117.117 1.667H3.55zm.683 1.666h2.459a13.04 13.04 0 0 0 1.15 2.967 6.656 6.656 0 0 1-3.609-2.967zm2.459-6.666H4.233A6.656 6.656 0 0 1 7.842 3.7a13.04 13.04 0 0 0-1.15 2.967zM10 16.633c-.692-1-1.233-2.108-1.592-3.3h3.184c-.359 1.192-.9 2.3-1.592 3.3zm1.95-4.966h-3.9A12.26 12.26 0 0 1 7.917 10c0-.567.058-1.125.133-1.667h3.9c.075.542.133 1.1.133 1.667s-.058 1.117-.133 1.667zm.208 4.633c.5-.925.884-1.925 1.15-2.967h2.459a6.691 6.691 0 0 1-3.609 2.967zm1.475-4.633c.067-.55.117-1.1.117-1.667s-.05-1.117-.117-1.667h2.817c.133.534.217 1.092.217 1.667s-.084 1.133-.217 1.667h-2.817z"
        id="country-language_svg__a"
      />
    </defs>
    <g transform="translate(-1 -1.488)" fill="none" fillRule="evenodd">
      <mask id="country-language_svg__b" fill="#fff">
        <use xlinkHref="#country-language_svg__a" />
      </mask>
      <g mask="url(#country-language_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCountryLanguage);
export default Memo;
