import { ReactNode } from "react";

export default function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-4
        py-2
        text-sm
        text-cyan-300
      "
    >
      {children}
    </span>
  );
}