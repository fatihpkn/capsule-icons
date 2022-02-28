import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSocialFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M22.477 21.965c0 .442-.22.73-.664.73h-3.736v-5.53h1.9l.288-2.371h-2.188V13.56c0-.632.172-1.138 1.092-1.138h1.308v-1.885c-.4-.027-1.02-.087-1.832-.087-1.688 0-2.968 1.02-2.968 2.893v1.45h-2v2.37h2v5.532H8.749c-.448 0-.672-.289-.672-.731V9.06c0-.443.224-.984.672-.984h13.064c.444 0 .664.541.664.984v12.904z" />
  </svg>
);

const Memo = memo(SvgSocialFacebook);
export default Memo;
