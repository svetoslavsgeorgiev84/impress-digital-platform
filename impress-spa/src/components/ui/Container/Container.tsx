type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-8">
      {children}
    </div>
  );
}

export default Container;