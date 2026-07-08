import Container from "../../ui/Container/Container";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="text-2xl font-bold">
            IMPRESS
          </div>

          <nav className="hidden gap-8 lg:flex">
            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">Production</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-lg border px-4 py-2">
            BG / EN
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;