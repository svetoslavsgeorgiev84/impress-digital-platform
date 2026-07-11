import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import {
    Package,
    Store,
    Presentation,
    Printer,
    ShoppingCart,
    Cog,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Solutions() {
    const { t } = useTranslation();
    const solutions = [
        {
            icon: <Package />,
            title: t("solutions.item1Title"),
            text: t("solutions.item1Text"),
        },
        {
            icon: <Presentation />,
            title: t("solutions.item2Title"),
            text: t("solutions.item2Text"),
        },
        {
            icon: <Store />,
            title: t("solutions.item3Title"),
            text: t("solutions.item3Text"),
        },
        {
            icon: <Printer />,
            title: t("solutions.item4Title"),
            text: t("solutions.item4Text"),
        },
        {
            icon: <ShoppingCart />,
            title: t("solutions.item5Title"),
            text: t("solutions.item5Text"),
        },
        {
            icon: <Cog />,
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
               rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                min-h-[280px]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
                        >
                            <div className="text-6xl text-blue-700">
                                {item.icon}
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