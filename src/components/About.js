// About.js
import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-abts" id="about">
      <div className="about__inner-abts">
        {/* TOP */}
        <div className="about__top-abts">
          <div className="about__leftTop-abts">
            <div className="about__kicker-abts">À propos de nous</div>

            <h2 className="about__title-abts">
              <span className="about__titleAccent-abts">
               Notre vision
              </span>
            </h2>

            <button className="about__cta-abts">
              PRENDRE RENDEZ-VOUS
            </button>
          </div>

          <div className="about__rightTop-abts">
            <p className="about__desc-abts">
              Prenez le contrôle de votre mobilité avec nos solutions de
              financement simples et accessibles. Versez 40% d’acompte,
              repartez avec votre engin et remboursez progressivement selon
              votre rythme.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="about__bottom-abts">
          {/* LEFT IMAGE CARD */}
          <div className="about__storyCard-abts">
            <img
              src="/P8.png"
              alt="Notre histoire"
              className="about__storyImg-abts"
            />

            <div className="about__storyOverlay-abts">
              <div className="about__storyTitle-abts">Notre histoire</div>
              <p className="about__storyText-abts">
                TNG Groupe accompagne ses clients dans l’acquisition de motos
                et voitures à crédit grâce à des solutions flexibles et rapides.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="about__cards-abts">
            <div className="about__card-abts about__card--light-abts">
              <div className="about__cardTitle-abts">Notre mission</div>
              <p className="about__cardText-abts">
                Permettre à chacun d’accéder facilement à un engin grâce à un
                financement simple et transparent.
              </p>
            </div>

            <div className="about__card-abts about__card--dark-abts">
              <div className="about__cardTitle-abts">Notre vision</div>
              <p className="about__cardText-abts">
                Devenir la référence du financement d’engins en Afrique en
                offrant des solutions rapides et accessibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
