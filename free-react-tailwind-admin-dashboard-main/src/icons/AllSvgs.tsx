interface Props {
  className?: string;
  color?: string;
}

export const CheckCircleSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const ErrorSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
    />
  </svg>
);

export const CertificateSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      fill="currentColor"
      d="M126 136a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6-38H72a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m110 62.62V224a6 6 0 0 1-9 5.21l-25-14.3l-25 14.3a6 6 0 0 1-9-5.21v-26H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v31.38a49.91 49.91 0 0 1 0 73.24M196 86a38 38 0 1 0 38 38a38 38 0 0 0-38-38m-34 100v-25.38a50 50 0 0 1 56-81.51V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2Zm56-17.11a49.91 49.91 0 0 1-44 0v44.77l19-10.87a6 6 0 0 1 6 0l19 10.87Z"
    />
  </svg>
);

export const WarningSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M2.725 21q-.275 0-.5-.138t-.35-.362q-.125-.225-.138-.488t.138-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137H2.725Zm1.725-2h15.1L12 6L4.45 19ZM12 18q.425 0 .713-.288T13 17q0-.425-.288-.713T12 16q-.425 0-.713.288T11 17q0 .425.288.713T12 18Zm0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.713T12 10q-.425 0-.713.288T11 11v3q0 .425.288.713T12 15Zm0-2.5Z"
    />
  </svg>
);

export const InfoSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M12 17q.425 0 .713-.288T13 16v-4.025q0-.425-.288-.7T12 11q-.425 0-.713.288T11 12v4.025q0 .425.288.7T12 17Zm0-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-10Zm0 8q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 3.325 2.337 5.663T12 20Z"
    />
  </svg>
);

export const CrossSvg = ({ className }: Props) => (
  <svg viewBox="0 0 16 16" className={className}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
    />
  </svg>
);

export const ChevronRightSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
);

export const DownArrowSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="m12.75 16.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V6.5a.75.75 0 0 1 1.5 0v9.69Z"
    />
  </svg>
);

export const ChevronLeftSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="m13.3 17.3l-4.6-4.6q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
    />
  </svg>
);

export const confirmPasswordSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M14 15c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2m-.91 5c.12.72.37 1.39.72 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2h1a2 2 0 0 1 2 2v3.09c-.33-.05-.66-.09-1-.09c-.34 0-.67.04-1 .09V10H6v10h7.09M9 8h6V6c0-1.66-1.34-3-3-3S9 4.34 9 6v2m12.34 7.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75l-1.16-1.41Z"
    />
  </svg>
);

export const UserOutlineSvg = ({ className }: Props) => (
  <svg width="24" height="24" viewBox="0 0 36 36" className={className}>
    <path
      fill="currentColor"
      d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5Z"
    />
    <path
      fill="currentColor"
      d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37ZM29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export const MobileSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

export const EmailSvg = ({ className }: Props) => (
  <svg viewBox="0 0 36 36" className={className}>
    <path
      fill="currentColor"
      d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export const LockSvg = ({ className }: Props) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    ></path>
  </svg>
);

export const MembersSvg = ({ className }: Props) => (
  <svg viewBox="0 0 32 32" className={className}>
    <path
      fill="currentColor"
      d="M26 14h-2v2h2a3.003 3.003 0 0 1 3 3v4h2v-4a5.006 5.006 0 0 0-5-5zM24 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm-1 28h-2v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2H9v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zm-7-17a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm-8 3H6a5.006 5.006 0 0 0-5 5v4h2v-4a3.003 3.003 0 0 1 3-3h2zM8 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z"
    />
  </svg>
);

export const DomainSvg = ({ className }: Props) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);

export const LoadingSpinnerSvg = ({ className }: Props) => (
  <svg
    stroke="#fff"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <circle
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          dur="1.5s"
          calcMode="spline"
          values="0 150;42 150;42 150;42 150"
          keyTimes="0;0.475;0.95;1"
          keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          dur="1.5s"
          calcMode="spline"
          values="0;-16;-59;-59"
          keyTimes="0;0.475;0.95;1"
          keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
          repeatCount="indefinite"
        />
      </circle>
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="2s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export const EyeOpenSvg = ({ className }: Props) => (
  <svg viewBox="0 0 16 16" className={className}>
    <path
      fill="currentColor"
      d="M8 6.003a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334Zm0 1a1.667 1.667 0 1 0 0 3.334a1.667 1.667 0 0 0 0-3.334Zm0-3.336c3.076 0 5.73 2.1 6.467 5.043a.5.5 0 1 1-.97.242a5.67 5.67 0 0 0-10.995.004a.5.5 0 0 1-.97-.243A6.669 6.669 0 0 1 8 3.667Z"
    />
  </svg>
);

