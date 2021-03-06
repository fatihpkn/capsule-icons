import * as React from "react";
import { SVGProps, memo } from "react";

const SvgFaq = (props: SVGProps<SVGSVGElement>) => (
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
        d="M9.167 15h1.666v-1.667H9.167V15zM10 1.667A8.336 8.336 0 0 0 1.667 10c0 4.6 3.733 8.333 8.333 8.333S18.333 14.6 18.333 10 14.6 1.667 10 1.667zm0 15A6.676 6.676 0 0 1 3.333 10 6.676 6.676 0 0 1 10 3.333 6.676 6.676 0 0 1 16.667 10 6.676 6.676 0 0 1 10 16.667zM10 5a3.332 3.332 0 0 0-3.333 3.333h1.666c0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666c0 1.667-2.5 1.459-2.5 4.167h1.666c0-1.875 2.5-2.083 2.5-4.167A3.332 3.332 0 0 0 10 5z"
        id="faq_svg__a"
      />
    </defs>
    <g transform="translate(-1 -1.22)" fill="none" fillRule="evenodd">
      <mask id="faq_svg__b" fill="#fff">
        <use xlinkHref="#faq_svg__a" />
      </mask>
      <g mask="url(#faq_svg__b)" fill="#53605E">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgFaq);
export default Memo;
