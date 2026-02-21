// Header.js
import React, { useMemo, useState } from "react";
import "./Header.css";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";


// ✅ Remplace ces imports par tes vraies images (dans /src/assets par ex.)
import scooter1 from "../assets/rtr.jpg";
import scooter2 from "../assets/h3.png";
import scooter4 from "../assets/h4.png";
import scooter6 from "../assets/h2.png";
import scooter7 from "../assets/h5.png";

import scooter8 from "../assets/v1.png";
import scooter9 from "../assets/v2.png";
import scooter10 from "../assets/v3.png";
import scooter11 from "../assets/v4.png";

export default function Header() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        bigTitle: "N-SERIES",
        redSubtitle: "SMART ESCOOTER",
        leftInfoTitle: "70KM",
        leftInfoText: "EXTENDED URBAN RANGE\nLITHIUM-ION REVOLUTION",
        stats: [
          { value: "29", unit: "L", label: "COMPACT CAPACITY" },
          { value: "10", unit: "KG", label: "IMPOSSIBLY LIGHT" },
          { value: "06", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter1,
        image: scooter1,
        alt: "Scooter N-Series",
      },
      {
        id: 2,
        bigTitle: "R-SERIES",
        redSubtitle: "URBAN COMMUTER",
        leftInfoTitle: "85KM",
        leftInfoText: "CITY + SUBURB RANGE\nFAST CHARGE BATTERY",
        stats: [
          { value: "32", unit: "L", label: "SMART STORAGE" },
          { value: "12", unit: "KG", label: "LIGHT FRAME" },
          { value: "05", unit: "HRS", label: "RECHARGING TIME" },
          { value: "03", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter2,
        image: scooter2,
        alt: "Scooter R-Series",
      },
      {
        id: 4,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter4,
        alt: "Scooter X-Series",
      },
      
      {
        id: 6,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter6,
        alt: "Scooter X-Series",
      },
       {
        id: 7,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter7,
        alt: "Scooter X-Series",
      },
      {
        id: 8,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter8,
        alt: "Scooter X-Series",
      },
      {
        id: 9,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter9,
        alt: "Scooter X-Series",
      },
      {
        id: 10,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter10,
        alt: "Scooter X-Series",
      },
      {
        id: 11,
        bigTitle: "X-SERIES",
        redSubtitle: "ECO PERFORMANCE",
        leftInfoTitle: "95KM",
        leftInfoText: "LONG RANGE RIDING\nHIGH EFFICIENCY MOTOR",
        stats: [
          { value: "30", unit: "L", label: "COMPACT CAPACITY" },
          { value: "11", unit: "KG", label: "BALANCED WEIGHT" },
          { value: "04", unit: "HRS", label: "RECHARGING TIME" },
          { value: "02", unit: "YR", label: "GUARANTEE" },
        ],
        // image: scooter3,
        image: scooter11,
        alt: "Scooter X-Series",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <header className="header-htg">
      <div className="header__inner-htg">
        {/* LEFT */}
        <div className="header__left-htg">
          <div className="header__titleBlock-htg">
            <img
              alt="TNG GROUPE"
              src="/tng.jpeg"
              className="header__brandLogoTop-htg"
            />

            <h1 className="header__title-htg">
              TNG GROUPE
            </h1>
            <div className="header__subtitle-htg">
              Achat d'engins( motos voitures )à crédit
            </div>
          </div>


          <div className="header__leftInfo-htg">
            <div className="header__leftBar-htg" />
            <div className="header__leftInfoText-htg">
              <div className="header__leftInfoTitle-htg" style={{textAlign: 'left'}}>
                Tel: +228 71 98 57 36
              </div>
              <div className="header__leftInfoDesc-htg" style={{textAlign: 'left'}}>
                SAGBADO NON LOIN DE IPG <br />
              </div>
            </div>
          </div>

          <div className="header__social-htg" aria-label="social">
  <a
    className="header__socialBtn-htg"
    href="https://www.tiktok.com/@tnggroupe"
    target="_blank"
    rel="noreferrer"
  >
    <FaTiktok className="header__socialIcon-htg" />
    <span className="header__socialText-htg">TikTok</span>
  </a>

  <a
    className="header__socialBtn-htg"
    href="https://wa.me/22871985736"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp className="header__socialIcon-htg" />
    <span className="header__socialText-htg">WhatsApp</span>
  </a>
</div>


        </div>

        {/* CENTER / IMAGE */}
        <div className="header__center-htg">
         
          {/* MOBILE ARROWS (visible only on mobile) */}
          <button
            className="header__arrowBtn-htg header__arrowBtn--left-htg"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <span className="header__arrowIcon-htg" aria-hidden="true">‹</span>
          </button>

          <button
            className="header__arrowBtn-htg header__arrowBtn--right-htg"
            onClick={goNext}
            aria-label="Next slide"
          >
            <span className="header__arrowIcon-htg" aria-hidden="true">›</span>
          </button>


          <div className="header__imageWrap-htg">
            <img
              className="header__image-htg"
              src={slide.image}
              alt={slide.alt}
              draggable="false"
            />
          </div>
        </div>

       
      </div>

      {/* BOTTOM NAV */}
      <div className="header__bottom-htg">
        <button className="header__navBtn-htg" onClick={goPrev}>
          PRECEDENT
        </button>

        <div className="header__navLine-htg" aria-hidden="true">
          <span className="header__navLineFill-htg" />
        </div>

        <button className="header__navBtn-htg" onClick={goNext}>
          SUIVANT
        </button>
      </div>
    </header>
  );
}