export const EyeClosedSvg = ({ className }: Props) => (
  <svg viewBox="0 0 16 16" className={className}>
    <path
      fill="currentColor"
      d="M1.48 1.48a.5.5 0 0 0-.049.65l.049.057l2.69 2.69A6.657 6.657 0 0 0 1.533 8.71a.5.5 0 0 0 .97.242a5.66 5.66 0 0 1 2.386-3.356l1.207 1.207a2.667 2.667 0 0 0 3.771 3.771l3.946 3.946a.5.5 0 0 0 .756-.65l-.049-.057l-4.075-4.076v-.001l-.8-.799l-1.913-1.913h.001l-1.92-1.919v-.001l-.755-.754l-2.871-2.87a.5.5 0 0 0-.707 0Zm5.323 6.03l2.356 2.357A1.667 1.667 0 0 1 6.802 7.51ZM8 3.667c-.667 0-1.314.098-1.926.283l.825.824a5.669 5.669 0 0 1 6.6 4.181a.5.5 0 0 0 .97-.242A6.669 6.669 0 0 0 8 3.667Zm.13 2.34l2.534 2.533A2.668 2.668 0 0 0 8.13 6.006Z"
    />
  </svg>
);

export const LogOutSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12H3.62"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CollapseSvg = ({ className }: Props) => (
  <svg viewBox="-5 -3 24 24" className={className}>
    <path
      fill="currentColor"
      d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"
    />
  </svg>
);

export const ExpandSvg = ({ className }: Props) => (
  <svg viewBox="-5 -3 24 24" className={className}>
    <path
      fill="currentColor"
      d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95l1.121-1.122zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"
    />
  </svg>
);

export const UserCircleSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
    />
  </svg>
);

export const DashboardSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2V5Zm12-2h6a2 2 0 0 1 2 2v5h-8V3Zm0 11h8v5a2 2 0 0 1-2 2h-6v-7Z"
    />
  </svg>
);

export const SearchSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
    />
  </svg>
);

export const NotificationSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
      <path
        fill="blue"
        d="M15 19a2 2 0 0 1-1.85 1.995L13 21h-2a2 2 0 0 1-1.995-1.85L9 19h6ZM12 2a7 7 0 0 1 6.996 6.76L19 9v3.764l1.822 3.644a1.1 1.1 0 0 1-.869 1.586l-.115.006H4.162a1.1 1.1 0 0 1-1.03-1.487l.046-.105L5 12.764V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-4.995 4.783L7 9v3.764a2 2 0 0 1-.136.725l-.075.17L5.619 16h12.763l-1.17-2.342a2.002 2.002 0 0 1-.203-.709L17 12.764V9a5 5 0 0 0-5-5Z"
      />
    </g>
  </svg>
);

export const ChevronDownSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m6 9l6 6l6-6"
    />
  </svg>
);

export const CommunicationSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
      <path strokeLinejoin="round" d="M33 38H22v-8h14v-8h8v16h-5l-3 3l-3-3Z" />
      <path strokeLinejoin="round" d="M4 6h32v24H17l-4 4l-4-4H4V6Z" />
      <path d="M19 18h1m6 0h1m-15 0h1" />
    </g>
  </svg>
);

export const VacancySvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M4 21q-.825 0-1.413-.588T2 19V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.588 1.413T20 21H4Zm0-2h16V8H4v11Zm6-13h4V4h-4v2ZM4 19V8v11Z"
    />
  </svg>
);

