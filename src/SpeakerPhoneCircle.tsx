import * as React from "react";
import { SVGProps, memo } from "react";

const SvgSpeakerPhoneCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path id="speaker-phone-circle_svg__a" d="M0 0h23.435v27.509H0z" />
      <path id="speaker-phone-circle_svg__c" d="M0 0h26.918v32.942H0z" />
      <path id="speaker-phone-circle_svg__e" d="M0 0h4.333v7.636H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle fill="#FFEBEC" cx={45} cy={45} r={45} />
      <path
        d="M68.006 42.869c.3-.621.63-1.225.766-1.659.584-1.85-1.593-6.982-3.368-7.832-.336-.16-.897-.265-1.46-.388.853 1.84 2.17 4.91 4.062 9.879"
        fill="#FF3B42"
      />
      <g transform="translate(23.416 39.491)">
        <mask id="speaker-phone-circle_svg__b" fill="#fff">
          <use xlinkHref="#speaker-phone-circle_svg__a" />
        </mask>
        <path
          d="M20.44 20.931c-.162-1.41-.196-2.835-.31-4.743 1.373-.61 1.888-.855 3.305-1.377C21.35 6.884 18.467 2.272 16.789 0 12.357 1.897 8.867 3.312 4.417 5.17.315 6.882-.945 9.813.7 13.835c.488 1.193.965 2.39 1.469 3.576.933 2.192 4.073 3.713 6.415 3.482.944-.092 2.21.381 2.91 1.038 1.53 1.44 2.707 3.245 4.187 4.746 1.317 1.336 4.418 1.004 6.073-.57 1.584-1.507.17-2.606-.64-3.781-.293-.424-.617-.91-.673-1.395"
          fill="#FF3B42"
          mask="url(#speaker-phone-circle_svg__b)"
        />
      </g>
      <g transform="translate(43.082 23)">
        <mask id="speaker-phone-circle_svg__d" fill="#fff">
          <use xlinkHref="#speaker-phone-circle_svg__c" />
        </mask>
        <path
          d="M26.78 29.979c-.864-2.614-2.14-5.092-3.023-7.703a1.025 1.025 0 0 1-.045-.279c-2.725-7.26-4.36-10.855-5.166-12.47a.58.58 0 0 1-.067-.105l-.114-.253a10.88 10.88 0 0 0-.437-.796l.06-.04c-1.057-2.415-1.96-4.902-3.096-7.28-.28-.586-1.521-1.19-2.106-1.027C12.2.191 11.73 1.253 11.48 2.01c-.327.987-.176 2.16-.601 3.083-1.992 4.325-5.133 7.654-9.517 9.597-.7.31-.66.295-1.363.6 1.765 2.437 4.723 7.13 6.784 14.944 4.82-1.627 8.918-2.01 14.35.09.9.348 1.642 1.076 2.518 1.507.854.42 2.08 1.428 2.681 1.014.604-.412.717-2.046.446-2.865"
          fill="#FF3B42"
          mask="url(#speaker-phone-circle_svg__d)"
        />
      </g>
      <g transform="translate(20 50.923)">
        <mask id="speaker-phone-circle_svg__f" fill="#fff">
          <use xlinkHref="#speaker-phone-circle_svg__e" />
        </mask>
        <path
          d="M4.333 7.57S1.453 1.946 1.663 0c0 0-2.456.805-1.399 4.568 1.06 3.762 3.692 3.01 4.069 3.002"
          fill="#FF3B42"
          mask="url(#speaker-phone-circle_svg__f)"
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgSpeakerPhoneCircle);
export default Memo;
