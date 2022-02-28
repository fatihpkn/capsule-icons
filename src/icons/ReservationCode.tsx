import * as React from "react";
import { SVGProps, memo } from "react";

const SvgReservationCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g transform="translate(-1 -5)" fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect fill="#53605E" x={1} y={5} width={22} height={15.6} rx={2} />
      <path
        d="M5.67 15.8V9.804H4.628l-1.932 1.538.611.762.69-.553c.082-.066.228-.204.438-.414l-.02.623-.012.57v3.47H5.67ZM11.523 15.8v-1.066H8.91v-.058l.771-.726c.514-.47.873-.832 1.077-1.087.204-.254.354-.502.451-.744.097-.242.146-.501.146-.777 0-.318-.08-.6-.238-.845a1.584 1.584 0 0 0-.669-.575 2.283 2.283 0 0 0-.992-.205c-.285 0-.542.028-.771.084-.23.057-.442.136-.636.24a4.495 4.495 0 0 0-.734.534l.689.816c.238-.197.466-.349.685-.455.218-.107.444-.16.676-.16.222 0 .399.058.532.176.132.118.199.297.199.537 0 .162-.03.317-.09.468-.06.15-.16.314-.296.49-.137.176-.428.493-.874.95l-1.505 1.521v.882h4.192ZM13.84 15.882c.777 0 1.374-.16 1.793-.482.418-.321.627-.77.627-1.347 0-.397-.124-.712-.373-.946-.249-.233-.615-.38-1.1-.44v-.025c.41-.099.73-.28.956-.542.227-.262.34-.58.34-.955 0-.449-.179-.799-.539-1.05-.36-.252-.85-.378-1.47-.378-.757 0-1.41.197-1.956.591l.586.874c.249-.162.475-.275.679-.34.204-.066.404-.1.6-.1.57 0 .854.228.854.682 0 .295-.107.503-.322.625-.215.122-.554.183-1.02.183h-.463v.972h.456c.503 0 .869.058 1.099.176.23.118.344.317.344.599 0 .314-.1.543-.3.685-.199.142-.508.213-.926.213-.274 0-.55-.037-.829-.11a3.912 3.912 0 0 1-.767-.288v1.079c.504.216 1.08.324 1.731.324ZM20.526 9.804v3.769h.722v.984h-.722V15.8h-1.239v-1.243h-2.56v-.882l2.63-3.871h1.169Zm-1.186 1.451h-.032l-.108.223a4.67 4.67 0 0 1-.257.434l-1.1 1.66h1.444v-1.016a28.467 28.467 0 0 1 .037-1.079l.009-.144.007-.078Z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const Memo = memo(SvgReservationCode);
export default Memo;
