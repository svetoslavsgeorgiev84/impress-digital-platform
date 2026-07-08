import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import Heading from "../../components/ui/Heading/Heading";
import Text from "../../components/ui/Text/Text";
import Button from "../../components/ui/Button/Button";

function Hero() {
    return (
        <Section>
            <Container>
                <div className="flex min-h-screen flex-col items-center justify-center text-center">
                    <Heading>
                        Complete Packaging Solutions
                    </Heading>

                    <div className="mt-6 max-w-3xl">
                        <Text>
                            Design, printing and manufacturing of premium packaging,
                            displays and POS materials for clients across Europe.
                        </Text>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <Button>
                            Request a Quote
                        </Button>

                        <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Hero;