import { ArrowRight, Calendar, Users, Leaf, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import imgNosotros from "../../assets/images/nosotros/imgNosotros.jpeg";


const stats = [
  { icon: Calendar, value: "+17", label: "Años de experiencia" },
  { icon: Leaf, value: "+115", label: "Proyectos ejecutados" },
  { icon: Users, value: "+30", label: "Clientes atendidos" },
  { icon: MapPin, value: "4", label: "Áreas de servicio" },
];

export default function NosotrosPreview() {
  return (
    <section
      id="nosotros"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${imgNosotros})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white" />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Título centrado ── */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#00AEEF" }}
          >
            Quiénes somos
          </p>
          <h2
            className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4"
            style={{ color: "#1A2E1A" }}
          >
            NOSOTROS
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
          />
        </div>

        {/* ── Foto izquierda + Texto derecha ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Foto con animación Ken Burns */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ height: "420px" }}>
            <style>{`
              @keyframes kenBurnsPhoto {
                0%   { transform: scale(1.0)  translate(0%, 0%); }
                25%  { transform: scale(1.12) translate(-2%, -1%); }
                50%  { transform: scale(1.08) translate(2%, 1%); }
                75%  { transform: scale(1.14) translate(-1%, 2%); }
                100% { transform: scale(1.0)  translate(0%, 0%); }
              }
              .nosotros-photo {
                animation: kenBurnsPhoto 18s ease-in-out infinite;
                transform-origin: center center;
              }
            `}</style>

            {/* Borde decorativo */}
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-2xl z-10 pointer-events-none"
              style={{ border: "3px solid #7DC242", opacity: 0.4 }}
            />

            <img
              src={imgNosotros}
              alt="ECOAFA — Consultoría ambiental"
              className="nosotros-photo absolute inset-0 w-full h-full object-cover"
            />

            {/* Badge sobre la foto */}
            <div
              className="absolute bottom-5 left-5 px-5 py-3 rounded-xl shadow-lg z-20"
              style={{ backgroundColor: "#7DC242" }}
            >
              <p className="text-white font-black text-2xl leading-none">2007</p>
              <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                Fundada
              </p>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              ECOAFA S.A.S. nace en el año 2007 para darle respuesta a las
              necesidades y problemática ambiental a nivel nacional. Actualmente
              la empresa se ha consolidado como una compañía de profesionales
              especializados en proyectos realizados con el sector forestal,
              ambiental, sanitario y agropecuario tanto en la zona rural como
              urbana.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Contamos con recursos tecnológicos para la ejecución de sus
              proyectos, lo que permite desarrollar sus ideas eficazmente,
              posicionando su estructura comercial en el mercado.
            </p>
            <div>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:gap-4 hover:scale-105"
                style={{ backgroundColor: "#7DC242", color: "#fff" }}
              >
                Saber más <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Stats abajo ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 text-center border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.85)",
                borderColor: "rgba(125,194,66,0.25)",
                boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
                backdropFilter: "blur(6px)",
              }}
            >
              <stat.icon size={30} className="mx-auto mb-3" style={{ color: "#00AEEF" }} />
              <p className="text-4xl font-black mb-1" style={{ color: "#7DC242" }}>
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}