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
                    <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
                        Products & Solutions
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                        What We Deliver
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
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