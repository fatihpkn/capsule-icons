import * as React from "react";
import { SVGProps, memo } from "react";

const SvgMilage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        strokeOpacity={0.01}
        stroke="#FFF"
        strokeWidth={0.1}
        opacity={0.2}
        d="M.05.05h19.9v19.9H.05z"
      />
      <g fill="#53605E" fillRule="nonzero">
        <path d="M9.33 11.426c0 .511.425.928.948.928a.939.939 0 0 0 .947-.928c0-.39-.48-2.856-.947-5.137-.468 2.28-.947 4.747-.947 5.137ZM5.1 5.249l2.152 2.107a4.79 4.79 0 0 1 2.57-1.044V3.333A7.809 7.809 0 0 0 5.1 5.25ZM16.1 5.881 13.95 7.99a4.593 4.593 0 0 1 1.065 2.517h3.04A7.489 7.489 0 0 0 16.1 5.88ZM10.734 3.333v2.979a4.79 4.79 0 0 1 2.57 1.044l2.15-2.107a7.809 7.809 0 0 0-4.72-1.916ZM13.643 14.25l-.323.316 2.144 2.1.323-.316a7.508 7.508 0 0 0 2.269-4.95h-3.04a4.589 4.589 0 0 1-1.373 2.85ZM2.5 10.506h3.04a4.593 4.593 0 0 1 1.066-2.517L4.456 5.88A7.489 7.489 0 0 0 2.5 10.506ZM4.768 16.35l.323.317 2.144-2.1-.323-.317A4.589 4.589 0 0 1 5.54 11.4H2.5a7.508 7.508 0 0 0 2.268 4.95Z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgMilage);
export default Memo;
