import * as React from "react";
import { SVGProps, memo } from "react";

const SvgExplorer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle cx={16.5} cy={16.5} r={16.5} fill="#EFEFEF" />
      <path
        fill="#939D9A"
        d="M23.353 16.843a6.246 6.246 0 0 1-.33 1.497 5.97 5.97 0 0 1-.945 1.719 5.47 5.47 0 0 1-1.401 1.25 6.532 6.532 0 0 1-1.765.764 7.614 7.614 0 0 1-2.022.265c-.973 0-1.859-.16-2.661-.479a5.995 5.995 0 0 1-2.063-1.34 6.046 6.046 0 0 1-1.342-2.072c-.32-.805-.481-1.696-.481-2.674 0-.963.158-1.849.474-2.656a5.779 5.779 0 0 1 1.342-2.063 6.116 6.116 0 0 1 2.095-1.334c.818-.319 1.73-.476 2.735-.476 1.304 0 2.448.28 3.43.837.986.56 1.763 1.426 2.338 2.6l-3.083 1.266c-.286-.68-.66-1.166-1.118-1.464a2.828 2.828 0 0 0-1.567-.443 3.17 3.17 0 0 0-1.326.272 2.882 2.882 0 0 0-1.019.772 3.76 3.76 0 0 0-.662 1.21 4.88 4.88 0 0 0-.242 1.578c0 .527.069 1.016.209 1.465.137.45.344.837.621 1.168.275.329.619.584 1.026.764.41.181.884.273 1.427.273.32 0 .629-.036.929-.107.298-.071.565-.188.802-.346a1.94 1.94 0 0 0 .588-.617c.156-.252.26-.56.316-.922H16.99v-2.5h6.448c0 .66-.028 1.255-.084 1.793m1.778-4.505a8.429 8.429 0 0 0-1.296-2.252 7.21 7.21 0 0 0-2.188-1.945C20.323 7.379 18.782 7 17.025 7c-1.357 0-2.585.216-3.687.65-1.1.43-2.043 1.033-2.825 1.807a7.539 7.539 0 0 0-.827.973 8.39 8.39 0 0 0-1.037 1.875C8.216 13.385 8 14.579 8 15.89c0 .953.12 1.862.36 2.725a8.867 8.867 0 0 0 1.036 2.378 7.445 7.445 0 0 0 1.698 1.887c.433.344.91.642 1.426.894.252.13.515.25.785.36h.005c.267.106.511.262.713.465L16.89 27.5l2.878-2.91a2 2 0 0 1 .71-.451 8.755 8.755 0 0 0 1.515-.754 7.438 7.438 0 0 0 1.488-1.233 7.098 7.098 0 0 0 1.16-1.505c.76-1.324 1.14-2.865 1.14-4.622 0-1.357-.217-2.585-.65-3.687"
      />
    </g>
  </svg>
);

const Memo = memo(SvgExplorer);
export default Memo;
