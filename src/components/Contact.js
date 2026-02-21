// Contact.js
import React from "react";
import "./Contact.css";
import {
  FaTiktok,
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="contact-ctc" id="contact">
      <div className="contact__inner-ctc">
        {/* LEFT */}
        <div className="contact__left-ctc">
          <div className="contact__kicker-ctc">NOUS SOMMES LÀ POUR VOUS AIDER</div>

            <h2 className="contact__title-ctc">
            Discutez de vos <br />
            besoins en <br />
            <span className="contact__titleStrong-ctc">engins à crédit</span>
            </h2>

            <p className="contact__desc-ctc">
            Besoin d’une moto ou d’une voiture à crédit ? Versez <strong>40%</strong>{" "}
            d’acompte, nous complétons le reste, puis vous payez progressivement{" "}
            <strong>par jour</strong> ou <strong>par mois</strong>. Contactez-nous
            maintenant.
            </p>


          <div className="contact__info-ctc">
            
          </div>
        </div>

        {/* RIGHT (Socials card like the form) */}
        <aside className="contact__card-ctc" aria-label="Réseaux sociaux">
          <div className="contact__cardInner-ctc">
            <div className="contact__cardTitle-ctc">Retrouvez-nous</div>
            <div className="contact__cardSub-ctc">
              Cliquez pour nous écrire ou nous appeler.
            </div>

            <div className="contact__socialGrid-ctc">
              <a
                className="contact__socialItem-ctc"
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <FaTiktok />
                </span>
                <span className="contact__socialText-ctc">TikTok</span>
              </a>

              <a
                className="contact__socialItem-ctc"
                href="https://wa.me/22871985736"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <FaWhatsapp />
                </span>
                <span className="contact__socialText-ctc">WhatsApp</span>
              </a>

              <a className="contact__socialItem-ctc" href="mailto:tnggroupe@gmail.com">
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <MdEmail />
                </span>
                <span className="contact__socialText-ctc">Mail</span>
              </a>

              <a className="contact__socialItem-ctc" href="tel:+22871985736">
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <span className="contact__socialText-ctc">Téléphone</span>
              </a>

              <a
                className="contact__socialItem-ctc"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <FaFacebookF />
                </span>
                <span className="contact__socialText-ctc">Facebook</span>
              </a>

              <a
                className="contact__socialItem-ctc"
                href="https://www.google.com/maps?q=Sagbado+IPG"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__socialIcon-ctc" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <span className="contact__socialText-ctc">Localisation</span>
              </a>
            </div>

            <div className="contact__ctaRow-ctc">
              <a className="contact__ctaBtn-ctc" href="https://wa.me/22871985736" target="_blank" rel="noreferrer">
                <span className="contact__ctaDot-ctc" aria-hidden="true">›</span>
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
