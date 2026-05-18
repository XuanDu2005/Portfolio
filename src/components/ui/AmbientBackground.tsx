export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0" />
      <div className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] animate-aurora rounded-full bg-accent/[0.07] blur-[120px]" />
      <div
        className="absolute top-1/3 -right-1/4 h-[55vh] w-[55vh] animate-aurora rounded-full bg-accent-2/[0.06] blur-[100px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 h-[50vh] w-[50vh] animate-aurora rounded-full bg-accent-warm/[0.04] blur-[90px]"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,232,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(46,232,197,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-12deg,transparent,transparent_80px,rgba(139,124,248,0.015)_80px,rgba(139,124,248,0.015)_81px)]" />
    </div>
  );
}
