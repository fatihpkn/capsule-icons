import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBabyChair = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 31 27"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="#2DC44D" fillRule="evenodd">
      <path d="M25.333 11.016c2.112 0 3.94.43 4.862.695-.854-2.497-3.87-8.354-13.358-8.354-2.53 5.74-1.36 10.227-.566 12.195 1.907-2.975 5.008-4.536 9.062-4.536" />
      <path d="M25.333 11.98c-2.786 0-6.073.804-8.173 3.983a2.31 2.31 0 0 1 1.636 2.202 2.315 2.315 0 0 1-2.321 2.304c-.334 0-.652-.071-.94-.198a2.232 2.232 0 0 1-.186-.045c-.124-.036-3.068-.885-6.579-.885-2.213 0-4.158.334-5.79.994l.738 3.46S4.495 27 13.307 27c8.812 0 9.59-3.204 9.59-3.204l.797-3.927 6.806-7.051s-2.322-.838-5.167-.838" />
      <path d="M14.154 18.165c0-.598.23-1.144.608-1.554a30.64 30.64 0 0 0-3.597-.535c-.831-.073-1.638-.11-2.42-.11-2.854 0-5.38.485-7.53 1.448a1.202 1.202 0 0 0-.607 1.595 1.215 1.215 0 0 0 1.605.603c2.092-.937 4.427-1.235 6.557-1.235 2.255 0 4.279.335 5.535.602a2.28 2.28 0 0 1-.15-.814M16.475 16.824c-.744 0-1.35.602-1.35 1.34 0 .74.606 1.34 1.35 1.34.744 0 1.35-.6 1.35-1.34 0-.738-.606-1.34-1.35-1.34" />
      <path d="M15.484 16.081c-2.1-2.441-2.826-5.457-2.156-8.994.622-3.28 2.262-5.805 2.287-5.843a.8.8 0 0 0-.233-1.112.813.813 0 0 0-1.12.23c-.075.113-1.822 2.786-2.514 6.376-.786 4.072.114 7.66 2.604 10.497.226-.506.63-.917 1.132-1.154" />
    </g>
  </svg>
);

const Memo = memo(SvgBabyChair);
export default Memo;