import * as React from "react";
import { SVGProps, memo } from "react";

const SvgBlackGoogleStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 120 40"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <defs>
      <linearGradient
        x1="61.045%"
        y1="4.946%"
        x2="26.513%"
        y2="71.879%"
        id="black-google-store_svg__a"
      >
        <stop stopColor="#00A0FF" offset="0%" />
        <stop stopColor="#00A1FF" offset="1%" />
        <stop stopColor="#00BEFF" offset="26%" />
        <stop stopColor="#00D2FF" offset="51%" />
        <stop stopColor="#00DFFF" offset="76%" />
        <stop stopColor="#00E3FF" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="107.685%"
        y1="50%"
        x2="-130.64%"
        y2="50%"
        id="black-google-store_svg__b"
      >
        <stop stopColor="#FFE000" offset="0%" />
        <stop stopColor="#FFBD00" offset="41%" />
        <stop stopColor="orange" offset="78%" />
        <stop stopColor="#FF9C00" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="86.271%"
        y1="30.873%"
        x2="-50.18%"
        y2="136.109%"
        id="black-google-store_svg__c"
      >
        <stop stopColor="#FF3A44" offset="0%" />
        <stop stopColor="#C31162" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="-18.825%"
        y1="-11.91%"
        x2="42.086%"
        y2="35.079%"
        id="black-google-store_svg__d"
      >
        <stop stopColor="#32A071" offset="0%" />
        <stop stopColor="#2DA771" offset="7%" />
        <stop stopColor="#15CF74" offset="48%" />
        <stop stopColor="#06E775" offset="80%" />
        <stop stopColor="#00F076" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <rect fill="#000" width={120} height={40} rx={3.551} />
      <g fillRule="nonzero">
        <path
          d="M.464.281a1.38 1.38 0 0 0-.324.966v15.259c-.024.352.093.7.324.966l.048.055L9.06 8.98v-.207L.512.233.464.28Z"
          fill="url(#black-google-store_svg__a)"
          transform="translate(12 11.663)"
        />
        <path
          d="M11.888 11.829 9.059 8.98v-.207l2.829-2.849.062.041 3.387 1.918c.966.545.966 1.442 0 1.994l-3.373 1.917-.076.035Z"
          fill="url(#black-google-store_svg__b)"
          transform="translate(12 11.663)"
        />
        <path
          d="M11.97 11.788 9.06 8.876.463 17.472a1.118 1.118 0 0 0 1.428.048l10.079-5.732"
          fill="url(#black-google-store_svg__c)"
          transform="translate(12 11.663)"
        />
        <path
          d="M11.97 5.965 1.893.24A1.11 1.11 0 0 0 .464.28L9.06 8.876l2.912-2.91Z"
          fill="url(#black-google-store_svg__d)"
          transform="translate(12 11.663)"
        />
        <path
          d="m23.888 23.389-9.996 5.69a1.145 1.145 0 0 1-1.38 0l-.048.05.048.054c.409.308.972.308 1.38 0l10.079-5.732-.083-.062Z"
          fill="#000"
          opacity={0.2}
        />
        <path
          d="M12.464 29.038a1.38 1.38 0 0 1-.303-.972v.103c-.024.352.093.7.324.966l.048-.048-.069-.049ZM27.337 21.436l-3.45 1.953.063.062 3.387-1.918c.407-.172.688-.553.731-.993a1.283 1.283 0 0 1-.731.896Z"
          fill="#000"
          opacity={0.12}
        />
        <path
          d="m13.892 12 13.445 7.643c.372.166.644.499.731.897a1.207 1.207 0 0 0-.731-.994l-13.445-7.643c-.959-.552-1.752-.097-1.752 1.007v.104c.02-1.104.793-1.56 1.752-1.014Z"
          fill="#FFF"
          opacity={0.25}
        />
      </g>
      <text
        fontFamily="OpenSans-Bold, Open Sans"
        fontSize={12}
        fontWeight="bold"
        fill="#FFF"
        transform="translate(12 7.54)"
      >
        <tspan x={22.193} y={13}>
          {"Google Play"}
        </tspan>
        <tspan
          x={23.025}
          y={26.252}
          fontFamily="OpenSans-Regular, Open Sans"
          fontWeight="normal"
        >
          {"\u2019den indirin"}
        </tspan>
      </text>
    </g>
  </svg>
);

const Memo = memo(SvgBlackGoogleStore);
export default Memo;
