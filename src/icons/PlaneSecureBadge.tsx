import * as React from "react";
import { SVGProps, memo } from "react";

const SvgPlaneSecureBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 25"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="m13.578 9.18-2.1 1.95 1.145 4.609-.763.708-2.1-3.722-2.1 1.95.19 1.24-.572.532-.955-1.595-1.718-.886.573-.532 1.336.178 2.1-1.95L4.606 9.71l.764-.708 4.964 1.063 2.1-1.95a.852.852 0 0 1 1.145 0 .713.713 0 0 1 0 1.064M9.868 0C6.068 2.038 2.222 3.015 0 3.447V13.98c0 1.422.374 2.795 1.081 3.97C2.412 20.16 5.014 23.162 9.868 25c4.854-1.838 7.456-4.839 8.789-7.047a7.708 7.708 0 0 0 1.08-3.972V3.447C17.515 3.015 13.668 2.037 9.868 0"
      fill="#4F1BB7"
      fillRule="evenodd"
    />
  </svg>
);

const Memo = memo(SvgPlaneSecureBadge);
export default Memo;
