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

export const EyeIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
    />
  </svg>
);

export const EyeOffIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
    />
  </svg>
);
