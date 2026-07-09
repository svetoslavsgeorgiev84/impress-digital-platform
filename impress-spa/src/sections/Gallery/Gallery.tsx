import Container from "../../components/ui/Container/Container";
import Section from "../../components/ui/Section/Section";

import image1 from "../../assets/gallery/production-hall-1.jpg";
import image2 from "../../assets/gallery/production-hall-2.jpg";

function Gallery() {
  const images = [image1, image2];

  return (
    <Section id="gallery">
      <Container>
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.25em] text-blue-700 md:text-sm">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Inside Impress
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600 md:text-lg">
            A glimpse into our production capabilities,
            technology and craftsmanship.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                shadow-xl
                group
              "
            >
              <img
                src={image}
                alt="Impress production"
                className="
                 h-[260px]
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
                sm:h-[320px]
                lg:h-[350px]
                "
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Gallery;