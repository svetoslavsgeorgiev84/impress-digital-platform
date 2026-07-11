import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "../../ui/Container/Container";
import logo from "../../../assets/logos/impress-logo.png";
import { useActiveSection } from "../../../hooks/useActiveSection";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Navbar() {
  const activeSection = useActiveSection();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const { t } = useTranslation();
  const links = [
    {
      id: "company",
      label: t("navbar.company"),
    },
    {
      id: "solutions",
      label: t("navbar.solutions"),
    },
    {
      id: "production",
      label: t("navbar.production"),
    },
    {
      id: "gallery",
      label: t("navbar.gallery"),
    },
    {
      id: "contact",
      label: t("navbar.contact"),
    },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#company">
            <img
              src={logo}
              alt="Impress"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  transition-colors
                  duration-300
                  ${activeSection === link.id
                    ? "font-semibold text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                  }
                `}
              >
                {link.label}

                {activeSection === link.id && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-full
                      bg-blue-700
                    "
                  />
                )}
              </a>
            ))}

            <LanguageSwitcher />
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          className="
            border-t
            border-slate-200
            bg-white
            shadow-xl
            lg:hidden
          "
        >
          <Container>
            <nav className="flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`
                    py-4
                    text-lg
                    transition-colors
                    ${activeSection === link.id
                      ? "font-semibold text-blue-700"
                      : "text-slate-700"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pb-4">
              <LanguageSwitcher />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;