export const SettingsSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M1.911 7.383a8.491 8.491 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.532 8.532 0 0 1 3.554 0a.5.5 0 0 1 .388.4l.366 2.006a1 1 0 0 0 1.32.762l1.919-.686a.5.5 0 0 1 .54.136a8.491 8.491 0 0 1 1.78 3.079a.5.5 0 0 1-.153.535l-1.555 1.32a1 1 0 0 0 0 1.524l1.555 1.32a.5.5 0 0 1 .152.535a8.491 8.491 0 0 1-1.78 3.08a.5.5 0 0 1-.54.135l-1.918-.686a1 1 0 0 0-1.32.762l-.366 2.007a.5.5 0 0 1-.388.399a8.528 8.528 0 0 1-3.554 0a.5.5 0 0 1-.388-.4l-.366-2.006a1 1 0 0 0-1.32-.762l-1.918.686a.5.5 0 0 1-.54-.136a8.49 8.49 0 0 1-1.78-3.079a.5.5 0 0 1 .152-.535l1.555-1.32a1 1 0 0 0 0-1.524l-1.555-1.32a.5.5 0 0 1-.152-.535Zm1.06-.006l1.294 1.098a2 2 0 0 1 0 3.05l-1.293 1.098c.292.782.713 1.51 1.244 2.152l1.596-.57a2 2 0 0 1 2.64 1.525l.305 1.668a7.556 7.556 0 0 0 2.486 0l.304-1.67a1.998 1.998 0 0 1 2.641-1.524l1.596.571a7.492 7.492 0 0 0 1.245-2.152l-1.294-1.098a1.998 1.998 0 0 1 0-3.05l1.294-1.098a7.491 7.491 0 0 0-1.245-2.152l-1.596.57a2 2 0 0 1-2.64-1.524l-.305-1.669a7.555 7.555 0 0 0-2.486 0l-.304 1.669a2 2 0 0 1-2.64 1.525l-1.597-.571a7.491 7.491 0 0 0-1.244 2.152ZM7.502 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Zm1 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
    />
  </svg>
);

export const HomeSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
    </g>
  </svg>
);

export const HospitalSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 25c39.3 0 71 31.68 71 71c0 39.3-31.7 71-71 71s-71-31.7-71-71c0-39.32 31.7-71 71-71zm18 23h-36v30h-30v36h30v30h36v-30h30V78h-30zm101 89v350h-78v-80h-82v80h-78V137h40.1c2.5 5 5.6 9.6 9 14H151v50h50v-35.1c8.8 6.9 19 12.3 30 15.5V201h50v-19.6c11-3.2 21.2-8.6 30-15.5V201h50v-50h-35.1c3.4-4.4 6.5-9 9-14zm-32 32v14h-14v-14zm-160 0v14h-14v-14zm288 32v286h-78V201zm-352 0v286H41V201zm338 14h-50v82h50v-73zm-96 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-96 0H55v82h50v-73zm334 18v46h-14v-46zm-96 0v46h-14v-46zm-80 0v46h-14v-46zm-80 0v46h-14v-46zm-96 0v46H73v-46zm370 78h-50v82h50v-73zm-96 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-80 0h-50v82h50v-73zm-96 0H55v82h50v-73zm334 18v46h-14v-46zm-96 0v46h-14v-46zm-80 0v46h-14v-46zm-80 0v46h-14v-46zm-96 0v46H73v-46zm370 78h-50v50h50v-41zm-96 0h-50v50h50v-41zm-160 0h-50v50h50v-41zm-96 0H55v50h50v-41zm334 18v14h-14v-14zm-96 0v14h-14v-14zm-64 0v62h-46v-62zm-96 0v14h-14v-14zm-96 0v14H73v-14z"
    />
  </svg>
);

export const UsersSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
  >
    <g fill="currentColor">
      <path d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52Z" opacity=".2" />
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07Z" />
    </g>
  </svg>
);

export const CheckSvg = ({ className, color }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill={color}
      d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
    />
  </svg>
);

export const QuerySvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle
      cx="7"
      cy="7"
      r="6.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1"
    />
    <path
      fill="currentColor"
      d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z"
    />
  </svg>
);

