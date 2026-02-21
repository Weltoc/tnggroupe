// Footer.js
import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-fts">
      <div className="footer__inner-fts">
        {/* NEWSLETTER BAR */}
        <div className="footer__newsletter-fts">
          <div className="footer__nlLeft-fts">
            <div className="footer__nlTitle-fts">
            Roulez maintenant, payez progressivement
            </div>
            <div className="footer__nlText-fts">
            Avec TNG Groupe, obtenez votre moto ou voiture à crédit en toute simplicité.
            </div>

          </div>

          <form
            className="footer__nlForm-fts"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="footer__nlInputWrap-fts">
              <img alt="logo" src="/tng.jpeg" style={{ width: 100 , height: 100 , borderRadius: 80}}/>
            </div>
            
          </form>

         
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom-fts">
          {/* Brand */}
          <div className="footer__brand-fts">
            <div className="footer__brandTop-fts">
            <span className="footer__brandName-fts">TNG Groupe</span>
            </div>

            <p className="footer__brandDesc-fts">
            Votre solution simple pour acheter une moto ou une voiture à crédit :
            40% d’acompte, puis paiement progressif par jour ou par mois.
            </p>


            <div className="footer__social-fts" aria-label="Réseaux sociaux">
              <a className="footer__socialBtn-fts" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="footer__socialBtn-fts" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="footer__socialBtn-fts" href="https://www.tiktok.com/@tnggroupe" target="_blank" rel="noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a className="footer__socialBtn-fts" href="https://wa.me/22871985736" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
             
            </div>
          </div>

          {/* Columns */}
          <div className="footer__cols-fts">
            <div className="footer__col-fts">
              <div className="footer__colTitle-fts">Features</div>
              <a className="footer__link-fts" href="/">API</a>
              <a className="footer__link-fts" href="/">Pricing</a>
              <a className="footer__link-fts" href="/">Docs</a>
            </div>

            <div className="footer__col-fts">
              <div className="footer__colTitle-fts">Support</div>
              <a className="footer__link-fts" href="/">Account</a>
              <a className="footer__link-fts" href="/">FAQ</a>
              <a className="footer__link-fts" href="/">Contact</a>
            </div>

            <div className="footer__col-fts">
              <div className="footer__colTitle-fts">Legal</div>
              <a className="footer__link-fts" href="/">Privacy</a>
              <a className="footer__link-fts" href="/">Terms of Service</a>
              <a className="footer__link-fts" href="/">Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer__copy-fts">
          © {new Date().getFullYear()} TNG Groupe. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
