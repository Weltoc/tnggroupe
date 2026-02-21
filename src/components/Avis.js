// Avis.js
import React, { useMemo } from "react";
import "./Avis.css";

export default function Avis() {
  const avis = useMemo(
    () => [
      {
        id: 1,
        name: "Mehwish",
        text:
          "Service très pro. J’ai pu choisir mon engin et comprendre clairement le plan de paiement.",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        muted: true,
      },
      {
        id: 2,
        name: "Elizabeth Jeff",
        text:
          "Acompte 40% + paiement petit à petit : simple et rapide. Je recommande fortement.",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        active: true,
      },
      {
        id: 3,
        name: "Emily Thomas",
        text:
          "Très bon accompagnement, conditions accessibles et suivi régulier jusqu’à la fin.",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
        muted: true,
      },
      {
        id: 4,
        name: "Koffi Mensah",
        text:
          "J’ai pris ma moto rapidement. Paiement mensuel sans stress, équipe disponible.",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        muted: true,
      },
      {
        id: 5,
        name: "Awa Diallo",
        text:
          "Explications claires, contrat simple et aucun débordement. Merci pour le sérieux.",
        avatar:
          "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=200&q=80",
        muted: true,
      },
    ],
    []
  );

  return (
    <section className="avis-avs">
      <div className="avis__inner-avs">
        {/* LEFT */}
        <div className="avis__left-avs">
          <div className="avis__spark-avs" aria-hidden="true">
            {/* petite déco “squiggle + étoile” */}
            <svg
              className="avis__sparkSvg-avs"
              viewBox="0 0 140 90"
              fill="none"
            >
              <path
                d="M10 70 C 35 35, 55 85, 75 55 C 95 25, 110 60, 126 34"
                className="avis__sparkLine-avs"
              />
              <path
                d="M127 17l4.6 9.8 10.7 1.6-7.8 7.6 1.9 10.7-9.4-5.1-9.4 5.1 1.9-10.7-7.8-7.6 10.7-1.6L127 17z"
                className="avis__sparkStar-avs"
              />
            </svg>
          </div>

          <h2 className="avis__title-avs">
            Ce que disent <br />
            nos clients
          </h2>

          <p className="avis__desc-avs">
            Découvrez des retours réels sur notre service : acompte, livraison de
            l’engin et paiement progressif (journalier ou mensuel).
          </p>

          <button className="avis__cta-avs" type="button">
            PRENDRE RENDEZ-VOUS
          </button>
        </div>

        {/* RIGHT (scrollable) */}
        <div className="avis__right-avs">
          <div className="avis__listWrap-avs">
            <div className="avis__list-avs" role="list" aria-label="Avis clients">
              {avis.map((a) => (
                <article
                  key={a.id}
                  className={[
                    "avis__card-avs",
                    a.active ? "avis__card--active-avs" : "",
                    a.muted ? "avis__card--muted-avs" : "",
                  ].join(" ")}
                  role="listitem"
                >
                  {/* accent line for active */}
                  <div className="avis__accent-avs" aria-hidden="true" />

                  <div className="avis__cardInner-avs">
                    <div className="avis__avatar-avs">
                      <img
                        className="avis__avatarImg-avs"
                        src={a.avatar}
                        alt={a.name}
                        draggable="false"
                      />
                    </div>

                    <div className="avis__content-avs">
                      <div className="avis__top-avs">
                        <div className="avis__name-avs">{a.name}</div>
                        <div className="avis__quote-avs" aria-hidden="true">
                          {/* double quote */}
                          <svg
                            className="avis__quoteSvg-avs"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7.3 10.2c.7-2.4 2.3-4 4.6-4.7v2C10.6 8 9.7 9.1 9.2 10.6c.7-.3 1.3-.4 2-.3 1.5.2 2.7 1.4 2.7 3 0 1.7-1.4 3.1-3.1 3.1-2 0-3.7-1.7-3.7-3.9 0-.7.1-1.5.2-2.3zm9.5 0c.7-2.4 2.3-4 4.6-4.7v2c-1.3.5-2.2 1.6-2.7 3.1.7-.3 1.3-.4 2-.3 1.5.2 2.7 1.4 2.7 3 0 1.7-1.4 3.1-3.1 3.1-2 0-3.7-1.7-3.7-3.9 0-.7.1-1.5.2-2.3z" />
                          </svg>
                        </div>
                      </div>

                      <p className="avis__text-avs">{a.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* petit hint scroll (invisible to screen readers) */}
          <div className="avis__scrollHint-avs" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