export const ThinRightArrowSvg = ({ className, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={color}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 17l5-5l-5-5"
    />
  </svg>
);

export const NextButton = ({ className, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={color}
      stroke="#0076d3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10 17l5-5l-5-5"
    />
  </svg>
);

export const PrevButton = ({ className, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={color}
      stroke="#0076d3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14 7l-5 5l5 5"
    />
  </svg>
);

export const RightArrowSvg = ({ className, color }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill={color}
      d="M13.3 17.275q-.3-.3-.288-.725q.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713q0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275q-.413 0-.713-.3Z"
    />
  </svg>
);

export const LeftArrowSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"
    />
  </svg>
);

export const ChevronUpSvg = ({ className }: Props) => (
  <svg viewBox="0 2.4 24 24" className={className}>
    <path
      fill="currentColor"
      d="M6.7 17.1q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212t.375-.063q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.2l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"
    />
  </svg>
);

export const SortSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M16.29 14.29L12 18.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.42-1.42ZM7.71 9.71L12 5.41l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42Z"
    />
  </svg>
);

export const EditSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3.548 20.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1ZM9.71 17.18a2.587 2.587 0 0 0 1.12-.65l9.54-9.54a1.75 1.75 0 0 0 0-2.47l-.94-.93a1.788 1.788 0 0 0-2.47 0l-9.54 9.53a2.473 2.473 0 0 0-.64 1.12L6.04 17a.737.737 0 0 0 .19.72a.767.767 0 0 0 .53.22Zm.41-1.36a1.468 1.468 0 0 1-.67.39l-.97.26l-1-1l.26-.97a1.521 1.521 0 0 1 .39-.67l.38-.37l1.99 1.99Zm1.09-1.08l-1.99-1.99l6.73-6.73l1.99 1.99Zm8.45-8.45L18.65 7.3l-1.99-1.99l1.01-1.02a.748.748 0 0 1 1.06 0l.93.94a.754.754 0 0 1 0 1.06Z"
    />
  </svg>
);

export const DeleteSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="red"
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
    />
  </svg>
);

export const TableExportSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.5 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.5M4 10h16M10 4v16m4-1h7m-3-3l3 3l-3 3"
    />
  </svg>
);

export const AddSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
    />
    <path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
  </svg>
);

export const ImageOutlineSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17Zm-2 4q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
    />
  </svg>
);

export const UploadSvg = ({ className }: Props) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M12 16q-.425 0-.713-.288T11 15V7.85L9.125 9.725q-.3.3-.7.3T7.7 9.7q-.3-.3-.287-.712T7.7 8.3l3.6-3.6q.15-.15.325-.212T12 4.425q.2 0 .375.063t.325.212l3.6 3.6q.3.3.288.713T16.3 9.7q-.3.3-.713.313t-.712-.288L13 7.85V15q0 .425-.288.713T12 16Zm-6 4q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"
    />
  </svg>
);

export const BulkDeleteSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      d="M8 2.002a1.998 1.998 0 1 0 0 3.996a1.998 1.998 0 0 0 0-3.996ZM12.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm-9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM5 7.993A1 1 0 0 1 6 7h2.337A5.493 5.493 0 0 0 6 11.5c0 .717.137 1.402.387 2.03A3.007 3.007 0 0 1 5 11V7.993ZM4 8c0-.365.097-.706.268-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 3.436 2.319A3.983 3.983 0 0 1 4 10.999V8Zm12 3.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L11.5 10.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L12.207 11.5l1.147-1.146Z"
    />
  </svg>
);

export const InventorySvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m15.5 19.925l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4l-7.05 7.05ZM21 10h-2V5h-2v3H7V5H5v14h6v2H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v5Zm-9-5q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5Z"
    />
  </svg>
);

export const StaffSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372a9.337 9.337 0 0 0 4.121-.952a4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

export const ReportsSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z"
    />
  </svg>
);

export const HandleSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11 11V5.828L9.172 7.657L7.757 6.243L12 2l4.243 4.243l-1.415 1.414L13 5.828V11h5.172l-1.829-1.828l1.414-1.415L22 12l-4.243 4.243l-1.414-1.415L18.172 13H13v5.172l1.828-1.829l1.415 1.414L12 22l-4.243-4.243l1.415-1.414L11 18.172V13H5.828l1.829 1.828l-1.414 1.415L2 12l4.243-4.243l1.414 1.415L5.828 11H11Z"
    />
  </svg>
);

export const DocumentSvg = ({ className }: Props) => (
  <svg viewBox="0 0 50 50" className={className}>
    <path
      d="M41.7305 16.082L30.793 5.14453C30.6478 4.99948 30.4754 4.88446 30.2857 4.80604C30.096 4.72762 29.8928 4.68734 29.6875 4.6875H10.9375C10.1087 4.6875 9.31384 5.01674 8.72779 5.60279C8.14174 6.18884 7.8125 6.9837 7.8125 7.8125V42.1875C7.8125 43.0163 8.14174 43.8112 8.72779 44.3972C9.31384 44.9833 10.1087 45.3125 10.9375 45.3125H39.0625C39.8913 45.3125 40.6862 44.9833 41.2722 44.3972C41.8583 43.8112 42.1875 43.0163 42.1875 42.1875V17.1875C42.1877 16.9822 42.1474 16.779 42.069 16.5893C41.9905 16.3996 41.8755 16.2272 41.7305 16.082ZM31.25 10.0215L36.8535 15.625H31.25V10.0215ZM39.0625 42.1875H10.9375V7.8125H28.125V17.1875C28.125 17.6019 28.2896 17.9993 28.5826 18.2924C28.8757 18.5854 29.2731 18.75 29.6875 18.75H39.0625V42.1875Z"
      fill="currentColor"
    />
  </svg>
);

