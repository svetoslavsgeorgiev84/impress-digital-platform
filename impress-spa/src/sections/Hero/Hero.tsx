import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Тъмно покритие върху снимката */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Съдържание */}
      <div className="relative z-10 flex min-h-screen items-center pt-20">
        <Container>
          <div className="max-w-3xl text-white lg:ml-12">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300">
              Impress Ltd.
            </p>

            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              Complete Packaging Solutions
            </h1>

            <p className="mt-8 text-xl leading-8 text-slate-300">
              Premium packaging and display solutions manufactured in Bulgaria and delivered across Europe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Request a Quote
              </Button>

              <button
                className="
                  rounded-xl
                  border
                  border-white/30
                  px-6
                  py-3
                  font-medium
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:bg-white/10
                "
              >
                View Portfolio
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;