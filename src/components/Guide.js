// Guide.js
import React from "react";
import "./Guide.css";

export default function Guide() {
  return (
    <section className="guide-ght">
      <div className="guide__inner-ght">
        <h2 className="guide__title-ght">Comment ça marche ?</h2>
        <p className="guide__subtitle-ght">
          Achetez votre engin à crédit en toute simplicité : vous versez <strong>40%</strong> d’acompte,
          nous complétons le reste, puis vous remboursez progressivement <strong>par jour</strong> ou <strong>par mois</strong>.
        </p>

        <div className="guide__steps-ght">
          {/* STEP 1 */}
          <div className="guide__step-ght">
            <div
              className="guide__iconBox-ght guide__iconBox--gray-ght"
              aria-hidden="true"
            >
              {/* calendar (rendez-vous) */}
              <svg className="guide__icon-ght" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 3v3M17 3v3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 8h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 5h12a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="guide__stepTitle-ght">1. Prenez rendez-vous</h3>
            <p className="guide__stepText-ght">
              Contactez-nous et choisissez l’engin (moto / voiture). Nous validons
              les informations et la disponibilité.
            </p>
          </div>

          {/* CONNECTOR 1 */}
          <div className="guide__connector-ght" aria-hidden="true">
            <svg className="guide__connectorSvg-ght" viewBox="0 0 260 80">
              <path
                className="guide__connectorPath-ght"
                d="M10 60 C 70 10, 190 10, 250 60"
              />
            </svg>
          </div>

          {/* STEP 2 */}
          <div className="guide__step-ght">
            <div
              className="guide__iconBox-ght guide__iconBox--orange-ght"
              aria-hidden="true"
            >
              {/* wallet / payment */}
              <svg className="guide__icon-ght" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 10h-4a2 2 0 000 4h4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="16.5" cy="12" r="0.9" fill="currentColor" />
              </svg>
            </div>

            <h3 className="guide__stepTitle-ght">2. Déposez 40% d’acompte</h3>
            <p className="guide__stepText-ght">
              Vous versez <strong>40%</strong> du prix. L’entreprise complète le
              reste pour vous permettre de repartir rapidement.
            </p>
          </div>

          {/* CONNECTOR 2 */}
          <div
            className="guide__connector-ght guide__connector--flip-ght"
            aria-hidden="true"
          >
            <svg className="guide__connectorSvg-ght" viewBox="0 0 260 80">
              <path
                className="guide__connectorPath-ght"
                d="M10 60 C 70 10, 190 10, 250 60"
              />
            </svg>
          </div>

          {/* STEP 3 */}
          <div className="guide__step-ght">
            <div
              className="guide__iconBox-ght guide__iconBox--gray-ght"
              aria-hidden="true"
            >
              {/* key / delivery */}
              <svg className="guide__icon-ght" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.5 13.5l3-3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.5 10.5a4 4 0 10-1.17 2.83l4.67 4.67h2v-2l-1-1v-1h-1l-1-1h-1l-2.49-2.49z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="guide__stepTitle-ght">3. Prenez votre engin & payez le reste</h3>
            <p className="guide__stepText-ght">
              Vous récupérez votre engin et vous réglez le solde{" "}
              <strong>petit à petit</strong> (paiement <strong>journalier</strong> ou{" "}
              <strong>mensuel</strong>) jusqu’à la fin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
