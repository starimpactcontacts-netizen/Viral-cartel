// Placeholder laurel "V" crest until the real logo file is dropped into /public.
export default function Crest({ size = 56 }: { size?: number }) {
  const leaves = Array.from({ length: 7 }, (_, i) => i)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Viral Cartel crest"
      role="img"
    >
      {[-1, 1].map((side) => (
        <g key={side} transform={side === 1 ? 'translate(100 0) scale(-1 1)' : undefined}>
          <path
            d="M44 90 C22 82 12 62 14 38 C15 28 19 20 24 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {leaves.map((i) => {
            const t = i / (leaves.length - 1)
            const cx = 40 - 26 * Math.sin(t * 1.35) + 2
            const cy = 86 - t * 70
            const rot = -20 - t * 50
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="4.2"
                ry="9"
                transform={`rotate(${rot} ${cx} ${cy})`}
                fill="currentColor"
              />
            )
          })}
        </g>
      ))}
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M39 37 L50 66 L61 37"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="miter"
        fill="none"
      />
      <path d="M45 92 L50 86 L55 92" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
