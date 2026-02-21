import React, { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  // Ferme le menu si on repasse en desktop (évite les états bizarres)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Optionnel: empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="navbarWrap-nvt">
      <nav className="navbar-nvt" aria-label="Navigation principale">
        <a className="brand-nvt" href="/">
          {/* <span className="brandMark-nvt" aria-hidden="true" /> */}
          <img src="/tng.png" style={{width: 100 , height: 70}} alt="logo"/>
          <span className="brandText-nvt">TNG GROUPE</span>
        </a>

        <div className="spacer-nvt" />

        {/* Desktop */}
        <ul className="links-nvt">
          <li className="linkItem-nvt">
            <a className="link-nvt" href="#home">Acceuil</a>
          </li>
          <li className="linkItem-nvt">
            <a className="link-nvt" href="#about">Qui sommes nous</a>
          </li>
          <li className="linkItem-nvt">
            <a className="link-nvt" href="#guide">Comment ça marche</a>
          </li>
          <li className="linkItem-nvt">
            <a className="link-nvt" href="#avis">Temoignages</a>
          </li>
          <li className="linkItem-nvt">
            <a className="link-nvt" href="#contact">Nous Contacter</a>
          </li>
          <li className="linkItem-nvt">
            <a href="https://wa.me/22871985736"
              target="_blank" className="cta-nvt" 
              rel="noreferrer"
              >Prendre Rendez-vous →</a>
          </li>
        </ul>

        {/* Bouton mobile */}
        <button
          className="menuBtn-nvt"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobileMenu-nvt"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`icon-nvt ${isOpen ? "isHidden-nvt" : ""}`}>☰</span>
          <span className={`icon-nvt ${isOpen ? "" : "isHidden-nvt"}`}>✕</span>
        </button>
      </nav>

      {/* Mobile dropdown */}

      {/* Overlay (click pour fermer) */}
      {/* Overlay (click pour fermer) */}
      <div
        className={`overlay-nvt ${isOpen ? "isOpen-nvt" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile dropdown */}
      <div
        id="mobileMenu-nvt"
        className={`mobileMenu-nvt ${isOpen ? "isOpen-nvt" : ""}`}
      >
        <a className="mobileLink-nvt" href="#home" onClick={closeMenu}>
         Acceuil
        </a>
        <a className="mobileLink-nvt" href="#about" onClick={closeMenu}>
         Qui sommes nous
        </a>
        <a className="mobileLink-nvt" href="#guide" onClick={closeMenu}>
         Comment ça marche
        </a>
        <a className="mobileLink-nvt" href="#avis" onClick={closeMenu}>
        Temoignages
        </a>
        <a className="mobileLink-nvt" href="#contact" onClick={closeMenu}>
        Nous Contacter
        </a>

        <a className="mobileCta-nvt" href="https://wa.me/22871985736"
              target="_blank" 
              rel="noreferrer" onClick={closeMenu}>
          Prendre Rendez-vous →
        </a>
      </div>

    </header>
  );
}
