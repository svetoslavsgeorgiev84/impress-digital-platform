import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";
import officeImage from "../../assets/contact/office.jpg";

function Contact() {
  const officeMaps =
    "https://maps.app.goo.gl/478yMuUuHHHzQdvKA";

  return (
    <Section id="contact">
      <Container>
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Get in Touch
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
            We would be happy to discuss your next packaging
            and display project.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={officeImage}
              alt="Impress office"
              className="
               h-[280px]
              w-full
              rounded-3xl
              object-cover
              shadow-2xl
              sm:h-[360px]
              lg:h-[420px]
              "
            />
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-slate-900 md:text-2xl">
              Central Office
            </h3>

            <div className="mt-8 space-y-6 text-lg text-slate-600 md:text-base">
              <div>
                <p className="text-lg font-semibold text-slate-900 md:text-base">
                  Address
                </p>

                <p className="mt-2">
                  3A Nikola Vaptsarov Blvd.<br />
                  4004 Plovdiv, Bulgaria
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Phone
                </p>

                <p className="mt-2">
                  +359 32 623 049
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Email
                </p>

                <p className="mt-2">
                  office@impress.bg
                </p>
              </div>
            </div>

            <a
              href={officeMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                rounded-xl
                bg-blue-700
                px-7
                py-4
                text-base
                font-medium
                md:px-6
                md:py-3
                text-white
                transition-all
                duration-300
                hover:bg-blue-800
              "
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-slate-200
            p-8
          "
        >
          <h3 className="text-3xl font-bold text-slate-900 md:text-2xl">
            Production Facility
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-600 md:text-base">
            Karatoprak Area, Markovo Village,
            Rodopi Municipality, Plovdiv Region, Bulgaria.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;