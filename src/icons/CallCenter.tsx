import * as React from "react";
import { SVGProps, memo } from "react";

const SvgCallCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    {...props}
  >
    <defs>
      <path id="call-center_svg__a" d="M0 0h120v120H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <mask id="call-center_svg__b" fill="#fff">
          <use xlinkHref="#call-center_svg__a" />
        </mask>
        <path
          d="M60 120C26.916 120 0 93.084 0 60c0-6.215.947-12.342 2.813-18.21a1.865 1.865 0 1 1 3.555 1.13A56.263 56.263 0 0 0 3.731 60c0 31.027 25.243 56.27 56.27 56.27 31.027 0 56.27-25.243 56.27-56.27 0-31.027-25.243-56.27-56.27-56.27-8.77 0-17.17 1.961-24.967 5.829a1.865 1.865 0 1 1-1.658-3.343C41.693 2.092 50.65 0 60 0c33.085 0 60 26.916 60 60s-26.915 60-60 60"
          fill="#FFF"
          mask="url(#call-center_svg__b)"
        />
      </g>
      <g fill="#FFF">
        <path d="M27.636 19.59c-.49-.272-.97-.506-1.34-.597v-1.59c0-5.533-4.502-10.034-10.034-10.034C10.73 7.37 6.23 11.87 6.23 17.402v1.587c-.364.085-.846.312-1.34.579v-2.166c0-6.271 5.101-11.373 11.373-11.373 6.272 0 11.373 5.102 11.373 11.373v2.188Zm1.29.388v-2.576c0-6.982-5.68-12.663-12.664-12.663C9.28 4.739 3.6 10.419 3.6 17.402v2.509c-.8.881-1.32 2.202-.89 4.128l.848 3.031a4.535 4.535 0 0 0 4.351 3.305c4.492-.098 2.982-4.19 2.683-5.254l-.856-3.063c-.438-1.57-.89-3.184-2.216-3.615 0 0-.323-2.52.702-4.472l1.86.84s1.979-3.99 6.19-3.99c4.21 0 6.179 3.972 6.179 3.972l1.876-.769c.92 2.2.679 4.399.679 4.399-1.371.403-1.83 2.042-2.275 3.635l-.005.015-.852 3.048c-.293 1.047-1.757 5.02 2.463 5.245 0 1.781-1.45 3.677-3.23 3.677h-3.557a1.992 1.992 0 0 0-1.924-1.488h-2.407a1.99 1.99 0 0 0-1.987 1.988 1.99 1.99 0 0 0 1.987 1.988h2.407a1.99 1.99 0 0 0 1.824-1.199h3.657c2.492 0 4.52-2.595 4.52-5.087a4.538 4.538 0 0 0 3.282-3.175l.848-3.031c.42-1.878-.063-3.18-.83-4.061ZM30.549 67.175c.787-.134 1.445.412 1.445 1.199 0 .787-.658 1.558-1.445 1.692-.786.134-1.445-.412-1.445-1.199 0-.787.659-1.558 1.445-1.692Zm-3.988.68c.786-.134 1.445.412 1.445 1.2 0 .786-.659 1.558-1.445 1.692-.787.134-1.446-.412-1.446-1.2 0-.787.659-1.558 1.446-1.692Zm7.154 10.09c0 1.171-.147 2.641-1.355 4.092-1.17 1.408-2.524 1.822-3.805 2.04-1.28.219-2.635.267-3.806-.741-1.208-1.039-1.354-2.46-1.354-3.63v-7.23l2.818-.48v7.155c0 .531.037 1.421.64 1.941.494.446 1.171.44 1.702.35.53-.09 1.208-.316 1.701-.93.604-.727.64-1.63.64-2.16v-7.156l2.819-.48v7.228ZM45.205 80.577c-1.08.734-1.958.993-2.69 1.118-2.25.384-3.769-.126-4.793-.958-1.098-.873-1.903-2.347-1.903-4.304 0-1.922.805-3.67 1.903-4.919a7.833 7.833 0 0 1 4.556-2.534c.805-.137 1.738-.132 2.927.177v3.258c-.622-.552-1.555-1.034-2.854-.812-1.025.175-1.848.645-2.489 1.376-.676.774-1.152 1.844-1.152 3.015 0 1.263.513 2.072 1.061 2.51.257.212 1.134.83 2.635.574.732-.124 1.72-.494 2.8-1.74v3.24ZM50.274 73.436l.64-.11c.513-.087 1.207-.26 1.684-.818.2-.235.457-.663.457-1.268 0-.695-.33-1.005-.568-1.147-.456-.27-1.189-.181-1.555-.119l-.658.112v3.35Zm1.463-5.795c1.555-.266 2.526.081 3.111.53.512.407 1.061 1.192 1.061 2.546 0 .769-.164 1.748-.951 2.651a4.81 4.81 0 0 1-1.702 1.224l3.751 4.356-3.44.587-3.293-4.251v4.813l-2.818.48V68.372l4.281-.73ZM65.46 67.678l-4.08.696v2.361l3.88-.662v2.379l-3.88.662v2.709l4.08-.697v2.38l-6.897 1.176V66.476l6.897-1.177zM72.03 66.557v9.828l-2.818.48v-9.827l-2.654.453v-2.38l8.124-1.385v2.379zM81.946 65.47c-.914-.668-1.701-.588-2.05-.53-.383.067-.86.202-1.188.625a1.29 1.29 0 0 0-.312.821c0 .293.092.497.275.63.292.225.713.263 1.537.433l.915.192c.53.111 1.19.273 1.665.65.713.555.896 1.402.896 2.115 0 1.263-.439 2.437-1.079 3.205-1.08 1.318-2.653 1.697-3.458 1.834-.878.15-1.647.153-2.415-.1-.622-.205-1.336-.65-1.793-1.03l1.463-2.263c.312.258.805.594 1.135.74.475.211.97.274 1.537.177.366-.063.878-.223 1.28-.64.238-.242.44-.605.44-1.063 0-.403-.165-.63-.422-.806-.328-.219-1.078-.366-1.427-.434l-1.006-.176c-.567-.104-1.225-.249-1.702-.68-.64-.568-.731-1.412-.731-1.998 0-1.08.33-2.05 1.061-2.926.86-1.025 1.885-1.438 3.02-1.631.84-.143 2.194-.228 3.622.59l-1.263 2.265ZM88.588 61.353v12.206l-2.817.482V61.833l2.817-.48Zm-1.408-4.024c.878-.15 1.555.412 1.555 1.29 0 .879-.677 1.671-1.555 1.821-.879.15-1.556-.412-1.556-1.29 0-.878.677-1.67 1.556-1.82ZM95.01 70.085l5.233-.893v2.379l-9.861 1.683 5.855-10.827-4.904.837v-2.38l9.514-1.623zM29.919 97.355l-1.195 1.624-.684-.224.96-1.649.919.25Zm1.473-6.681a2.436 2.436 0 0 0-1.932-.46c-1.548.264-2.594 1.585-2.594 3.155 0 1.506 1.089 2.484 2.605 2.226.854-.146 1.515-.696 1.92-1.15v1.292a4.53 4.53 0 0 1-1.953.867c-1.291.22-2.102-.229-2.518-.553-.833-.638-1.142-1.493-1.142-2.497 0-1.314.543-2.314 1.142-2.982.736-.82 1.59-1.2 2.572-1.368.651-.111 1.28-.101 1.9.188v1.282ZM36.379 92.536l-1.057-2.234-1.1 2.602 2.157-.368Zm.438.951-3.043.519-.778 1.853-1.175.2 3.544-8.145 3.373 6.965-1.175.2-.746-1.592ZM44.643 84.537c-.064.342-.225.71-.427.99-.203.281-.651.732-1.388.857-.736.126-1.184-.172-1.387-.383a1.766 1.766 0 0 1-.428-.845l.876-.15a.754.754 0 0 0 .363.462c.202.104.406.091.576.062.171-.03.374-.086.577-.259.16-.134.299-.35.362-.585l.876-.15Zm-1.484 5.881 2.935-.5v.052c0 1.218-.362 2.273-1.056 3.065-.737.84-1.612 1.182-2.423 1.32-1.036.178-1.772.004-2.423-.558-.694-.597-1.057-1.485-1.057-2.51 0-1.111.448-2.15 1.035-2.837a4.598 4.598 0 0 1 2.68-1.525c.64-.11 1.302-.083 1.857.132.587.23.95.585 1.153.871l-.865.757a2.264 2.264 0 0 0-.875-.663c-.395-.168-.822-.17-1.26-.095a3.123 3.123 0 0 0-1.878 1.058c-.47.55-.758 1.357-.758 2.126 0 .715.267 1.386.737 1.807.49.44 1.099.529 1.782.412.62-.105 1.131-.375 1.59-.901.395-.452.555-.896.598-1.31l-1.772.303v-1.004ZM48.552 89.349l.342-.059c.299-.05 1.516-.29 1.516-1.423 0-1.004-.95-.938-1.484-.847l-.374.064v2.265Zm.182-3.3c.864-.147 1.42-.135 1.879.096.779.39.843 1.224.843 1.533 0 1.025-.63 1.88-1.58 2.256l2.22 2.666-1.313.223-2.038-2.567-.193.032v2.916l-1.089.186v-7.124l1.27-.217ZM54.254 85.107v7.124l-1.088.186v-7.124zM58.238 91.551l1.494-7.912 2.476 5.109 2.498-5.958 1.345 7.428-1.11.19-.726-4.17-2.071 4.978-2.05-4.286-.746 4.432zM71.476 83.194l-2.839.484v1.805l2.754-.469v1.026l-2.754.469v2.242l2.84-.484v1.025l-3.928.67V82.84l3.927-.67zM73.976 85.01l.342-.058c.298-.05 1.515-.29 1.515-1.422 0-1.004-.95-.938-1.483-.847l-.374.064v2.264Zm.181-3.299c.865-.147 1.42-.135 1.88.096.778.39.842 1.224.842 1.533 0 1.025-.63 1.881-1.58 2.257l2.22 2.665-1.312.224-2.039-2.568-.192.033v2.915l-1.09.186v-7.124l1.271-.217ZM79.678 83.61l2.754-3.31 1.43-.244-3.213 3.774 3.234 3.346-1.451.247-2.541-2.727-.213.25v2.947l-1.09.186v-7.124l1.09-.186zM88.774 80.243l-2.839.484v1.805l2.754-.47v1.026l-2.754.47V85.8l2.839-.484v1.025l-3.928.67v-7.123l3.928-.67zM91.423 84.864l3.416-.583v1.025l-5.188.886 3.501-6.696-2.924.499v-1.026l4.696-.8zM97.19 77.781v7.124l-1.09.186v-7.124l1.09-.186Zm-.545-2.053c.405-.07.715.188.715.594 0 .405-.31.767-.715.837-.406.068-.715-.188-.715-.593 0-.407.31-.77.715-.838ZM34.324 40.88l-10.165 1.754v-5.376l20-3.448-13.967 26.798-6.984 1.204zM54.033 29.84l4.79-.826-18.722 36.76-4.753.82zM77.143 52.512 57.58 55.885l6.18-7.537c2.194-2.682 3.84-4.977 5.01-7.044.657-1.138 1.316-2.458 1.316-4.03 0-.256 0-1.536-.731-2.214-.366-.34-.988-.561-1.792-.422a3.224 3.224 0 0 0-2.121 1.353c-.585.868-.841 2.302-.878 3.15l-6.545 1.128c.037-3.188 1.426-5.731 2.706-7.232 1.646-1.93 3.876-3.3 6.91-3.824 3.658-.63 5.778.43 6.875 1.337.987.818 2.377 2.443 2.377 5.588 0 3.071-1.427 5.438-3.62 7.865l-4.095 4.508 7.97-1.374v5.375ZM89.32 40.942v-9.946l-5.741 10.936 5.74-.99Zm5.85-1.009 2.961-.51v4.863l-2.961.51v4.608l-5.85 1.009v-4.608l-11.811 2.037v-4.06l9.397-17.343 8.264-1.425v14.92Z" />
      </g>
    </g>
  </svg>
);

const Memo = memo(SvgCallCenter);
export default Memo;
