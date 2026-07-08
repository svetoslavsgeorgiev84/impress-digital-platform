type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {children}
    </div>
  );
}

export default MainLayout;