interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs text-muted">
      {label}
    </span>
  );
}
