// src/components/sections/GaleriaProyectos.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  CÓMO REEMPLAZAR LAS FOTOS CON LAS TUYAS
// ─────────────────────────────────────────────────────────────────────────────
//  1. Importa tus imágenes al inicio del archivo, igual que en los otros
//     componentes del proyecto:
//
//     import foto1 from "../../assets/images/galeria/foto1.jpg"
//     import foto2 from "../../assets/images/galeria/foto2.jpg"
//     ... (hasta foto15)
//
//  2. En el array PHOTOS de abajo, reemplaza cada campo `src` con tu import:
//
//     src: foto1,
//
//  3. Ajusta el campo `orientation` según cada foto:
//     - "landscape"  → foto tomada en horizontal (típico de cámara/desktop)
//     - "portrait"   → foto tomada en vertical   (típico de móvil parado)
//
//  4. Actualiza `alt` con una descripción real del proyecto.
//
//  5. (Opcional) Cambia `label` por el nombre real del proyecto/lugar.
// ─────────────────────────────────────────────────────────────────────────────
// src/components/sections/GaleriaProyectos.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  PASO 1 — Copia las fotos a:  src/assets/images/galeria/
//
//  PASO 2 — Descomenta y ajusta los imports de abajo:
//
// import foto1  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__1_.jpeg"
// import foto2  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__2_.jpeg"
// import foto3  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__3_.jpeg"
// import foto4  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM.jpeg"
// import foto5  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_20_AM__1_.jpeg"
// import foto6  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_20_AM.jpeg"
// import foto7  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_22_AM.jpeg"
// import foto8  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_08_AM.jpeg"
// import foto9  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_31_AM__1_.jpeg"
// import foto10 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_48_AM.jpeg"
// import foto11 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_49_AM.jpeg"
// import foto12 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_49_AM__1_.jpeg"
// import foto13 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_51_AM.jpeg"
// import foto14 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_52_AM.jpeg"
// import foto15 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_53_AM.jpeg"
// import foto16 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_54_AM.jpeg"
// import foto17 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_57_AM.jpeg"
// import foto18 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_03_04_AM.jpeg"
// import foto19 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_03_05_AM.jpeg"
//
//  PASO 3 — En el array PHOTOS cambia cada `src` por su variable:
//           src: foto1,   src: foto2,  ... etc.
// ─────────────────────────────────────────────────────────────────────────────

// src/components/sections/GaleriaProyectos.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  MASONRY ESTILO PINTEREST — cada foto mantiene su altura natural
// ─────────────────────────────────────────────────────────────────────────────
//
//  PASO 1 — Copia las fotos a: src/assets/images/galeria/
//
//  PASO 2 — Descomenta los imports:
//
// import foto1  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__1_.jpeg"
// import foto2  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__2_.jpeg"
// import foto3  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM__3_.jpeg"
// import foto4  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_15_AM.jpeg"
// import foto5  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_20_AM__1_.jpeg"
// import foto6  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_20_AM.jpeg"
// import foto7  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_8_46_22_AM.jpeg"
// import foto8  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_08_AM.jpeg"
// import foto9  from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_31_AM__1_.jpeg"
// import foto10 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_48_AM.jpeg"
// import foto11 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_49_AM.jpeg"
// import foto12 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_49_AM__1_.jpeg"
// import foto13 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_51_AM.jpeg"
// import foto14 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_52_AM.jpeg"
// import foto15 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_53_AM.jpeg"
// import foto16 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_54_AM.jpeg"
// import foto17 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_02_57_AM.jpeg"
// import foto18 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_03_04_AM.jpeg"
// import foto19 from "../../assets/images/galeria/WhatsApp_Image_2026-03-08_at_9_03_05_AM.jpeg"
//
//  PASO 3 — En PHOTOS, cambia cada `src` por su variable: src: foto1, etc.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import img1 from "../../assets/images/galeria/WhatsApp Image 2026-03-08 at 8.46.15 AM (1).jpeg"
import postes1 from "../../assets/images/galeria/postes1.jpeg"
import postes from "../../assets/images/galeria/humedopostes.jpeg"
import equipo from "../../assets/images/galeria/equipoEcoafa.jpeg"
import tecnico from "../../assets/images/galeria/tecnicoEcoafa.jpeg"
import cuenca from "../../assets/images/galeria/cuencaHidrica.jpeg"
import residuos from "../../assets/images/galeria/residuos.jpeg"
import materiales from "../../assets/images/galeria/materiales.jpeg"
import plantaTratamiento from "../../assets/images/galeria/plantaTratamiento.jpeg"
import plantaBoscoso from "../../assets/images/galeria/plantaBoscoso.jpeg"
import monitoreoCalidad from "../../assets/images/galeria/monitoreocalidad.jpeg"
import riberaFluvial from "../../assets/images/galeria/riberafluvial.jpeg"
import bombeo from "../../assets/images/galeria/bombeo.jpeg"
import residuosolidos from "../../assets/images/galeria/residuosolidos.jpeg"
import ESP from "../../assets/images/galeria/ESP.jpeg"
import ladera from "../../assets/images/galeria/ladera.jpeg"
import car from "../../assets/images/galeria/Car.jpeg"
import participativa from "../../assets/images/galeria/participativa.jpeg"
import jornadaAmbiental from "../../assets/images/galeria/jornadaAmbiental.jpeg"
import estufaLadrillo from "../../assets/images/galeria/estufaLadrillo.jpeg"
import siembraEspaldas from "../../assets/images/galeria/yarid.jpeg"
import mujeresEntrega from "../../assets/images/galeria/mujeresEntrega.jpeg"
import terrenoMilitar from "../../assets/images/galeria/terrenoMIlitar.jpeg"
import materialesObrero from "../../assets/images/galeria/materialObrerio.jpeg"

