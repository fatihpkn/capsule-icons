import * as React from "react";
import { SVGProps, memo } from "react";

const SvgRubberGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="#2DC44D" fillRule="evenodd">
      <path d="M23 18.77c-4.68 0-8.486-3.807-8.486-8.486S18.321 1.798 23 1.798c4.68 0 8.486 3.807 8.486 8.486 0 4.68-3.807 8.486-8.486 8.486ZM23 .784c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5Z" />
      <path d="M25.047 14.17a2.755 2.755 0 0 1-1.993.918c-1.564.032-2.865-1.287-2.895-2.94-.044-2.407 2.008-5.472 2.725-6.467.753.96 2.913 3.923 2.957 6.351.014.801-.268 1.56-.794 2.137Zm-2.18-9.386a.324.324 0 0 0-.248.126c-.13.166-3.176 4.092-3.118 7.25a3.768 3.768 0 0 0 1.072 2.592 3.381 3.381 0 0 0 2.494 1.031 3.395 3.395 0 0 0 2.455-1.132 3.785 3.785 0 0 0 .977-2.632c-.058-3.187-3.246-6.96-3.381-7.12a.321.321 0 0 0-.252-.115Z" />
      <path d="M23.508 13.564a.289.289 0 0 0 .348.212c1.29-.321 1.85-1.3 1.576-2.756a.287.287 0 1 0-.563.108c.217 1.157-.16 1.839-1.15 2.085a.29.29 0 0 0-.21.35" />
      <path d="M24.652 10.547c.07.148.234.237.407.237a.5.5 0 0 0 .169-.03c.225-.08.331-.305.239-.5a4.404 4.404 0 0 0-.132-.257c-.107-.19-.372-.267-.59-.173-.218.093-.307.323-.2.513 0 .001.045.078.107.21M14.172 19.936l-2.6 3.29c-.127.162-.082.383.101.495a.44.44 0 0 0 .23.063.421.421 0 0 0 .332-.152l2.268-2.871 2.262 2.863c.127.16.378.2.562.089.183-.112.228-.333.1-.494l-2.592-3.283a.422.422 0 0 0-.332-.152.422.422 0 0 0-.331.152M9.458 22.618a.363.363 0 0 0 .545.076l3.347-2.877a.454.454 0 0 0 .142-.424.415.415 0 0 0-.28-.33L8.99 17.799c-.206-.062-.42.073-.476.303-.056.229.066.465.273.527l3.47 1.038-2.731 2.348a.46.46 0 0 0-.068.603" />
      <path d="M25.186 21.112a10.81 10.81 0 0 1-5.105-.01c-.786 2.878-3.358 4.99-6.411 4.99-3.677 0-6.657-3.062-6.657-6.84 0-3.142 2.063-5.79 4.873-6.59a11.698 11.698 0 0 1-.295-2.618c0-1.506.286-2.944.804-4.26-.466.046-.924.116-1.374.21l-.473 1.63a.281.281 0 0 1-.348.194.29.29 0 0 1-.189-.358l.383-1.317a12.88 12.88 0 0 0-3.11 1.273l.025 1.7a.276.276 0 0 1-.276.286h-.004a.277.277 0 0 1-.28-.276l-.02-1.376a13.291 13.291 0 0 0-2.305 1.866l.475 1.646a.29.29 0 0 1-.19.358.281.281 0 0 1-.348-.194l-.384-1.334a13.57 13.57 0 0 0-1.82 2.585l.915 1.454a.293.293 0 0 1-.083.398.273.273 0 0 1-.387-.085l-.744-1.182c-.43.895-.768 1.846-.998 2.839l1.272 1.156a.293.293 0 0 1 .024.406.276.276 0 0 1-.395.025l-1.035-.94a13.966 13.966 0 0 0-.194 3.445l1.56.715a.291.291 0 0 1 .142.38.28.28 0 0 1-.256.17.273.273 0 0 1-.114-.025L.592 20.85a13.76 13.76 0 0 0 .67 2.945l1.703.258c.153.024.259.17.236.328a.283.283 0 0 1-.318.242l-1.39-.211c.374.933.847 1.813 1.405 2.627l1.715-.22a.282.282 0 0 1 .313.25.286.286 0 0 1-.244.322l-1.4.18c.607.798 1.3 1.525 2.063 2.167l1.598-.689a.278.278 0 0 1 .367.155.291.291 0 0 1-.15.377l-1.307.561a13.07 13.07 0 0 0 2.944 1.685l1.328-1.153a.275.275 0 0 1 .395.034c.1.121.085.303-.033.406l-1.087.943c1.058.372 2.177.61 3.337.693l.925-1.507a.275.275 0 0 1 .387-.09c.13.085.17.262.087.397l-.755 1.23a12.895 12.895 0 0 0 2.941-.27l.496-1.707c.044-.152.2-.239.348-.193a.29.29 0 0 1 .188.358l-.404 1.393a12.907 12.907 0 0 0 3.133-1.288l-.026-1.772a.283.283 0 0 1 .276-.291.284.284 0 0 1 .284.284l.021 1.442c.84-.54 1.616-1.172 2.314-1.885l-.485-1.685a.29.29 0 0 1 .19-.358.278.278 0 0 1 .347.194l.395 1.37a13.55 13.55 0 0 0 1.818-2.608l-.923-1.467a.292.292 0 0 1 .083-.398.275.275 0 0 1 .387.086l.75 1.19c.427-.9.76-1.855.986-2.854l-1.266-1.15a.283.283 0 0 1-.048-.059M27.348 21.784a11.3 11.3 0 0 0 .152-1c-.326.12-.66.225-1 .318l.848.682" />
      <path d="m14.657 17.784-.152.697c-.023.102.035.205.148.261a.406.406 0 0 0 .181.042c.065 0 .13-.015.186-.044l.48-.25c-.3-.221-.581-.457-.843-.706M13.088 15.747c-.32-.62-.588-1.277-.795-1.963a.396.396 0 0 0-.17.395l.535 3.404-2.607-1.896a.338.338 0 0 0-.49.105.404.404 0 0 0 .096.533l3.292 2.394a.335.335 0 0 0 .39.003.398.398 0 0 0 .156-.386l-.407-2.59M15.829 18.784l-1.049.32a.41.41 0 0 0-.273.327.457.457 0 0 0 .14.421l3.241 2.842c.07.06.151.09.233.09a.365.365 0 0 0 .3-.165.464.464 0 0 0-.067-.6l-2.642-2.315.894-.272c-.268-.203-.527-.42-.777-.648" />
    </g>
  </svg>
);

const Memo = memo(SvgRubberGlass);
export default Memo;