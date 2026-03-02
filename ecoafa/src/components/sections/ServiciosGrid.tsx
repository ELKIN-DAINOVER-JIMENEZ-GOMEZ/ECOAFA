import { ArrowRight, Leaf, Trees, Map, Wheat } from "lucide-react";
import { Link } from "react-router-dom";
import relieve from "../../assets/images/slides/3.avif";
import forestal from "../../assets/images/slides/forestal.png";
import ambiental from "../../assets/images/slides/ambiental.png";
const services = [
  {
    id: "ambiental",
    icon: Leaf,
    title: "Desarrollo Ambiental",
    description:
      "Estudios de impacto ambiental, planes de manejo, gestión de residuos, calidad de agua y aire, y asesoría en normatividad ambiental.",
    href: "/servicios/ambiental",
    color: "#7DC242",
    // Bright sunny lake surrounded by vivid green forest
    image: ambiental,
  },
  {
    id: "forestal",
    icon: Trees,
    title: "Desarrollo Forestal",
    description:
      "Inventarios forestales, plantaciones, compensación ambiental, viveros forestales, diseño paisajístico y silvicultura comunitaria.",
    href: "/servicios/forestal",
    color: "#5A9A2E",
    // Sunlit forest with bright green canopy
    image: forestal,
  },
  {
    id: "territorial",
    icon: Map,
    title: "Desarrollo Territorial",
    description:
      "Planes de ordenamiento territorial, sistemas de información geográfica (SIG), planes de gestión ambiental y educación ambiental urbana.",
    href: "/servicios/territorial",
    color: "#00AEEF",
    // Bright aerial view of green landscape with river
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85",
  },
  {
    id: "agropecuario",
    icon: Wheat,
    title: "Desarrollo Agropecuario",
    description:
      "Modelos agroforestales, mejoramiento genético, asistencia técnica rural, proyectos piscícolas y modelos de desarrollo sostenible.",
    href: "/servicios/agropecuario",
    color: "#7DC242",
    // Vibrant bright green crop fields
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=85",
  },
];

export default function ServiciosGrid() {
  return (
      <section
        id="servicios"
        className="relative py-24"
        style={{
          backgroundImage: `url(${relieve})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#00AEEF" }}
          >
            Lo que hacemos
          </p>
          <h2
            className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4"
            style={{ color: "#1A2E1A" }}
          >
            SERVICIOS
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-6"
            style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
          />
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Los servicios que ofrece ECOAFA S.A.S se encuentran en el marco de
            la normatividad ambiental vigente, enfocados al desarrollo sostenible
            y a la responsabilidad social.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{ minHeight: "280px" }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay — light gradient so images stay vivid */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background: `linear-gradient(160deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.50) 100%)`,
                }}
              />
              {/* Border accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: service.color }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `rgba(0,0,0,0.35)`, border: `1.5px solid ${service.color}90`, backdropFilter: "blur(4px)" }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-2xl font-black uppercase tracking-tight mb-3 text-white"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-sm leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <span
                    className="text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                    style={{ color: service.color }}
                  >
                    Saber más
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: service.color }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}