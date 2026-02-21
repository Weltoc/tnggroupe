// Avis.js
import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import "./Avis.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Avis() {
  const avis = useMemo(
    () => [
      {
        id: 1,
        text: "Impressionné par le professionnalisme et l’attention aux détails.",
        name: "Guy Hawkins",
        handle: "@guyhawkins",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      },
      {
        id: 2,
        text: "Une expérience fluide du début à la fin. Je recommande vivement !",
        name: "Karla Lynn",
        handle: "@karlalynn98",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      },
      {
        id: 3,
        text: "Fiable et digne de confiance. Ça m’a énormément facilité la vie !",
        name: "Jane Cooper",
        handle: "@janecooper",
        avatar:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=120&q=80",
      },
      {
        id: 4,
        text: "Paiement flexible, livraison rapide et excellent suivi. Merci !",
        name: "Awa Diallo",
        handle: "@awadiallo",
        avatar:
          "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=120&q=80",
      },
      {
        id: 5,
        text: "Avec 40% d’acompte, j’ai eu mon engin. Le reste petit à petit, top.",
        name: "Koffi Mensah",
        handle: "@koffimensah",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      },
      {
        id: 6,
        text: "Service sérieux et transparent. Je recommande TNG Groupe.",
        name: "Emily Thomas",
        handle: "@emilyt",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80",
      },
    ],
    []
  );

  const perPageDesktop = 3;
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // calc pages based on viewport
  const calcPageCount = useCallback(() => {
    const w = window.innerWidth;
    const perPage = w <= 560 ? 1 : w <= 980 ? 2 : perPageDesktop;
    setPageCount(Math.max(1, Math.ceil(avis.length / perPage)));
  }, [avis.length]);

  useEffect(() => {
    calcPageCount();
    window.addEventListener("resize", calcPageCount);
    return () => window.removeEventListener("resize", calcPageCount);
  }, [calcPageCount]);

  const scrollToPage = useCallback(
    (p) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(pageCount - 1, p));
      const width = el.clientWidth;
      el.scrollTo({ left: clamped * width, behavior: "smooth" });
      setPage(clamped);
    },
    [pageCount]
  );

  const next = () => scrollToPage(page + 1);
  const prev = () => scrollToPage(page - 1);

  // keep page in sync if user swipes (touch)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const width = el.clientWidth || 1;
      const p = Math.round(el.scrollLeft / width);
      setPage(Math.max(0, Math.min(pageCount - 1, p)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [pageCount]);

  return (
    <section className="avis-avts" id="avis">
      <div className="avis__inner-avts">
        <div className="avis__top-avts">
          <div className="avis__kicker-avts">Témoignages</div>
          <h2 className="avis__title-avts">Expériences clients transformatrices</h2>
        </div>

        <div className="avis__wrap-avts">
          {/* arrows */}
          <button
            className="avis__arrow-avts avis__arrow--left-avts"
            type="button"
            onClick={prev}
            disabled={page === 0}
            aria-label="Précédent"
          >
            <FiChevronLeft />
          </button>

          <div className="avis__track-avts" ref={trackRef}>
            {avis.map((a) => (
              <article key={a.id} className="avis__card-avts">
                <div className="avis__quote-avts" aria-hidden="true">
                  <span className="avis__quoteMark-avts">“</span>
                </div>

                <p className="avis__text-avts">{a.text}</p>

                <div className="avis__user-avts">
                  <div className="avis__avatar-avts">
                    <img
                      className="avis__avatarImg-avts"
                      src={a.avatar}
                      alt={a.name}
                      draggable="false"
                    />
                  </div>

                  <div className="avis__userMeta-avts">
                    <div className="avis__name-avts">{a.name}</div>
                    <div className="avis__handle-avts">{a.handle}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="avis__arrow-avts avis__arrow--right-avts"
            type="button"
            onClick={next}
            disabled={page === pageCount - 1}
            aria-label="Suivant"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* 3 dashes */}
        <div className="avis__dots-avts" aria-label="Pagination">
          {[0, 1, 2].map((i) => {
            const targetPage = Math.round((i * (pageCount - 1)) / 2);
            const isActive = pageCount === 1 ? i === 1 : targetPage === page;

            return (
              <button
                key={i}
                type="button"
                className={`avis__dot-avts ${isActive ? "isActive-avts" : ""}`}
                onClick={() => scrollToPage(targetPage)}
                aria-label={`Aller à la page ${targetPage + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
