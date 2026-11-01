const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function DocIcon() {
  return (
    <svg {...base}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg {...base} strokeWidth={2.25}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg {...base} width={40} height={12} viewBox="0 0 40 12" strokeWidth={1.25}>
      <path d="M0 6h38M33 1l5 5-5 5" />
    </svg>
  );
}
