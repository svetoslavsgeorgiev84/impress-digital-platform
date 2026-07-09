import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";

function WhyImpress() {
    const items = [
        {
            title: "30+",
            text: "Years of Experience",
        },
        {
            title: "End-to-End",
            text: "Production Capabilities",
        },
        {
            title: "European",
            text: "Clients & Partners",
        },
        {
            title: "Custom",
            text: "Packaging Engineering",
        },
    ];

    return (
        <Section id="why-impress">
            <Container>
                <div className="text-center">
                    <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
                        Why Impress
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        Trusted Packaging Partner
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
                        Complete packaging solutions, from concept and engineering
                        to production and delivery.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.text}
                            className="
                group
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
                                    text-4xl
                    font-bold
                    text-blue-700
                    md:text-3xl
                  transition-colors
                  duration-300
                  group-hover:text-sky-500
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