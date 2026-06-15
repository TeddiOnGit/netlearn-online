type IconProps = { name: IconName; className?: string };

export type IconName =
  | "book"
  | "mentor"
  | "device"
  | "cap"
  | "mail"
  | "phone"
  | "pin";

const P = {
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5v-12Z" />
    </>
  ),
  mentor: (
    <>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16" cy="9.5" r="2.5" />
      <path d="M3.5 19a5 5 0 0 1 10 0" />
      <path d="M14 19a4.5 4.5 0 0 1 6.5-4" />
    </>
  ),
  device: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M2 20h20" />
      <path d="M10 16h4" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" />
      <path d="M6 11v4.5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5V11" />
      <path d="M21.5 9v4.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}
