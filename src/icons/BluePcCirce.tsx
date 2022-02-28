import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBluePcCirce = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 91 90"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g transform="translate(.5)" fill="none" fillRule="evenodd">
      <circle fill="#E5F3FF" cx={45} cy={45} r={45} />
      <g fill="#0087FF">
        <path d="M71.995 62.693v-2.66H17v2.66s0 .42 2.633.677l4.184.955h41.58l4.186-.955c2.635-.256 2.412-.677 2.412-.677M65.926 24.014c0-.56-.456-1.014-1.02-1.014H24.025c-.563 0-1.019.454-1.019 1.014v32.71h42.92v-32.71Z" />
      </g>
      <path fill="#F0F8FF" d="M28.627 52.534h31.678V27.639H28.627z" />
      <path
        d="M71.672 38.333h-14.59a.927.927 0 0 0-.937.911v26.844c0 .502.421.912.936.912h14.591c.516 0 .937-.41.937-.912V39.244c0-.5-.421-.911-.937-.911Z"
        fill="#0087FF"
      />
      <path fill="#F0F8FF" d="M58.002 63.22h12.85V42.93h-12.85z" />
      <path
        d="M64.427 39.43a1.2 1.2 0 0 1 1.211 1.19 1.2 1.2 0 0 1-1.21 1.186c-.67 0-1.211-.531-1.211-1.187a1.2 1.2 0 0 1 1.21-1.188Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const Memo = memo(SvgBluePcCirce);
export default Memo;
