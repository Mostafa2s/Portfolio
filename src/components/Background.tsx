export default function Background() {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 -z-50 bg-[#070B16]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:55px_55px]" />
      </div>

      {/* Aurora Left */}
      <div className="fixed left-[-200px] top-20 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px] -z-40 animate-pulse" />

      {/* Aurora Right */}
      <div className="fixed right-[-250px] top-40 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[180px] -z-40 animate-pulse" />

      {/* Bottom Glow */}
      <div className="fixed bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[220px] -z-40" />
    </>
  );
}