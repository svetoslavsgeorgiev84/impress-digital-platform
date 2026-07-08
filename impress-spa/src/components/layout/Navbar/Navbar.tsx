import Container from "../../ui/Container/Container";
import logo from "../../../assets/logos/impress-logo.png";
import { useActiveSection } from "../../../hooks/useActiveSection";


function Navbar() {
  const activeSection = useActiveSection();
  const links = [
  {
    id: "company",
    label: "Company",
  },
  {
    id: "solutions",
    label: "Solutions",
  },
  {
    id: "production",
    label: "Production",
  },
  {
    id: "gallery",
    label: "Gallery",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

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
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
        transition-colors
        duration-300
        ${activeSection === link.id
                    ? "text-blue-700 font-semibold"
                    : "text-slate-700 hover:text-blue-700"
                  }
      `}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;