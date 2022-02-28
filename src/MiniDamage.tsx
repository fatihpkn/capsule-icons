import * as React from "react";
import { SVGProps, memo } from "react";

const SvgMiniDamage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M.5.261h32v32H.5z" />
      <g fill="#2DC44D">
        <path d="M20.314 23.024v1.525h2.033a8.593 8.593 0 0 1-2.033-1.525M7.01 18.715H3.995a.685.685 0 0 1-.69-.68v-.643c0-.433.405-.756.835-.665l3.016.643a.683.683 0 0 1 .544.665c0 .375-.309.68-.69.68m9.309-4.624H5.766l1.159-3.516h9.536l.422-.07.48-.08a2.181 2.181 0 0 0 1.608-1.126c-.016 0-.031-.004-.047-.004H6.933c-.568 0-1.071.36-1.246.893l-.785 2.381h-2.59a.65.65 0 0 0-.6.394l-.162.382a.638.638 0 0 0 .388.851l1.708.582-1.348 1.177a1.393 1.393 0 0 0-.48 1.05v7.036H5.74V22.11h13.896c-2.366-2.43-3.104-5.78-3.317-8.02" />
        <path d="M18.49 12.73c-.026 1.94.32 8.348 5.891 10.275 2.694-.931 4.498-3.008 5.365-6.174.47-1.715.53-3.3.523-4.102-1.889-.56-2.726-2.258-2.991-3.472l-2.897-.49-2.896.49c-.265 1.215-1.103 2.914-2.995 3.473Zm5.891 11.82-.16-.052c-7.64-2.48-6.947-12.36-6.939-12.46l.047-.584.482-.082c2.292-.39 2.525-2.752 2.534-2.852l.05-.579.479-.085 3.507-.595 3.992.677.045.587c.009.095.242 2.456 2.534 2.847l.482.082.047.584c.007.1.7 9.98-6.94 12.46l-.16.051Z" />
        <path d="M24.89 15.905h4.301c.19-.964.257-1.838.275-2.47-1.76-.764-2.5-2.388-2.791-3.325l-1.785-.306v6.101ZM24.89 16.075h-5.593c.5 2.237 1.797 4.956 5.078 6.102.176-.062.347-.13.515-.201v-5.901Z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgMiniDamage);
export default Memo;