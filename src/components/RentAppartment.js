import React, { useEffect, useMemo, useState } from "react";
import "./RentAppartment.css";
import { FiMapPin, FiX, FiChevronDown, FiChevronLeft, FiChevronRight, FiPlus, FiMinus } from "react-icons/fi";

// ---- Demo data (remplace par tes données/API) ----
const DEMO_LIST_RA = [
  {
    id: "p1",
    title: "Ahlers & Ogletree",
    address: "132 Northbrooke Trce, Woodstock, GA",
    price: 2695,
    period: "month",
    beds: 6,
    baths: 4,
    area: 2787,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&auto=format&fit=crop",
    ],
    lat: 34.1015,
    lng: -84.5194,
  },
  {
    id: "p2",
    title: "Hillary Gross",
    address: "777 Osprey Hammock Trl, Sanford, FL",
    price: 5495,
    period: "month",
    beds: 5,
    baths: 4,
    area: 4932,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop",
    ],
    lat: 28.8003,
    lng: -81.2736,
  },
  {
    id: "p3",
    title: "Villa Tropical Cana",
    address: "540 Belle Gate Pl, Cary, NC",
    price: 3300,
    period: "month",
    beds: 6,
    baths: 5,
    area: 3675,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1400&auto=format&fit=crop",
    ],
    lat: 35.7915,
    lng: -78.7811,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
  {
    id: "p4",
    title: "Sabina Apartments",
    address: "201 Grand Key Loop E, Destin, FL",
    price: 3975,
    period: "month",
    beds: 4,
    baths: 3,
    area: 3250,
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop",
    ],
    lat: 30.3935,
    lng: -86.4958,
  },
];

function formatMoneyRA(n) {
  return n.toLocaleString("en-US");
}

