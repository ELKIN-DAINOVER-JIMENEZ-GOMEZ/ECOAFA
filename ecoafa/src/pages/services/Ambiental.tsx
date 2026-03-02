// src/pages/servicios/Ambiental.tsx

interface ServiceItem {
  icon: string;
  text: string;
}

const services1: ServiceItem[] = [
  { icon: "🌍", text: "Estudios de Impacto Ambiental para licencias ambientales" },
  { icon: "🌳", text: "Planes de Manejo Ambiental, Permiso de Aprovechamiento Forestal y Solicitud de Levantamiento de Veda" },
  { icon: "♻️", text: "Diseño e Implementación de Planes de Gestión Integral para el Manejo de Residuos convencionales y peligrosos" },
  { icon: "💧", text: "Diseño e Implementación de Programas para el Ahorro y Uso Eficiente de Agua" },
  { icon: "🚰", text: "Diseño e implementación de Programas para el Manejo de Agua Residual" },
  { icon: "💨", text: "Programas de control de Calidad de Aire" },
  { icon: "🏭", text: "Asesoría en la estructuración de Planes Saneamiento y Manejo de Vertimientos" },
];

const services2: ServiceItem[] = [
  { icon: "⚙️", text: "Asesoría para Optimizar los Procesos de las Plantas de Tratamiento de agua residual y agua potable" },
  { icon: "🔬", text: "Monitoreos de Calidad de Agua (Residual – Potable)" },
  { icon: "📢", text: "Capacitación y Divulgación Ambiental" },
];

function ServiceCard({ item, accent }: { item: ServiceItem; accent: string }) {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl p-6 border bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group cursor-default"
      style={{ borderColor: "#e8f0e0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accent}15`, border: `1.5px solid ${accent}35` }}
      >
        {item.icon}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
        {item.text}
      </p>
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
    <section className="py-20 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase pb-2 border-b-2"
            style={{ color: accent, borderColor: accent }}
          >
            {label}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/65 z-10" />

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
          className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
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
        items={services1}
        label="Servicios Principales"
        accent="#7DC242"
        bg="#f4f7f0"
      />

      {/* ── CARDS 2 ── */}
      <CardsSection
        items={services2}
        label="Servicios Complementarios"
        accent="#00AEEF"
        bg="#f0f8ff"
      />
    </>
  );
}