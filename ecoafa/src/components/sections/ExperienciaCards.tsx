import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import relieve from "../../assets/images/slides/relieve.avif";

const contracts = [
  {
    id: 1,
    number: "001",
    year: 2010,
    type: "Obra Pública",
    title: "Contrato de Obra Pública N° 001 de 2010",
    description:
      "Reforestación en las zonas de recarga hídrica de ríos y quebradas mediante el establecimiento y aislamiento de bosque protector-productor en veredas del Municipio de Quipama.",
    tag: "Reforestación",
    color: "#7DC242",
  },
  {
    id: 2,
    number: "193",
    year: 2009,
    type: "Reforestación",
    title: "Contrato de Reforestación No. 193 de 2009",
    description:
      "Reforestación y mantenimiento de 31 hectáreas en predios de Santa María de las Lagunas, ubicadas en veredas la Concepción y la Trinidad, micro cuencas del Río Siecha Aves del Municipio de Guasca.",
    tag: "31 ha",
    color: "#00AEEF",
  },
  {
    id: 3,
    number: "009",
    year: 2011,
    type: "Obra Pública",
    title: "Contrato de Obra Pública No. 009 de 2011",
    description:
      "Implementación de modelos silvopastoriles y Agroforestales para la recuperación y estabilización de suelos dentro del componente productivo en la zona de ladera del municipio de Carmen de Carupa, Cundinamarca.",
    tag: "Silvopastoril",
    color: "#7DC242",
  },
];

export default function ExperienciaCards() {
  return (
    <section
      id="experiencia"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${relieve})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Decorative cyan curves top */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none">
          <circle cx="300" cy="0" r="200" stroke="#00AEEF" strokeWidth="1.5" />
          <circle cx="300" cy="0" r="150" stroke="#7DC242" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#00AEEF" }}
          >
            Trayectoria comprobada
          </p>
          <h2
            className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4"
            style={{ color: "#00AEEF" }}
          >
            EXPERIENCIA
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group flex flex-col bg-white overflow-hidden"
              style={{
                borderColor: "rgba(0,0,0,0.05)",
              }}
            >
              {/* Subtle top border accent */}
              <div 
                className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: contract.color }}
              />

              {/* Header: Tag & Year */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
                  style={{
                    backgroundColor: `${contract.color}15`,
                    color: contract.color,
                    border: `1px solid ${contract.color}30`,
                  }}
                >
                  {contract.tag}
                </span>
                <span
                  className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity duration-300 transform group-hover:scale-110"
                  style={{ color: contract.color }}
                >
                  {contract.year}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="mb-4 relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300"
                  style={{ backgroundColor: contract.color, boxShadow: `0 8px 24px -6px ${contract.color}80` }}
                >
                  <FileText size={24} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-gray-900">
                  {contract.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {contract.description}
              </p>
              
              {/* Hidden decorative bg element */}
              <div 
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: contract.color }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/experiencia"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:gap-4"
            style={{ backgroundColor: "#7DC242", color: "#fff" }}
          >
            Ver toda la experiencia <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}