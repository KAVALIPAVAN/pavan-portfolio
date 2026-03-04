interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <p
        className="font-mono-jetbrains text-[0.8rem] font-medium tracking-[0.15em] uppercase mb-3 flex items-center gap-2.5"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="block w-8 h-px"
          style={{ background: "var(--accent)" }}
        />
        {tag}
      </p>
      <h2
        className="font-syne text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-primary"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
