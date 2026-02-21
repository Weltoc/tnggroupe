// Gallery.js
import React, { useMemo, useEffect, useState, useCallback } from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = useMemo(
    () => [
      {
        id: 1,
        src: "/P1.png",
        alt: "Desert rocks",
      },
      {
        id: 2,
        src: "/P2.png",
        alt: "Desert dunes",
      },
      {
        id: 3,
        src: "/P3.png",
        alt: "Dunes with people",
      },
      {
        id: 4,
        src: "/P4.png",
        alt: "Sunset desert",
      },
      {
        id: 5,
        src: "/P5.png",
        alt: "Canyon",
      },
      {
        id: 6,
        src: "/P6.png",
        alt: "Landscape",
      },
      {
        id: 7,
        src: "/P7.png",
        alt: "Landscape",
      },
      {
        id: 9,
        src: "/P9.png",
        alt: "Landscape",
      },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = (idx) => {
    setActive(idx);
    setIsOpen(true);
  };

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard controls for modal
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, prev, next]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="gallery-glt" id="gallery">
      <div className="gallery__inner-glt">
        <div className="gallery__top-glt">
          <div className="gallery__chip-glt"></div>

          <div className="gallery__topRow-glt">
            <h2 className="gallery__title-glt">Vous doutez ?</h2>
            <p className="gallery__subtitle-glt">
            Découvrez nos réalisations ainsi que les témoignages de nos clients satisfaits.
            </p>
          </div>
        </div>

        <div className="gallery__grid-glt" role="list" aria-label="Gallery">
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              className={`gallery__tile-glt gallery__tile--${idx + 1}-glt`}
              onClick={() => openAt(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <img className="gallery__img-glt" src={img.src} alt={img.alt} />
            </button>
          ))}
        </div>
      </div>

      {/* MODAL CAROUSEL */}
      {isOpen && (
        <div className="gallery__modal-glt" role="dialog" aria-modal="true">
          <div className="gallery__overlay-glt" onClick={close} />

          <div className="gallery__modalCard-glt" role="document">
            <button
              className="gallery__close-glt"
              type="button"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>

            <button
              className="gallery__nav-glt gallery__nav--left-glt"
              type="button"
              onClick={prev}
              aria-label="Previous"
            >
              ‹
            </button>

            <div className="gallery__stage-glt">
              <img
                className="gallery__stageImg-glt"
                src={images[active].src}
                alt={images[active].alt}
                draggable="false"
              />
            </div>

            <button
              className="gallery__nav-glt gallery__nav--right-glt"
              type="button"
              onClick={next}
              aria-label="Next"
            >
              ›
            </button>

            <div className="gallery__counter-glt" aria-hidden="true">
              {active + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
