import * as React from "react";
import { SVGProps, memo } from "react";

const SvgTrendCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path id="trend-circle_svg__a" d="M0 0h48.605v25.299H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="#F4EFFF" cx={45} cy={45} r={45} />
      <g transform="translate(20 33.48)">
        <mask id="trend-circle_svg__b" fill="#fff">
          <use xlinkHref="#trend-circle_svg__a" />
        </mask>
        <path
          d="M2.855 25.299a2.855 2.855 0 0 1-1.979-4.914L15.68 6.15 27.666 16.9 43.73.836a2.856 2.856 0 0 1 4.039 4.038L27.88 24.762l-12.066-10.82-10.98 10.56a2.846 2.846 0 0 1-1.98.797"
          fill="#4F1BB7"
          mask="url(#trend-circle_svg__b)"
        />
      </g>
      <path
        fill="#4F1BB7"
        d="M64.646 51.88 70 46.529l-.187-14.341L55.472 32l-5.353 5.354 14.34.186z"
      />
    </g>
  </svg>
);

const Memo = memo(SvgTrendCircle);
export default Memo;