function osmEmbedUrlRA(lat, lng) {
  const delta = 0.03;
  const left = lng - delta;
  const right = lng + delta;
  const top = lat + delta;
  const bottom = lat - delta;
  const bbox = `${left}%2C${bottom}%2C${right}%2C${top}`;
  const marker = `${lat}%2C${lng}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
}

function useIsMobileRA(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

function clampRA(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export default function RentAppartment() {
  const isMobile = useIsMobileRA(900);

  const [itemsRa] = useState(DEMO_LIST_RA);
  const [selectedRa, setSelectedRa] = useState(itemsRa[0]);

  // mobile bottom-sheet
  const [modalOpenRa, setModalOpenRa] = useState(false);

  // carousel
  const [activeImgIndexRa, setActiveImgIndexRa] = useState(0);

  // zoom lightbox
  const [zoomOpenRa, setZoomOpenRa] = useState(false);
  const [zoomIndexRa, setZoomIndexRa] = useState(0);
  const [zoomScaleRa, setZoomScaleRa] = useState(1);

  useEffect(() => {
    // reset carousel when selection changes
    setActiveImgIndexRa(0);
  }, [selectedRa?.id]);

  const mapSrcRa = useMemo(() => {
    if (!selectedRa) return "";
    return osmEmbedUrlRA(selectedRa.lat, selectedRa.lng);
  }, [selectedRa]);

  const selectedImagesRa = selectedRa?.images?.length ? selectedRa.images : [];

  const handleSelectRa = (item) => {
    setSelectedRa(item);
    if (isMobile) setModalOpenRa(true);
  };

  const closeModalRa = () => setModalOpenRa(false);

  const prevImgRa = () => {
    if (!selectedImagesRa.length) return;
    setActiveImgIndexRa((i) => (i - 1 + selectedImagesRa.length) % selectedImagesRa.length);
  };

  const nextImgRa = () => {
    if (!selectedImagesRa.length) return;
    setActiveImgIndexRa((i) => (i + 1) % selectedImagesRa.length);
  };

  const openZoomRa = (index) => {
    setZoomIndexRa(index);
    setZoomScaleRa(1);
    setZoomOpenRa(true);
  };

  const closeZoomRa = () => setZoomOpenRa(false);

  const zoomInRa = () => setZoomScaleRa((z) => clampRA(Number((z + 0.25).toFixed(2)), 1, 4));
  const zoomOutRa = () => setZoomScaleRa((z) => clampRA(Number((z - 0.25).toFixed(2)), 1, 4));

  const onZoomWheelRa = (e) => {
    // zoom molette (desktop)
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoomScaleRa((z) => clampRA(Number((z + delta).toFixed(2)), 1, 4));
  };

  const goPrevZoomRa = () => {
    if (!selectedImagesRa.length) return;
    setZoomIndexRa((i) => (i - 1 + selectedImagesRa.length) % selectedImagesRa.length);
    setZoomScaleRa(1);
  };

  const goNextZoomRa = () => {
    if (!selectedImagesRa.length) return;
    setZoomIndexRa((i) => (i + 1) % selectedImagesRa.length);
    setZoomScaleRa(1);
  };

  const renderCarouselRa = ({ compact = false } = {}) => {
    if (!selectedImagesRa.length) return null;

    const activeSrc = selectedImagesRa[activeImgIndexRa];

    return (
      <div className={`rent-carousel-ra ${compact ? "rent-carouselCompact-ra" : ""}`}>
        <div className="rent-carouselTop-ra">
          <div className="rent-carouselTitle-ra">Photos</div>

          <div className="rent-carouselNav-ra">
            <button className="rent-carouselBtn-ra" type="button" onClick={prevImgRa} aria-label="Previous photo">
              <FiChevronLeft />
            </button>
            <div className="rent-carouselCounter-ra">
              {activeImgIndexRa + 1}/{selectedImagesRa.length}
            </div>
            <button className="rent-carouselBtn-ra" type="button" onClick={nextImgRa} aria-label="Next photo">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <button
          className="rent-carouselHeroBtn-ra"
          type="button"
          onClick={() => openZoomRa(activeImgIndexRa)}
          aria-label="Zoom photo"
          title="Cliquer pour zoomer"
        >
          <img className="rent-carouselHeroImg-ra" src={activeSrc} alt="Property" />
          <div className="rent-carouselZoomHint-ra">Zoom</div>
        </button>

        <div className="rent-thumbs-ra" aria-label="Thumbnails">
          {selectedImagesRa.map((src, idx) => {
            const active = idx === activeImgIndexRa;
            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                className={`rent-thumb-ra ${active ? "rent-thumbActive-ra" : ""}`}
                onClick={() => setActiveImgIndexRa(idx)}
                aria-label={`Photo ${idx + 1}`}
              >
                <img className="rent-thumbImg-ra" src={src} alt={`thumb-${idx + 1}`} />
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="rent-ra">
      <div className="rent-header-ra">
        <div className="rent-headerLeft-ra">
          <h2 className="rent-title-ra">
            Search results <span className="rent-count-ra">{itemsRa.length}</span>
          </h2>
        </div>

        <button className="rent-sort-ra" type="button" aria-label="Sort">
          Added today <FiChevronDown />
        </button>
      </div>

      <div className="rent-layout-ra">
        {/* LIST */}
        <aside className="rent-listPane-ra" aria-label="Results list">
          <div className="rent-list-ra">
            {itemsRa.map((it) => {
              const active = selectedRa?.id === it.id;
              const thumb = it.images?.[0];

              return (
                <button
                  key={it.id}
                  type="button"
                  className={`rent-card-ra ${active ? "rent-cardActive-ra" : ""}`}
                  onClick={() => handleSelectRa(it)}
                >
                  <div className="rent-cardImgWrap-ra">
                    {thumb ? (
                      <img className="rent-cardImg-ra" src={thumb} alt={it.title} loading="lazy" />
                    ) : (
                      <div className="rent-cardImgFallback-ra">No photo</div>
                    )}
                    {Array.isArray(it.images) && it.images.length > 1 && (
                      <div className="rent-cardImgCount-ra">{it.images.length} photos</div>
                    )}
                  </div>

                  <div className="rent-cardBody-ra">
                    <div className="rent-cardTop-ra">
                      <div className="rent-cardTitle-ra">{it.title}</div>
                      <div className="rent-save-ra" aria-hidden="true">♡</div>
                    </div>

                    <div className="rent-cardAddr-ra">{it.address}</div>

                    <div className="rent-cardMeta-ra">
                      <span>{it.beds} bd</span>
                      <span className="rent-dot-ra">•</span>
                      <span>{it.baths} ba</span>
                      <span className="rent-dot-ra">•</span>
                      <span>{formatMoneyRA(it.area)} sqft</span>
                    </div>

                    <div className="rent-price-ra">
                      ${formatMoneyRA(it.price)}/{it.period}
                    </div>

                    <div className="rent-mobileHint-ra">Tap to view details</div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT: MAP + CAROUSEL */}
        <div className="rent-rightPane-ra" aria-label="Map and media">
          <div className="rent-mapPane-ra" aria-label="Map">
            <div className="rent-mapHeader-ra">
              <div className="rent-mapPin-ra"><FiMapPin /></div>
              <div className="rent-mapTitle-ra">
                {selectedRa ? selectedRa.title : "Select a property"}
              </div>
            </div>

            <div className="rent-mapFrameWrap-ra">
              <iframe className="rent-mapFrame-ra" title="Map" src={mapSrcRa} loading="lazy" />
            </div>
          </div>

          {/* Desktop carousel under the map */}
          {!isMobile && selectedRa && renderCarouselRa()}
        </div>
      </div>

      {/* MOBILE MODAL (bottom-sheet) */}
      <div
        className={`rent-modalOverlay-ra ${modalOpenRa ? "rent-modalOverlayShow-ra" : ""}`}
        onClick={closeModalRa}
        aria-hidden={!modalOpenRa}
      />

      <div className={`rent-modal-ra ${modalOpenRa ? "rent-modalOpen-ra" : ""}`} role="dialog" aria-modal="true">
        {selectedRa && (
          <>
            <div className="rent-modalHandle-ra" />

            <div className="rent-modalHeader-ra">
              <div className="rent-modalTitle-ra">{selectedRa.title}</div>
              <button className="rent-modalClose-ra" type="button" onClick={closeModalRa} aria-label="Close">
                <FiX />
              </button>
            </div>

            <div className="rent-modalContent-ra">
              <div className="rent-modalAddr-ra">{selectedRa.address}</div>

              <div className="rent-modalMeta-ra">
                <div className="rent-pill-ra">{selectedRa.beds} Beds</div>
                <div className="rent-pill-ra">{selectedRa.baths} Baths</div>
                <div className="rent-pill-ra">{formatMoneyRA(selectedRa.area)} sqft</div>
              </div>

              <div className="rent-modalPriceRow-ra">
                <div className="rent-modalPrice-ra">
                  ${formatMoneyRA(selectedRa.price)}/{selectedRa.period}
                </div>
              </div>

              {/* Carousel in mobile modal */}
              {renderCarouselRa({ compact: true })}

              <button
                className="rent-modalCta-ra"
                type="button"
                onClick={() => {
                  closeModalRa();
                  document.querySelector(".rent-mapPane-ra")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Voir sur la carte
              </button>
            </div>
          </>
        )}
      </div>

      {/* ZOOM LIGHTBOX */}
      <div
        className={`rent-zoomOverlay-ra ${zoomOpenRa ? "rent-zoomOverlayShow-ra" : ""}`}
        onClick={closeZoomRa}
        aria-hidden={!zoomOpenRa}
      />

      <div className={`rent-zoom-ra ${zoomOpenRa ? "rent-zoomOpen-ra" : ""}`} role="dialog" aria-modal="true">
        {zoomOpenRa && selectedImagesRa.length > 0 && (
          <>
            <div className="rent-zoomHeader-ra">
              <div className="rent-zoomTitle-ra">
                Photo {zoomIndexRa + 1}/{selectedImagesRa.length}
              </div>

              <div className="rent-zoomControls-ra">
                <button className="rent-zoomBtn-ra" type="button" onClick={goPrevZoomRa} aria-label="Previous">
                  <FiChevronLeft />
                </button>

                <button className="rent-zoomBtn-ra" type="button" onClick={zoomOutRa} aria-label="Zoom out">
                  <FiMinus />
                </button>

                <div className="rent-zoomScale-ra">{Math.round(zoomScaleRa * 100)}%</div>

                <button className="rent-zoomBtn-ra" type="button" onClick={zoomInRa} aria-label="Zoom in">
                  <FiPlus />
                </button>

                <button className="rent-zoomBtn-ra" type="button" onClick={goNextZoomRa} aria-label="Next">
                  <FiChevronRight />
                </button>

                <button className="rent-zoomClose-ra" type="button" onClick={closeZoomRa} aria-label="Close">
                  <FiX />
                </button>
              </div>
            </div>

            <div className="rent-zoomBody-ra" onWheel={onZoomWheelRa}>
              <img
                className="rent-zoomImg-ra"
                src={selectedImagesRa[zoomIndexRa]}
                alt="Zoom"
                style={{ transform: `scale(${zoomScaleRa})` }}
                draggable={false}
              />
            </div>

            <div className="rent-zoomRangeWrap-ra">
              <input
                className="rent-zoomRange-ra"
                type="range"
                min="1"
                max="4"
                step="0.05"
                value={zoomScaleRa}
                onChange={(e) => setZoomScaleRa(Number(e.target.value))}
                aria-label="Zoom range"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
