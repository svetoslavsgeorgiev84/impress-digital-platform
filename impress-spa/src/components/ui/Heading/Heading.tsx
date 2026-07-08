type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
      {children}
    </h1>
  );
}

export default Heading;