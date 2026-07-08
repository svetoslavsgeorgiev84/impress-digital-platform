import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import productionImage from "../../assets/images/production.jpg";

function Capabilities() {
    const capabilities = [
        "Prepress Services",
        "Digital & Offset Printing",
        "Printing on Rigid Materials",
        "Large Format Roll Printing",
        "Finishing Operations",
        "Custom Packaging Solutions",
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
                            h-[450px]
                            w-full
                            rounded-3xl
                            object-cover
                            shadow-2xl
                        "
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                            Production Capabilities
                        </p>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900">
                            Comprehensive Production Capabilities
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            From concept and prepress to premium finishing and delivery,
                            Impress provides complete packaging and display solutions.
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
                                                p-4
                                                transition-all
                                                duration-300
                                                hover:border-blue-200
                                                hover:translate-x-2
                                                hover:shadow-md
                                            "
                                >
                                    <div className="text-blue-700 text-xl" />

                                    <span className="text-lg text-slate-700">
                                        ✓ {item}
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