type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "dark" | "light";
};

/**
 * Netlearn brand mark, recreated as crisp vector art.
 * A monitor with a circuit/network signal flowing outward,
 * using the Netlearn cyan -> royal-blue gradient.
 */
export default function Logo({
  className,
  showWordmark = true,
  variant = "light",
}: LogoProps) {
  const uid = "nl";
  const wordColor = variant === "light" ? "#0d1b3a" : "#ffffff";
  const tagColor = variant === "light" ? "#5b6b8c" : "rgba(255,255,255,0.6)";

  return (
    <svg
      className={className}
      viewBox="0 0 260 170"
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

      {/* Monitor screen */}
      <rect
        x="14"
        y="20"
        width="118"
        height="84"
        rx="12"
        fill="none"
        stroke={`url(#${uid}-grad)`}
        strokeWidth="8"
      />
      {/* Monitor stand */}
      <path
        d="M62 104 L58 120 H88 L84 104 Z"
        fill={`url(#${uid}-grad)`}
      />
      <rect
        x="46"
        y="120"
        width="54"
        height="9"
        rx="4.5"
        fill={`url(#${uid}-grad)`}
      />

      {/* Circuit / network signal flowing out of the screen */}
      <path
        d="M70 78 C 96 70, 110 58, 132 50"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M86 62 C 120 56, 150 56, 178 44"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M104 54 C 140 44, 168 40, 196 30"
        fill="none"
        stroke={`url(#${uid}-cyan)`}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Nodes */}
      <circle cx="132" cy="50" r="7" fill="#1fb6d4" />
      <circle cx="178" cy="44" r="8" fill="#1790c4" />
      <circle cx="196" cy="30" r="9" fill="#0a4da8" />
      <circle cx="108" cy="52" r="5" fill="#4fe0ea" />

      {showWordmark && (
        <g>
          <text
            x="146"
            y="92"
            fontFamily="Sora, system-ui, sans-serif"
            fontSize="34"
            fontWeight="800"
            letterSpacing="1"
            fill={wordColor}
          >
            <tspan>Net</tspan>
            <tspan fill={`url(#${uid}-grad)`}>learn</tspan>
          </text>
          <text
            x="147"
            y="116"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="2.5"
            fill={tagColor}
          >
            EMPOWERING TOMORROW, TODAY
          </text>
        </g>
      )}
    </svg>
  );
}
