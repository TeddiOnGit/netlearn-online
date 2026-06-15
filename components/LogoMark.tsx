/** Icon-only Netlearn mark (monitor + circuit), tight square viewBox. */
export default function LogoMark({ className }: { className?: string }) {
  const uid = "nlm";
  return (
    <svg
      className={className}
      viewBox="0 0 150 150"
      role="img"
      aria-label="Netlearn"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${uid}-grad`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1fb6d4" />
          <stop offset="45%" stopColor="#2a9dc8" />
          <stop offset="100%" stopColor="#0a4da8" />
        </linearGradient>
        <linearGradient id={`${uid}-cyan`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4fe0ea" />
          <stop offset="100%" stopColor="#2a9dc8" />
        </linearGradient>
      </defs>

      <rect
        x="14"
        y="34"
        width="92"
        height="68"
        rx="11"
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth="8"
      />
      <path d="M50 102 L46 116 H74 L70 102 Z" fill={`url(#${uid}-grad)`} />
      <rect x="38" y="116" width="44" height="8" rx="4" fill={`url(#${uid}-grad)`} />

      <path
        d="M58 80 C 80 72, 92 62, 110 55"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M70 64 C 100 58, 120 56, 134 47"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M84 54 C 110 46, 122 44, 136 36"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />

      <circle cx="110" cy="55" r="6.5" fill="#1fb6d4" />
      <circle cx="134" cy="47" r="7" fill="#1790c4" />
      <circle cx="136" cy="36" r="7.5" fill="#0a4da8" />
    </svg>
  );
}
