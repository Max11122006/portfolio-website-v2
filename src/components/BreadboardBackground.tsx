export default function BreadboardBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg className="h-full w-full text-foreground opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="breadboard-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#breadboard-grid)" />
      </svg>
    </div>
  );
}
