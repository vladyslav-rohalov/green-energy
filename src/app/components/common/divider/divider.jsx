export default function Divider({ width = '100%', color = '#97D28B' }) {
  return (
    <div style={{ width: width, borderBottom: `1px solid ${color}` }}></div>
  );
}
