export const LoadingIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g fill="currentColor">
      <circle cx="12" cy="3.5" r="1.5">
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="2.4s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;90 12 12;180 12 12;270 12 12"
        />
        <animate
          attributeName="opacity"
          dur="0.6s"
          repeatCount="indefinite"
          values="1;1;0"
        />
      </circle>
      <circle cx="12" cy="3.5" r="1.5" transform="rotate(30 12 12)">
        <animateTransform
          attributeName="transform"
          begin="0.2s"
          calcMode="discrete"
          dur="2.4s"
          repeatCount="indefinite"
          type="rotate"
          values="30 12 12;120 12 12;210 12 12;300 12 12"
        />
        <animate
          attributeName="opacity"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
          values="1;1;0"
        />
      </circle>
      <circle cx="12" cy="3.5" r="1.5" transform="rotate(60 12 12)">
        <animateTransform
          attributeName="transform"
          begin="0.4s"
          calcMode="discrete"
          dur="2.4s"
          repeatCount="indefinite"
          type="rotate"
          values="60 12 12;150 12 12;240 12 12;330 12 12"
        />
        <animate
          attributeName="opacity"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
          values="1;1;0"
        />
      </circle>
    </g>
  </svg>
);

export const LogoutIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
    />
  </svg>
);
