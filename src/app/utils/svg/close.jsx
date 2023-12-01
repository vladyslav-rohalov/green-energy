export default function IconClose({ color = '#FFFFFF' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iconamoon:close-light">
        <path
          id="Vector"
          d="M5.83325 5.83325L14.1666 14.1666M5.83325 14.1666L14.1666 5.83325"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.5s ease' }}
        />
      </g>
    </svg>
  );
}
