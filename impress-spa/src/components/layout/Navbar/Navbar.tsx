import Container from "../../ui/Container/Container";
import logo from "../../../assets/logos/impress-logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <img
            src={logo}
            alt="Impress"
            className="h-10 w-auto lg:h-12"
          />

          <nav className="hidden gap-8 lg:flex">
            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">Production</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;