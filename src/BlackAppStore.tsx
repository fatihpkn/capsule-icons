import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBlackAppStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 120 40"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <rect fill="#000" width={120} height={40} rx={3.551} />
      <g fill="#FFF">
        <path d="M22.222 15.741c1.093 0 2.252.594 3.077 1.62-2.705 1.48-2.265 5.332.468 6.362-.377.832-.557 1.203-1.041 1.938-.676 1.027-1.629 2.304-2.809 2.316-1.05.01-1.319-.682-2.742-.674-1.424.008-1.72.686-2.77.676-1.18-.01-2.083-1.165-2.76-2.19-1.89-2.87-2.087-6.24-.921-8.03.828-1.272 2.135-2.017 3.364-2.017 1.251 0 2.038.684 3.072.684 1.004 0 1.615-.685 3.062-.685ZM21.904 12c.145.971-.254 1.921-.78 2.594-.563.721-1.532 1.28-2.47 1.25-.17-.929.269-1.885.801-2.53.586-.71 1.59-1.255 2.45-1.314Z" />
        <text
          fontFamily="OpenSans-Bold, Open Sans"
          fontSize={12}
          fontWeight="bold"
          transform="translate(12 6.54)"
        >
          <tspan x={21} y={13}>
            {"App Store"}
          </tspan>
          <tspan
            x={21.832}
            y={26.252}
            fontFamily="OpenSans-Regular, Open Sans"
            fontWeight="normal"
          >
            {"\u2019dan indirin"}
          </tspan>
        </text>
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgBlackAppStore);
export default Memo;
