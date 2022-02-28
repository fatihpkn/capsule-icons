import * as React from "react";
import { SVGProps, memo } from "react";

const SvgNavigationCar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 29"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M6.11 22.502c.102-.04.143-.054.182-.072 3.703-1.723 7.407-3.445 11.107-5.174a.573.573 0 0 0 .25-.262c1.717-3.677 3.427-7.356 5.137-11.036.027-.058.042-.122.072-.21-.07.029-.104.041-.137.057-3.703 1.722-7.407 3.443-11.107 5.173a.659.659 0 0 0-.279.305c-.885 1.886-1.761 3.776-2.64 5.665l-2.584 5.554"
        fill="#000"
      />
      <path
        d="M15.32 28.117h-1.64c-.07-.015-.14-.04-.21-.044-1.466-.097-2.892-.397-4.233-.992C3.881 24.702.942 20.576.532 14.729c-.194-2.777.488-5.403 1.955-7.773C5.103 2.732 8.924.447 13.886.143c2.283-.14 4.488.297 6.545 1.305 4.3 2.108 6.925 5.526 7.844 10.235.104.533.148 1.077.22 1.617v1.64c-.015.078-.04.156-.046.236-.098 1.465-.41 2.885-.996 4.23-2.027 4.653-5.53 7.497-10.515 8.49-.533.106-1.078.149-1.618.221"
        fill="#2DC44D"
      />
      <path
        d="M14.495 15.653a1.532 1.532 0 0 0 1.539-1.514 1.531 1.531 0 0 0-1.527-1.553 1.537 1.537 0 0 0-1.54 1.514 1.537 1.537 0 0 0 1.528 1.553m-8.384 6.849 2.584-5.554c.879-1.889 1.755-3.779 2.64-5.665a.658.658 0 0 1 .279-.305c3.7-1.73 7.404-3.451 11.107-5.173.033-.016.067-.028.137-.056-.03.087-.045.151-.072.21-1.71 3.679-3.42 7.358-5.136 11.035a.574.574 0 0 1-.25.262c-3.701 1.729-7.405 3.451-11.108 5.174-.039.018-.08.032-.181.072"
        fill="#FFF"
      />
      <path
        d="M14.495 15.653a1.537 1.537 0 0 1-1.528-1.553c.009-.837.7-1.517 1.54-1.514a1.531 1.531 0 0 1 1.527 1.553 1.532 1.532 0 0 1-1.539 1.514"
        fill="#2DC44D"
      />
    </g>
  </svg>
);

const Memo = memo(SvgNavigationCar);
export default Memo;