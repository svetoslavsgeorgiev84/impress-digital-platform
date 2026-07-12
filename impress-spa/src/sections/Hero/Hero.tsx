import Container from "../../components/ui/Container/Container";
import heroImage from "../../assets/images/hero.webp";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

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
                            {t("hero.impress")}
                        </p>

                        <h1 className="text-[42px] font-bold leading-tight sm:text-5xl lg:text-6xl break-words">
                            {t("hero.title")}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                            {t("hero.subtitle")}
                        </p>

                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;