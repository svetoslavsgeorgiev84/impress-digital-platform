import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <section
            id="company"
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
            <div className="relative z-10 flex min-h-screen items-center pt-24 md:pt-20">
                <Container>
                    <div className="max-w-3xl text-white lg:ml-12">
                        <p className="mb-4 text-base uppercase tracking-[0.25em] text-blue-300 md:text-sm">
                            Impress Ltd.
                        </p>

                        <h1 className="text-[42px] font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Complete Packaging Solutions
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                            Premium packaging and display solutions manufactured in Bulgaria and delivered across Europe.
                        </p>

                        {/* <div className="mt-10 flex flex-wrap gap-4">
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
                    text-base
                    font-medium
                    sm:text-lg
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:bg-white/10
                "
                            >
                                View Portfolio
                            </button>
                        </div> */}
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;