interface Photo {
  id: number;
  src: string;
  alt: string;
  label: string;
  // w y h reales para el padding-trick (aspect ratio correcto sin layout shift)
  w: number;
  h: number;
}

// Dimensiones reales medidas con PIL — no modificar
const PHOTOS: Photo[] = [
  {
    id: 1,
    src: img1,
    alt: "Letrero proyecto CAR — Predio El Paraíso, Cuenca Río Garagoa",
    label: "Predio El Paraíso — Río Garagoa",
    w: 2000, h: 1500,
  },
  {
    id: 2,
    src: postes1,
    alt: "Técnicos midiendo postes de aislamiento de predio",
    label: "Aislamiento predial",
    w: 1500, h: 2000,
  },
  {
    id: 3,
    src: postes,
    alt: "Instalación de cerca en bosque húmedo de montaña",
    label: "Aislamiento bosque húmedo",
    w: 1500, h: 2000,
  },
  {
    id: 4,
    src: equipo,
    alt: "Equipo ECOAFA junto al letrero del proyecto El Paraíso",
    label: "Equipo ECOAFA — El Paraíso",
    w: 2000, h: 1500,
  },
  {
    id: 5,
    src: tecnico,
    alt: "Técnico ECOAFA inspeccionando fuente hídrica bajo puente",
    label: "Inspección fuente hídrica",
    w: 2000, h: 1500,
  },
  {
    id: 6,
    src: cuenca,
    alt: "Bocatoma y caudal hídrico en cuenca",
    label: "Monitoreo bocatoma",
    w: 2000, h: 1500,
  },
  {
    id: 7,
    src: residuos,
    alt: "Inspección de planta de tratamiento de aguas residuales",
    label: "Inspección PTAR",
    w: 2000, h: 1500,
  },
  {
    id: 8,
    src: materiales,
    alt: "Materiales para obra en campo — cemento, tubería, ladrillo",
    label: "Logística de materiales",
    w: 1200, h: 1600,
  },
  {
    id: 9,
    src: plantaTratamiento,
    alt: "Planta de potabilización — tanques azules con sistema de filtración",
    label: "Planta potabilización",
    w: 2000, h: 1500,
  },
  {
    id: 10,
    src: plantaBoscoso,
    alt: "Vista exterior planta de potabilización en entorno boscoso",
    label: "PTAP — entorno boscoso",
    w: 2000, h: 1500,
  },
  {
    id: 11,
    src: monitoreoCalidad,
    alt: "Vertimiento a cuerpo hídrico — monitoreo de calidad de agua",
    label: "Monitoreo calidad hídrica",
    w: 2000, h: 1500,
  },
  {
    id: 12,
    src: riberaFluvial,
    alt: "Técnico inspeccionando orilla de río de gran caudal",
    label: "Inspección ribera fluvial",
    w: 2000, h: 1500,
  },
  {
    id: 13,
    src: bombeo,
    alt: "Inspección de pozo y sistema de bombeo de agua potable",
    label: "Diagnóstico sistema de bombeo",
    w: 2000, h: 1500,
  },
  {
    id: 14,
    src: residuosolidos,
    alt: "Centro de acopio y manejo de residuos sólidos",
    label: "Gestión de residuos — El Colegio",
    w: 2000, h: 1500,
  },
  {
    id: 15,
    src: ESP,
    alt: "Instalaciones Empucol ESP",
    label: "Empucol ESP — El Colegio",
    w: 2000, h: 1500,
  },
  {
    id: 16,
    src: ladera,
    alt: "Equipo técnico recorriendo zona de ladera en campo",
    label: "Recorrido de campo — ladera",
    w: 1125, h: 2000,
  },
  {
    id: 17,
    src: car,
    alt: "Jornada de siembra comunitaria con técnicos CAR",
    label: "Siembra comunitaria — CAR",
    w: 1500, h: 2000,
  },
  {
    id: 18,
    src: participativa,
    alt: "Participante plantando árbol en jornada de reforestación",
    label: "Reforestación participativa",
    w: 1500, h: 2000,
  },
  {
    id: 19,
    src: jornadaAmbiental,
    alt: "Siembra colectiva comunitaria — jornada ambiental",
    label: "Jornada ambiental comunitaria",
    w: 2000, h: 1500,
  },
  {
    id: 20,
    src: estufaLadrillo,
    alt: "Construcción de estufa eficiente en ladrillo con chimenea — obra en campo",
    label: "Estufa eficiente — obra comunitaria",
    w: 4032, h: 3024,
  },
  {
    id: 21,
    src: siembraEspaldas,
    alt: "Técnica CAR y comunidad plantando árboles en jornada de reforestación",
    label: "Reforestación comunitaria",
    w: 1500, h: 2000,
  },
  {
    id: 22,
    src: mujeresEntrega,
    alt: "Entrega de insumos a mujeres beneficiarias junto a camión de logística",
    label: "Entrega de insumos — beneficiarias",
    w: 2000, h: 1500,
  },
  {
    id: 23,
    src: terrenoMilitar,
    alt: "Inspección de terreno con losa de concreto — recorrido técnico con militar",
    label: "Inspección predial — zona rural",
    w: 2000, h: 1500,
  },
  {
    id: 24,
    src: materialesObrero,
    alt: "Obrero con materiales de construcción — cemento, ladrillo y accesorios de estufa",
    label: "Logística de materiales — estufa",
    w: 1500, h: 2000,
  },
];

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ photos, index, onClose }: { photos: Photo[]; index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);

  const p = photos[current];
  const isPortrait = p.h > p.w;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      {/* Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
      >
        <X size={18} />
      </button>

      {/* Contador */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full"
        style={{ color: "#7DC242", backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        {current + 1} / {photos.length}
      </div>

      {/* Flechas */}
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform" style={{ backgroundColor: "rgba(255,255,255,0.10)" }}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform" style={{ backgroundColor: "rgba(255,255,255,0.10)" }}>
        <ChevronRight size={20} />
      </button>

      {/* Imagen con ratio real */}
      <div
        className="relative flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: isPortrait ? "min(52vw, 460px)" : "min(88vw, 1080px)",
          width: "100%",
        }}
      >
        {/* Padding-trick para reservar espacio exacto */}
        <div style={{ position: "relative", width: "100%", paddingBottom: `${(p.h / p.w) * 100}%`, maxHeight: "80vh", overflow: "hidden", borderRadius: "10px" }}>
          <img
            key={p.id}
            src={p.src}
            alt={p.alt}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={12} style={{ color: "#00AEEF", flexShrink: 0 }} />
          <p className="text-white/60 text-xs font-medium">{p.label}</p>
        </div>
      </div>

      {/* Thumbnails proporcionales */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto max-w-[90vw] pb-1 px-2">
        {photos.map((ph, i) => {
          const thumbH = 40;
          const thumbW = Math.round((ph.w / ph.h) * thumbH);
          return (
            <button
              key={ph.id}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-200"
              style={{ width: `${thumbW}px`, height: `${thumbH}px`, outline: i === current ? "2px solid #7DC242" : "2px solid transparent", opacity: i === current ? 1 : 0.38 }}
            >
              <img src={ph.src} alt="" className="w-full h-full object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── MASONRY TIPO PINTEREST con CSS columns ───────────────────────────────────
// Técnica: `column-count` + `break-inside: avoid` + img width:100% height:auto
// Resultado: cada foto fluye a su altura natural, igual que la referencia.

function PinterestGrid({ photos, onOpen }: { photos: Photo[]; onOpen: (i: number) => void }) {
  return (
    <>
      <style>{`
        .pin-grid {
          column-count: 4;
          column-gap: 8px;
        }
        @media (max-width: 960px) { .pin-grid { column-count: 3; } }
        @media (max-width: 640px) { .pin-grid { column-count: 2; column-gap: 6px; } }

        .pin-item {
          break-inside: avoid;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          display: block;
          background: #1a2e1a;
        }
        @media (max-width: 640px) { .pin-item { margin-bottom: 6px; } }

        /* La imagen define la altura — width 100%, height auto = ratio real */
        .pin-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .pin-item:hover img { transform: scale(1.04); }

        /* Overlay que aparece al hover */
        .pin-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px;
        }
        .pin-item:hover .pin-overlay { opacity: 1; }

        .pin-zoom {
          position: absolute;
          top: 9px; right: 9px;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(125,194,66,0.90);
          display: flex; align-items: center; justify-content: center;
          transform: scale(0.4) rotate(-12deg);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .pin-item:hover .pin-zoom {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        .pin-label {
          color: rgba(255,255,255,0.92);
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          line-height: 1.35;
          display: flex;
          align-items: flex-start;
          gap: 5px;
        }
        .pin-label-dot {
          color: #7DC242;
          flex-shrink: 0;
          margin-top: 1px;
        }
      `}</style>

      <div className="pin-grid">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className="pin-item"
            onClick={() => onOpen(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpen(i)}
            aria-label={photo.label}
          >
            {/*
              width y height en el <img> sirven para que el browser
              reserve el espacio antes de cargar (evita layout shift)
              y respeta el ratio real de cada foto.
            */}
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              loading="lazy"
            />
            <div className="pin-overlay">
              <div className="pin-label">
                <span className="pin-label-dot">◆</span>
                {photo.label}
              </div>
            </div>
            <div className="pin-zoom">
              <ZoomIn size={14} color="#fff" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function GaleriaProyectos() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="galeria"
        className="relative py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#f4f7f0" }}
      >
        {/* Línea superior */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
        />

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-[0.35em] uppercase mb-3"
              style={{ color: "#00AEEF" }}
            >
              Trabajo en campo
            </p>
            <h2
              className="font-black uppercase tracking-tight leading-none mb-4"
              style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", color: "#1A2E1A" }}
            >
              GALERÍA DE{" "}
              <span style={{ color: "#7DC242" }}>PROYECTOS</span>
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-5"
              style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
            />
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Evidencia fotográfica de nuestros proyectos ejecutados — aislamiento
              de predios, monitoreo hídrico, plantas de tratamiento y jornadas
              comunitarias de siembra.
            </p>
          </div>

          {/* Masonry Pinterest */}
          <PinterestGrid photos={PHOTOS} onOpen={(i) => setLightboxIndex(i)} />

          <p className="text-center text-gray-400 text-xs mt-10 tracking-wide">
            Haz clic en cualquier foto para ampliarla · {PHOTOS.length} fotografías
          </p>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}