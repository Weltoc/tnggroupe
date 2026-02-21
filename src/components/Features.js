import React from "react";
import "./Features.css";

// Remplace par ton image locale si tu veux : import aboutImg from "../assets/about.png";
const aboutImg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";

export default function Features() {
  return (
    <section className="aboutWrap-fts" id="apropos">
      <div className="about-fts">
        {/* LEFT IMAGE */}
        <div className="aboutLeft-fts">
          <div className="imgFrame-fts">
            <img className="aboutImg-fts" src={aboutImg} alt="MWS - À propos" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutRight-fts">
          <div className="titleRow-fts">
            <span className="titleLine-fts" aria-hidden="true" />
            <h2 className="title-fts">A propos</h2>
          </div>

          <p className="para-fts">
            <strong>MWS</strong>, est une entreprise web qui se veut être un
            partenaire privilégié dans l&apos;accompagnement et le positionnement
            de votre marque. Notre agence regroupe un large panel de compétences
            indispensable à la conception et à l&apos;achèvement de votre projet.
          </p>

          <p className="para-fts">
            <strong>Notre mission</strong> est d&apos;imaginer, de réaliser, et de
            promouvoir des projets innovants et créatifs Adaptés aux besoins des
            entreprises.
          </p>

          <p className="para-fts">
            <strong>Nous maitrisons</strong> l&apos;ensemble des composants
            nécessaires pour la réalisation de vos besoins sur mesure.
          </p>

          <div className="callRow-fts">
            <span className="callLabel-fts">Appelez&nbsp; nous</span>
            <a className="callNumber-fts" href="tel:+0000708724816">
              (+000) 07 08 72 48 16
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
