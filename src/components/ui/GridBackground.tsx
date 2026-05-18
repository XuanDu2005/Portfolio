export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(46,232,197,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,232,197,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(46,232,197,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]" />
    </div>
  );
}
