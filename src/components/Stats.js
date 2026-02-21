// Stats.js
import React from "react";
import "./Stats.css";

// ✅ Remplace par ton image locale si tu veux :
import bike from "../assets/rtr.jpg";

export default function Stats() {
  return (
    <section className="stats-stt">
      <div className="stats__inner-stt">
        {/* LEFT */}
        <div className="stats__left-stt">
          <div className="stats__kicker-stt">IL TE FAUT UNE MOTO ?</div>

          <h2 className="stats__title-stt">
            VENEZ PRENDRE<br />
            <span className="stats__titleAccent-stt">VOS MOTOS</span> <br />
            <span className="stats__titleAccent-stt">A CREDIT</span>
          </h2>

          <p className="stats__desc-stt">
            Prenez votre moto à crédit en toute simplicité : versez <strong>40%</strong>{" "}
            d’acompte, nous complétons le reste, puis vous remboursez le solde{" "}
            <strong>petit à petit</strong> selon un plan <strong>journalier</strong> ou{" "}
            <strong>mensuel</strong>. Repartez avec votre engin rapidement, avec un
            accompagnement clair et des conditions accessibles.
            </p>


          <button className="stats__cta-stt" type="button">
            PRENDRE RENDEZ-VOUS
          </button>
        </div>

        {/* CENTER (DIAMOND IMAGE) */}
        <div className="stats__center-stt" aria-hidden="true">
          <div className="stats__diamondOuter-stt">
            <div className="stats__diamondInner-stt">
              <img
                className="stats__image-stt"
                src={bike}
                // src={bike}
                alt=""
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="stats__right-stt">
          <div className="stats__metric-stt">
            <div className="stats__metricValue-stt">2</div>
            <div className="stats__metricLabel-stt">Branches</div>
            <div className="stats__metricSub-stt">au Togo</div>
          </div>

          <div className="stats__metric-stt">
            <div className="stats__metricValue-stt">70</div>
            <div className="stats__metricLabel-stt">Engins</div>
          </div>

          <div className="stats__metric-stt">
            <div className="stats__metricValue-stt">70</div>
            <div className="stats__metricLabel-stt">Clients Sastifaits</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
