import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import { useTranslation } from "react-i18next";

function WhyImpress() {
    const { t } = useTranslation();
    const items = [
        {
            title: t("whyImpress.title1"),
            text: t("whyImpress.item1"),
        },
        {
            title: t("whyImpress.title2"),
            text: t("whyImpress.item2"),
        },
        {
            title: t("whyImpress.title3"),
            text: t("whyImpress.item3"),
        },
        {
            title: t("whyImpress.title4"),
            text: t("whyImpress.item4"),
        },
    ];

    return (
        <Section id="why-impress">
            <Container>
                <div className="text-center">
                    <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
                        {t("whyImpress.label")}
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl break-words">
                        {t("whyImpress.title")}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
                        {t("whyImpress.subtitle")}
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.text}
                            className="
                            min-w-0
                            group
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-8
                            md:p-8
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-blue-200
                            hover:shadow-xl
                        "
                        >
                            <h3
                                className="
                                    lg:text-4xl
                                    text-3xl
                                    font-bold
                                    text-blue-700
                                    transition-colors
                                    duration-300
                                    group-hover:text-sky-500
                                    break-words
                                    "
                            >
                                {item.title}
                            </h3>

                            <p className="mt-4 text-xl text-slate-600 md:text-lg">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default WhyImpress;