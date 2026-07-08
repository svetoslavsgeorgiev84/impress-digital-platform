type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
}

export default Section;