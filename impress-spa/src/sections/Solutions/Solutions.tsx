import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import { useTranslation } from "react-i18next";
import luxuryBox from "../../assets/solutions/luxury-box.webp";
import displayStand from "../../assets/solutions/display-stand.webp";
import posDisplay from "../../assets/solutions/pos-display.webp";
import largeFormat from "../../assets/solutions/large-format.webp";
import retailSolutions from "../../assets/solutions/retail-solutions.webp";
import customProject from "../../assets/solutions/custom-project.webp";

function Solutions() {
    const { t } = useTranslation();
    const solutions = [
        {
            image: luxuryBox,
            title: t("solutions.item1Title"),
            text: t("solutions.item1Text"),
        },
        {
            image: displayStand,
            title: t("solutions.item2Title"),
            text: t("solutions.item2Text"),
        },
        {
            image: posDisplay,
            title: t("solutions.item3Title"),
            text: t("solutions.item3Text"),
        },
        {
            image: largeFormat,
            title: t("solutions.item4Title"),
            text: t("solutions.item4Text"),
        },
        {
            image: retailSolutions,
            title: t("solutions.item5Title"),
            text: t("solutions.item5Text"),
        },
        {
            image: customProject,
            title: t("solutions.item6Title"),
            text: t("solutions.item6Text"),
        },
    ];

    return (
        <Section id="solutions">
            <Container>
                <div className="text-center">
                    <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
                        {t("solutions.label")}
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        {t("solutions.title")}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
                        {t("solutions.subtitle")}
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {solutions.map((item) => (
                        <div
                            key={item.title}
                            className="
                            group
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-8
                            min-h-[410px]
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                            hover:border-blue-300
              "
                        >
                            <div className="text-6xl text-blue-700">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                    mb-6
                                    h-56
                                    w-full
                                    rounded-xl
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    "
                                />
                            </div>

                            <h3 className="mt-6 text-3xl font-bold text-slate-900 md:text-2xl">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-lg leading-8 text-slate-600 md:text-base">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default Solutions;