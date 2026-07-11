import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import productionImage from "../../assets/images/production.jpg";
import { useTranslation } from "react-i18next";

function Capabilities() {
    const { t } = useTranslation();
    const capabilities = [
        t("capabilities.item1"),
        t("capabilities.item2"),
        t("capabilities.item3"),
        t("capabilities.item4"),
        t("capabilities.item5"),
        t("capabilities.item6"),
    ];

    return (
        <Section id="production">
            <Container>
                <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                    <div>
                        <img
                            src={productionImage}
                            alt="Impress production"
                            className="
                            h-[280px]
                            w-full
                            rounded-3xl
                            object-cover
                            shadow-2xl
                            sm:h-[350px]
                            lg:h-[450px]
                        "
                        />
                    </div>

                    <div>
                        <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
                            {t("capabilities.label")}
                        </p>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                            {t("capabilities.title")}
                        </h2>

                        <p className="mt-6 text-xl leading-8 text-slate-600 md:text-lg">
                            {t("capabilities.subtitle")}
                        </p>

                        <div className="mt-10 space-y-4">
                            {capabilities.map((item) => (
                                <div
                                    key={item}
                                    className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:border-blue-200
                                    hover:translate-x-2
                                    hover:shadow-md
                                    "
                                >
                                    <span className="text-2xl text-blue-700">
                                        ✓
                                    </span>

                                    <span className="text-xl text-slate-700 md:text-lg leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Capabilities;