export default function IconArrow({ width = 16, height = 17, rotate = 0 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <g id="vuesax/linear/arrow-right">
        <g id="arrow">
          <path
            id="Vector"
            d="M9.62 4.45312L13.6667 8.49979L9.62 12.5465"
            stroke="#173D33"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M2.33325 8.5H13.5533"
            stroke="#173D33"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
