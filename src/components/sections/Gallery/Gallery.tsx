import "./Gallery.css";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import { galleryCards } from "../../../data/content";

// Galeria de 6 cards: cada um com título + área de imagem logo abaixo.
// A imagem é um placeholder enquanto `card.img` não for preenchido em content.ts.
function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <Eyebrow kanji="記録">Galeria</Eyebrow>

      <div className="gallery__grid">
        {galleryCards.map((card) => (
          <article className="gallery__card" key={card.titulo}>
            <h3 className="gallery__card-title">{card.titulo}</h3>
            {card.img ? (
              <img
                className="gallery__card-media"
                src={card.img}
                alt={card.titulo}
                loading="lazy"
              />
            ) : (
              <div className="gallery__card-media gallery__card-media--placeholder" aria-hidden="true">
                <span>imagem</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
