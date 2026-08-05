type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center">

      {subtitle && (
        <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

    </div>
  );
}