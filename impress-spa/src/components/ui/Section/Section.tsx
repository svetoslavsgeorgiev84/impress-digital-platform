type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 lg:py-16 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;