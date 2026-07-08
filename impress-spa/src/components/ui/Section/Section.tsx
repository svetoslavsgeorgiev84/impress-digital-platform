type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return (
    <section className="py-16 lg:py-24">
      {children}
    </section>
  );
}

export default Section;