import * as React from "react";
import { SVGProps, memo } from "react";

const SvgInsuranceFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h80v80H0z" />
      <g fillRule="nonzero">
        <path
          d="M14.813 69.063H24.5v-1.938h-9.688v1.938ZM25.468 71H13.844a.968.968 0 0 1-.969-.969v-3.875c0-.535.433-.969.969-.969h11.625c.535 0 .968.434.968.97v3.874a.968.968 0 0 1-.968.969ZM40.969 21.594c-4.808 0-8.719 3.912-8.719 8.718 0 4.807 3.91 8.72 8.719 8.72 4.808 0 8.718-3.913 8.718-8.72 0-4.806-3.91-8.718-8.718-8.718"
          fill="#2DC44D"
        />
        <path
          d="M40.969 40.969c-5.876 0-10.657-4.781-10.657-10.657 0-5.875 4.781-10.656 10.657-10.656 5.875 0 10.656 4.781 10.656 10.657 0 5.875-4.78 10.656-10.656 10.656"
          fill="#E5F6ED"
        />
        <path
          d="M40.969 40.969c-5.876 0-10.657-4.781-10.657-10.657 0-5.875 4.781-10.656 10.657-10.656 5.875 0 10.656 4.781 10.656 10.657 0 5.875-4.78 10.656-10.656 10.656"
          stroke="#2DC44D"
          strokeWidth={2}
        />
        <path
          d="M54.531 46.781H17.72v-1.937H54.13l14.531-14.532-14.53-14.53H17.718v-1.938H54.53c.258 0 .504.101.685.284l15.5 15.5a.968.968 0 0 1 0 1.37l-15.5 15.5a.965.965 0 0 1-.685.283"
          fill="#2DC44D"
        />
        <path
          d="M40 34.188a.966.966 0 0 1-.685-.284l-3.875-3.875 1.37-1.37 3.19 3.19 5.128-5.128 1.37 1.37-5.813 5.813a.966.966 0 0 1-.685.283M21.594 67.125h-3.875a.968.968 0 0 1-.969-.969v-54.25A2.91 2.91 0 0 1 19.656 9a2.91 2.91 0 0 1 2.907 2.906v2.906h-1.938v-2.906a.97.97 0 0 0-1.938 0v53.282h1.938V45.811h1.938v20.344a.968.968 0 0 1-.97.969"
          fill="#2DC44D"
        />
        <path
          fill="#2DC44D"
          d="M20.625 42.906h1.938V17.72h-1.938zM9 71h62v-1.938H9z"
        />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgInsuranceFlag);
export default Memo;
