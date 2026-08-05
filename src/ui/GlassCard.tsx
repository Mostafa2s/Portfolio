import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        shadow-[0_0_40px_rgba(0,255,255,.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}