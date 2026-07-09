import Container from "../../ui/Container/Container";
import logo from "../../../assets/logos/impress-logo.png";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <img
            src={logo}
            alt="Impress"
            className="h-12 w-auto md:h-10"
          />

          <p className="text-center text-base text-slate-500 md:text-sm">
            © {new Date().getFullYear()} Impress Ltd.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;