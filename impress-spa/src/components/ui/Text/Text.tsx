type TextProps = {
  children: React.ReactNode;
};

function Text({ children }: TextProps) {
  return (
    <p className="text-lg leading-8 text-slate-600">
      {children}
    </p>
  );
}

export default Text;