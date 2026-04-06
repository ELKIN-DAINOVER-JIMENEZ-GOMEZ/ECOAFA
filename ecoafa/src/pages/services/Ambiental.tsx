// src/pages/servicios/Ambiental.tsx
import React from "react";
import { Globe, Leaf, Recycle, Droplets, Waves, Wind, Factory, Settings, TestTube, Megaphone } from "lucide-react";

interface ServiceItem { icon: React.ReactNode; text: string; }

const services1: ServiceItem[] = [
  { icon: <Globe className="w-7 h-7" />, text: "Estudios de Impacto Ambiental para licencias ambientales" },
  { icon: <Leaf className="w-7 h-7" />, text: "Planes de Manejo Ambiental, Permiso de Aprovechamiento Forestal y Solicitud de Levantamiento de Veda" },
  { icon: <Recycle className="w-7 h-7" />, text: "Diseño e Implementación de Planes de Gestión Integral para el Manejo de Residuos convencionales y peligrosos" },
  { icon: <Droplets className="w-7 h-7" />, text: "Diseño e Implementación de Programas para el Ahorro y Uso Eficiente de Agua" },
  { icon: <Waves className="w-7 h-7" />, text: "Diseño e implementación de Programas para el Manejo de Agua Residual" },
  { icon: <Wind className="w-7 h-7" />, text: "Programas de control de Calidad de Aire" },
  { icon: <Factory className="w-7 h-7" />, text: "Asesoría en la estructuración de Planes Saneamiento y Manejo de Vertimientos" },
];

const services: ServiceItem[] = [
  ...services1,
  { icon: <Settings className="w-7 h-7" />, text: "Asesoría para Optimizar los Procesos de las Plantas de Tratamiento de agua residual y agua potable" },
  { icon: <TestTube className="w-7 h-7" />, text: "Monitoreos de Calidad de Agua (Residual – Potable)" },
  { icon: <Megaphone className="w-7 h-7" />, text: "Capacitación y Divulgación Ambiental" },
];

const complementaryServices: ServiceItem[] = [
  {
    icon: <Settings className="w-7 h-7" />,
    text: "Estudios y diseños de planes maestros, AVR, hidrogeológicos.",
  },
  {
    icon: <TestTube className="w-7 h-7" />,
    text: "Programas de monitoreo de oso",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    text: "Acciones de investigación participativa para fauna amenazada",
  },
];

function ServiceCard({ item, accent }: { item: ServiceItem; accent: string }) {
  return (
    <div
      className="relative flex flex-col gap-5 rounded-2xl p-7 bg-white/70 backdrop-blur-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 group cursor-default overflow-hidden"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, transparent, ${accent})` }}
      />
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm relative z-10"
        style={{ 
          backgroundColor: `${accent}15`, 
          color: accent,
          border: `1px solid ${accent}30`
        }}
      >
        {item.icon}
      </div>
      <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-200 relative z-10">
        {item.text}
      </p>
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

function CardsSection({
  items,
  label,
  accent = "#7DC242",
  bg = "#f4f7f0",
}: {
  items: ServiceItem[];
  label: string;
  accent?: string;
  bg?: string;
}) {
  return (
    <section className="py-24 px-6 relative" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-4"
            style={{ 
              color: accent, 
              backgroundColor: `${accent}15`,
              border: `1px solid ${accent}30` 
            }}
          >
            {label}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ServiceCard key={i} item={item} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Ambiental() {
  return (
    <>
      <style>{`
        @keyframes kbAmbiental {
          from { transform: scale(1.07); }
          to   { transform: scale(1.0); }
        }
        .kb-ambiental { animation: kbAmbiental 10s ease-out forwards; }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hf-0 { animation: heroFadeUp 0.9s ease both; }
        .hf-1 { animation: heroFadeUp 0.9s 0.15s ease both; }
        .hf-2 { animation: heroFadeUp 0.9s 0.3s ease both; }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ height: "90vh" }}
      >
        <div
          className="kb-ambiental absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/25 to-black/65 z-10" />

        <div className="relative z-20 max-w-4xl px-6">
          <p className="hf-0 text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: "#00AEEF" }}>
            Servicios ECOAFA
          </p>
          <h1
            className="hf-1 font-black uppercase tracking-tight leading-none text-white mb-5"
            style={{ fontSize: "clamp(3rem,9vw,7.5rem)", textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
          >
            DESARROLLO{" "}
            <span style={{ color: "#7DC242" }}>AMBIENTAL</span>
          </h1>
          <p className="hf-2 font-light text-white/85 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Soluciones integrales para la gestión y protección del medio ambiente bajo la normatividad vigente.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-0.75 z-20"
          style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
        />
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 px-6 text-center bg-white">
        <div
          className="w-16 h-1 mx-auto mb-8"
          style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
        />
        <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed" style={{ fontSize: "1.05rem" }}>
          Los servicios que ofrece ECOAFA S.A.S se encuentran en el marco de la{" "}
          <strong className="text-gray-800 font-semibold">normatividad ambiental vigente</strong>, enfocados al
          desarrollo sostenible y a la responsabilidad social. En este marco se cuenta con la capacidad
          profesional de adelantar productos y servicios orientados a desarrollar:
        </p>
      </section>

      {/* ── CARDS 1 ── */}
      <CardsSection
        items={services}
        label="Servicios Ambientales"
        accent="#7DC242"
        bg="#f4f7f0"
      />

      {/* ── CARDS 2 ── */}
      <CardsSection
        items={complementaryServices}
        label="Servicios Complementarios"
        accent="#00AEEF"
        bg="#f0f8ff"
      />
    </>
  );
}