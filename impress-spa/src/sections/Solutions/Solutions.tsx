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

function Solutions() {
    const solutions = [
        {
            icon: <Package />,
            title: "Premium Packaging",
            text: "Luxury, retail and custom packaging solutions.",
        },
        {
            icon: <Presentation />,
            title: "Displays & Stands",
            text: "Retail displays and promotional presentation systems.",
        },
        {
            icon: <Store />,
            title: "POS Materials",
            text: "Point-of-sale materials that enhance brand visibility.",
        },
        {
            icon: <Printer />,
            title: "Large Format Graphics",
            text: "Indoor and outdoor large format communication solutions.",
        },
        {
            icon: <ShoppingCart />,
            title: "Retail Solutions",
            text: "Integrated solutions for modern retail environments.",
        },
        {
            icon: <Cog />,
            title: "Custom Projects",
            text: "Engineering and manufacturing tailored to your requirements.",
        },
    ];

    return (
        <Section id="solutions">
            <Container>
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                        Products & Solutions
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        What We Create
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                        Premium packaging and display solutions designed
                        to help brands stand out.
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
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
                        >
                            <div className="text-5xl">
                                {item.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-slate-600">
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