export const FormSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M5.5 5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1ZM8 13.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0Zm2-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 3.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
    />
  </svg>
);

export const BellSvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
  >
    <path fill="currentColor" d="M295.68 351.43v.57h.32Z" />
    <path
      fill="none"
      d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32Zm39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57Z"
    />
    <path
      fill="currentColor"
      d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32Zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"
    />
  </svg>
);

export const DoctorsSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 26 26"
    className={className}
  >
    <path
      fill="currentColor"
      d="M10 1C8.355 1 7 2.355 7 4v2h2V4c0-.563.437-1 1-1h6c.563 0 1 .437 1 1v2h2V4c0-1.645-1.355-3-3-3h-6zM3 7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h20c1.656 0 3-1.344 3-3V10a3 3 0 0 0-3-3H3zm10 2.906A6.089 6.089 0 0 1 19.094 16A6.089 6.089 0 0 1 13 22.094A6.089 6.089 0 0 1 6.906 16A6.089 6.089 0 0 1 13 9.906zM12 13v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z"
    />
  </svg>
);

export const LocationSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.971 6.971 0 0 0 19 9zm-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"
    />
  </svg>
);

export const ServicesSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    className={className}
  >
    <circle
      cx="9.379"
      cy="9.379"
      r="3.879"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9.379"
      cy="38.621"
      r="3.879"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9.379"
      cy="24"
      r="3.879"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      width="25.064"
      height="7.758"
      x="17.436"
      y="5.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx="1.79"
      ry="1.79"
    />
    <rect
      width="25.064"
      height="7.758"
      x="17.436"
      y="34.742"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx="1.79"
      ry="1.79"
    />
    <rect
      width="25.064"
      height="7.758"
      x="17.436"
      y="20.121"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx="1.79"
      ry="1.79"
    />
  </svg>
);

export const TickSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    className={className}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
      <path d="m5.75 7.75l2.5 2.5l6-6.5" />
    </g>
  </svg>
);

export const LibrarySvg = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 512 512"
  >
    <rect
      width="64"
      height="368"
      x="32"
      y="96"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      rx="16"
      ry="16"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M112 224h128M112 400h128"
    />
    <rect
      width="128"
      height="304"
      x="112"
      y="160"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      rx="16"
      ry="16"
    />
    <rect
      width="96"
      height="416"
      x="256"
      y="48"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      rx="16"
      ry="16"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      d="m422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89Z"
    />
  </svg>
);

export const HorizontalDotsSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 20 20"
    className={className}
  >
    <path
      fill="currentColor"
      d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
    />
  </svg>
);

export const GraduationCapSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"
    />
  </svg>
);

export const VerifiedSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"
    />
  </svg>
);

export const ProgramSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"
    />
  </svg>
);

export const CopySvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593c.734-.737 1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0 0 15.24 2"
    />
    <path
      fill="currentColor"
      d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847c.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"
    />
  </svg>
);

export const PartnerSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"
    />
  </svg>
);

export const DragHandleSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 36 36"
    className={className}
  >
    <circle
      cx={15}
      cy={12}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <circle
      cx={15}
      cy={24}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <circle
      cx={21}
      cy={12}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <circle
      cx={21}
      cy={24}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-4"
    />
    <circle
      cx={21}
      cy={18}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-5"
    />
    <circle
      cx={15}
      cy={18}
      r="1.5"
      fill="currentColor"
      className="clr-i-outline clr-i-outline-path-6"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export const DownRightSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={256}
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      fill="currentColor"
      d="m226.83 154.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 156H128A100.11 100.11 0 0 1 28 56a4 4 0 0 1 8 0a92.1 92.1 0 0 0 92 92h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"
    />
  </svg>
);

