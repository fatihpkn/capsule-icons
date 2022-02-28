import * as React from "react";
import { SVGProps, memo } from "react";

const SvgChildChair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 30"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path id="child-chair_svg__a" d="M0 0h16.138v2.944H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1.736 27.056)">
        <mask id="child-chair_svg__b" fill="#fff">
          <use xlinkHref="#child-chair_svg__a" />
        </mask>
        <path
          d="M16.138 0v2.16a.786.786 0 0 1-.789.784H.79A.786.786 0 0 1 0 2.16V0h16.138Z"
          fill="#2DC44D"
          mask="url(#child-chair_svg__b)"
        />
      </g>
      <path
        d="M5.504 19.504c3.843 0 7.207 1.842 8.9.282 1.694-1.56.48-4.908.307-7.74-.203-3.301-.412-6.715 1.336-9.23C17.665.49 19.43 0 20.626 0c1.92 0 3.309 1.23 3.367 1.283.268.24.385.605.308.955l-4.993 22.735c-.1.46-.51.787-.983.787H1.078c-.53 0-.97-.41-1.004-.935-.007-.104 1.587-5.32 5.43-5.32"
        fill="#2DC44D"
      />
      <path
        d="M13.52 12.118c.05.81.177 1.64.298 2.442.272 1.79.554 3.64-.224 4.357-.158.144-.426.31-1.114.31-.701 0-1.613-.177-2.58-.364-1.31-.255-2.797-.544-4.396-.544-1.548 0-3.003.676-4.207 1.954-.24.255-.46.523-.66.792a1.569 1.569 0 0 1-.555-.762 1.578 1.578 0 0 1 1.005-2l3.09-1.025s.928-.447 2.484-.18l2.888.498c.028.005.055.012.083.019l.842-3.078-2.668.528a1.597 1.597 0 0 1-1.5-.502l-2.49-2.792a1.574 1.574 0 0 1 .134-2.23 1.597 1.597 0 0 1 2.244.133l1.886 2.114 4.615-.914c.237-.09.487-.15.744-.174.024.475.053.95.082 1.418M15.066 2.143c-.904 1.3-1.429 2.899-1.606 4.889-.08.889-.086 1.798-.06 2.707a4.077 4.077 0 0 1-2.909-3.898c0-2.25 1.835-4.074 4.098-4.074.24 0 .475.022.704.062-.076.101-.152.205-.227.314"
        fill="#2DC44D"
      />
    </g>
  </svg>
);

const Memo = memo(SvgChildChair);
export default Memo;
