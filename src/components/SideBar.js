import React from "react";
import "./SideBar.css";

import {
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


export default function SideBar({
  collapsed,
  hidden,
  mobileOpen,
  onCloseMobile,
  onToggleCollapse,
  onToggleHidden,
}) {
  // classes layout
 const sidebarClass = [
  "sidebar-sb",
  collapsed ? "sidebar-collapsed-sb" : "",
  hidden ? "sidebar-hidden-sb" : "",
  mobileOpen ? "sidebar-mobileOpen-sb" : "", // ✅
].filter(Boolean).join(" ");

const handleCollapseClick = () => {
  // Mobile: on ferme complètement
  if (window.matchMedia("(max-width: 768px)").matches) {
    onCloseMobile?.();
    return;
  }
  // Desktop: collapse normal
  onToggleCollapse?.();
};


  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay-sb ${mobileOpen ? "sidebar-overlayShow-sb" : ""}`}
        onClick={onCloseMobile}
        aria-hidden={!mobileOpen}
      />

      <aside className={sidebarClass} aria-label="Filters">
        <div className="sidebar-header-sb">
          <div className="sidebar-titleWrap-sb">
            <h3 className="sidebar-title-sb"></h3>
            <span className="sidebar-subtitle-sb"></span>
          </div>

          <div className="sidebar-actions-sb">
            {/* Desktop controls */}
            <button
            type="button"
            className="sidebar-actionBtn-sb sidebar-desktopOnly-sb"
            onClick={handleCollapseClick}
            aria-label="Réduire/Étendre"
            title="Réduire/Étendre"
            >
            {collapsed ? "»" : "«"}
            </button>


            {/* Mobile close */}
            <button
              type="button"
              className="sidebar-actionBtn-sb sidebar-mobileOnly-sb"
              onClick={onCloseMobile}
              aria-label="Fermer"
              title="Fermer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* <div className="sidebar-section-sb">
          <div className="sidebar-grid2-sb">
            <button className="sidebar-chip-sb sidebar-chipActive-sb" type="button">
              <span className="sidebar-chipIcon-sb">🏠</span>
              <span className="sidebar-chipText-sb">House</span>
            </button>

            <button className="sidebar-chip-sb" type="button">
              <span className="sidebar-chipIcon-sb">🏢</span>
              <span className="sidebar-chipText-sb">Apartment</span>
            </button>

            <button className="sidebar-chip-sb" type="button">
              <span className="sidebar-chipIcon-sb">🏬</span>
              <span className="sidebar-chipText-sb">Commercial</span>
            </button>

            <button className="sidebar-chip-sb" type="button">
              <span className="sidebar-chipIcon-sb">🧱</span>
              <span className="sidebar-chipText-sb">Land plot</span>
            </button>
          </div>
        </div> */}

        <div className="sidebar-section-sb sidebar-promo-sb">
            <img
          src="/olouer.png"
          alt="Olouer"
          className="navbar-logo-img-sb"
          />
            <h3 className="sidebar-promoTitle-sb">Votre référence en location et vente d’appartements</h3>
            <p className="sidebar-promoDesc-sb">
                Louez ou achetez votre appartement en toute simplicité.
                Contactez-nous sur nos différents canaux.
            </p>

            <p className="sidebar-promoDesc-sb sidebar-promoIcons-sb">
                <a href="#sss" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>

                <a href="#sss" aria-label="TikTok">
                    <FaTiktok />
                </a>

                <a href="#sss" aria-label="Facebook">
                    <FaFacebookF />
                </a>

                <a href="tel:+123456789" aria-label="Téléphone">
                    <FaPhoneAlt />
                </a>

                <a href="mailto:contact@example.com" aria-label="Email">
                    <FaEnvelope />
                </a>
                </p>


           
            </div>


        
      </aside>
    </>
  );
}
