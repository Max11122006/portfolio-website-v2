import SectionHeading from "./SectionHeading";

interface CategorySectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function CategorySection({
  title,
  subtitle,
  children,
}: CategorySectionProps) {
  return (
    <section className="py-12">
      <SectionHeading title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}
