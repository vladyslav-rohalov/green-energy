export default function IconDot({
  color = '#173D33',
  width = 14,
  height = 14,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse 1"
        cx="7"
        cy="7.5"
        r="7"
        fill={color}
        style={{ transition: 'fill 0.5s ease' }}
      />
    </svg>
  );
}