export const QRSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 36 36"
    className={className}
  >
    <path
      fill="currentColor"
      d="M5.6 4A1.6 1.6 0 0 0 4 5.6V12h8V4Zm4.4 6H6V6h4Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <path
      fill="currentColor"
      d="M4 30.4A1.6 1.6 0 0 0 5.6 32H12v-8H4ZM6 26h4v4H6Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <path
      fill="currentColor"
      d="M24 32h6.4a1.6 1.6 0 0 0 1.6-1.6V24h-8Zm2-6h4v4h-4Z"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <path
      fill="currentColor"
      d="M30.4 4H24v8h8V5.6A1.6 1.6 0 0 0 30.4 4m-.4 6h-4V6h4Z"
      className="clr-i-outline clr-i-outline-path-4"
    />
    <path
      fill="currentColor"
      d="M20 10V8h-4v4h2v-2z"
      className="clr-i-outline clr-i-outline-path-5"
    />
    <path
      fill="currentColor"
      d="M12 12h2v2h-2z"
      className="clr-i-outline clr-i-outline-path-6"
    />
    <path
      fill="currentColor"
      d="M14 14h4v2h-4z"
      className="clr-i-outline clr-i-outline-path-7"
    />
    <path
      fill="currentColor"
      d="M20 6v2h2V4h-8v4h2V6z"
      className="clr-i-outline clr-i-outline-path-8"
    />
    <path
      fill="currentColor"
      d="M4 14h2v4H4z"
      className="clr-i-outline clr-i-outline-path-9"
    />
    <path
      fill="currentColor"
      d="M12 16v2h-2v-4H8v4H6v2H4v2h4v-2h2v2h2v-2h2v-4z"
      className="clr-i-outline clr-i-outline-path-10"
    />
    <path
      fill="currentColor"
      d="M20 16h2v2h2v-2h2v-2h-4v-4h-2v2h-2v2h2z"
      className="clr-i-outline clr-i-outline-path-11"
    />
    <path
      fill="currentColor"
      d="M18 30h-4v2h8v-2h-2v-2h-2z"
      className="clr-i-outline clr-i-outline-path-12"
    />
    <path
      fill="currentColor"
      d="M22 20v-2h-2v-2h-2v2h-2v2h2v2h2v-2z"
      className="clr-i-outline clr-i-outline-path-13"
    />
    <path
      fill="currentColor"
      d="M30 20h2v2h-2z"
      className="clr-i-outline clr-i-outline-path-14"
    />
    <path
      fill="currentColor"
      d="M22 20h6v2h-6z"
      className="clr-i-outline clr-i-outline-path-15"
    />
    <path
      fill="currentColor"
      d="M30 14h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
      className="clr-i-outline clr-i-outline-path-16"
    />
    <path
      fill="currentColor"
      d="M20 22h2v6h-2z"
      className="clr-i-outline clr-i-outline-path-17"
    />
    <path
      fill="currentColor"
      d="M14 28h2v-2h2v-2h-2v-4h-2z"
      className="clr-i-outline clr-i-outline-path-18"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
);

export const ProgramContentSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 28 28"
    className={className}
  >
    <path
      fill="currentColor"
      d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zM6 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5zm-2 7.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm8.75-2.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20.25 21h-3a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25z"
    />
  </svg>
);

export const DataSourceSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
    className={className}
  >
    <defs>
      <mask id="ipSSourceCode0">
        <g fill="none">
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M23 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v14.882"
          />
          <path
            fill="#fff"
            stroke="#fff"
            strokeWidth="4"
            d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="m34 33l-4 4l4 4m6-8l4 4l-4 4"
          />
          <circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)" />
          <circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)" />
        </g>
      </mask>
    </defs>
    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSourceCode0)" />
  </svg>
);

export const WebSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    className={className}
  >
    <path
      fill="currentColor"
      d="M136.13 187.77a6 6 0 0 1 0 8.49l-9.95 9.94a54 54 0 0 1-76.38-76.38l24.11-24.12a54 54 0 0 1 74.09-2.19a6 6 0 1 1-8 9a42 42 0 0 0-57.6 1.71L58.28 138.3a42 42 0 0 0 59.42 59.42l9.94-9.95a6 6 0 0 1 8.49 0m70.07-138a54.06 54.06 0 0 0-76.38 0l-9.95 9.94a6 6 0 0 0 8.49 8.49l9.94-10a42 42 0 0 1 59.42 59.42l-24.12 24.19a42 42 0 0 1-57.6 1.71a6 6 0 1 0-8 9a54 54 0 0 0 74.07-2.19l24.11-24.12a54 54 0 0 0 .02-76.41Z"
    />
  </svg>
);

export const FacebookSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
    />
  </svg>
);

export const TwitterSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
    />
  </svg>
);
