import { useState } from "react";
import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import { useTranslation } from "react-i18next";
import luxuryBox1 from "../../assets/solutions/luxury-box.webp";
import luxuryBox2 from "../../assets/solutions/luxury-box2.webp";
import luxuryBox3 from "../../assets/solutions/luxury-box3.webp";
import displayStand from "../../assets/solutions/display-stand.webp";
import displayStand2 from "../../assets/solutions/display-stand2.webp";
import displayStand3 from "../../assets/solutions/display-stand3.webp";
import posDisplay from "../../assets/solutions/pos-display.webp";
import posDisplay2 from "../../assets/solutions/pos-display2.webp";
import posDisplay3 from "../../assets/solutions/pos-display3.webp";
import largeFormat from "../../assets/solutions/large-format.webp";
import largeFormat2 from "../../assets/solutions/large-format2.webp";
import largeFormat3 from "../../assets/solutions/large-format3.webp";
import retailSolutions from "../../assets/solutions/retail-solutions.webp";
import retailSolutions2 from "../../assets/solutions/retail-solutions2.webp";
import retailSolutions3 from "../../assets/solutions/retail-solutions3.webp";
import customProject from "../../assets/solutions/custom-project.webp";
import customProject2 from "../../assets/solutions/custom-project2.webp";
import customProject3 from "../../assets/solutions/custom-project3.webp";

function Solutions() {
    const { t } = useTranslation();
    const solutions = [
        {
            images: [
                luxuryBox1,
                luxuryBox2,
                luxuryBox3,
            ],
            title: t("solutions.item1Title"),
            text: t("solutions.item1Text"),
        },
        {
            images: [displayStand, displayStand2, displayStand3],
            title: t("solutions.item2Title"),
            text: t("solutions.item2Text"),
        },
        {
            images: [posDisplay, posDisplay2, posDisplay3],
            title: t("solutions.item3Title"),
            text: t("solutions.item3Text"),
        },
        {
            images: [largeFormat, largeFormat2, largeFormat3],
            title: t("solutions.item4Title"),
            text: t("solutions.item4Text"),
        },
        {
            images: [retailSolutions, retailSolutions2, retailSolutions3],
            title: t("solutions.item5Title"),
            text: t("solutions.item5Text"),
        },
        {
            images: [customProject, customProject2, customProject3],
            title: t("solutions.item6Title"),
            text: t("solutions.item6Text"),
        },
    ];
    const [activeImages, setActiveImages] =
        useState<number[]>(
            Array(solutions.length).fill(0)
        );

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
                    {solutions.map((item, index) => (
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
                                    src={item.images[activeImages[index]]}
                                    alt={item.title}
                                    onClick={() => {
                                        setActiveImages((prev) => {
                                            const next = [...prev];
                                            next[index] =
                                                (next[index] + 1) %
                                                item.images.length;
                                            return next;
                                        });
                                    }}
                                    className={`
    mb-6
    h-56
    w-full
    rounded-xl
    object-cover
    transition-all
    duration-300
    ${item.images.length > 1
                                            ? "cursor-pointer"
                                            : ""
                                        }
  `}
                                />
                                {item.images.length > 1 && (
                                    <div className="mb-6 flex justify-center gap-2">
                                        {item.images.map(
                                            (_, imageIndex) => (
                                                <button
                                                    key={imageIndex}
                                                    type="button"
                                                    onClick={() => {
                                                        setActiveImages(
                                                            (prev) => {
                                                                const next = [
                                                                    ...prev,
                                                                ];
                                                                next[index] =
                                                                    imageIndex;
                                                                return next;
                                                            }
                                                        );
                                                    }}
                                                    className={`
            h-2.5
            w-2.5
            rounded-full
            transition-all
            duration-300
            ${activeImages[index] ===
                                                            imageIndex
                                                            ? "bg-blue-700"
                                                            : "bg-slate-300 hover:bg-slate-400"
                                                        }
          `}
                                                />
                                            )
                                        )}
                                    </div>
                                )}
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