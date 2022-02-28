import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSocialLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M11.322 12.322v8.993H8.449v-8.993h2.873zm7.85-.087c2.043 0 3.647 1.294 3.647 4.08v5h-3.258V16.66c0-1.218-.51-2.05-1.63-2.05-.858 0-1.334.562-1.556 1.103-.083.194-.07.464-.07.735v4.866h-3.228v-.176c.004-.63.014-2.83.017-4.883V15.7l.001-.272V14.397l-.001-.468a53.433 53.433 0 0 0-.017-1.608h3.228v1.412c.19-.618 1.222-1.499 2.868-1.499zm-9.34-4.158c1.06 0 1.712.671 1.733 1.559 0 .87-.673 1.56-1.753 1.56h-.02c-1.04 0-1.715-.686-1.715-1.558 0-.888.694-1.561 1.755-1.561z" />
  </svg>
);

const Memo = memo(SvgSocialLinkedin);
export default Memo;
