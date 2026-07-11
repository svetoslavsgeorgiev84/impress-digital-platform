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
            className="
            mr-2
            rounded-lg
            p-2
            lg:hidden
            transition-all
            duration-300
            hover:bg-slate-100
            "
            aria-label="Toggle menu"
          >
            <div
              className="
              transition-transform
              duration-300
              "
            >
              {isOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        className={`
    overflow-hidden
    border-t
    border-slate-200
    bg-white
    shadow-xl
    lg:hidden
    transition-all
    duration-500
    ease-out
    ${isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
          }
  `}
      >
        <Container>
          <nav
            className={`
        flex
        flex-col
        py-4
        transition-all
        duration-500
        ease-out
        ${isOpen
                ? "translate-y-0"
                : "-translate-y-4"
              }
      `}
          >
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
                    : "text-slate-700 hover:text-blue-700"
                  }
          `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            className={`
        pb-4
        transition-all
        duration-500
        ease-out
        ${isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
              }
      `}
          >
            <LanguageSwitcher />
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;