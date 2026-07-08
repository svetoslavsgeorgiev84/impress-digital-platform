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
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Why Impress
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Trusted Packaging Partner
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
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
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
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
                  text-3xl
                  font-bold
                  text-blue-700
                  transition-colors
                  duration-300
                  group-hover:text-sky-500
                "
                            >
                                {item.title}
                            </h3>

                            <p className="mt-4 text-lg text-slate-600">
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