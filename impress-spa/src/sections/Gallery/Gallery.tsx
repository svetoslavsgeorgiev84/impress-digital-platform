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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Inside Impress
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            A glimpse into our production capabilities,
            technology and craftsmanship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                  h-[350px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
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