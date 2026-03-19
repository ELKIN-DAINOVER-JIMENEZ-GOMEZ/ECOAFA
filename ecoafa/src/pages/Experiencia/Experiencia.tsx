import { useState } from "react";
import {
  X, FileText, MapPin, Building2,
  ChevronLeft, ChevronRight, Layers,
  DollarSign, Calendar, Clock, Users,
} from "lucide-react";
import { contratos, type Contrato } from "./ExperienciaData";
import avif1 from "../../assets/images/slides/1.avif";
import relieve from "../../assets/images/slides/relieve.avif";

const CARDS_PER_PAGE = 6;

function formatCOP(v?: number) {
  if (!v) return null;
  if (v >= 1_000_000_000) return `$${(v / 1_000_000_000).toFixed(2)}B`;
  if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
  return `$${v.toLocaleString("es-CO")}`;
}

const categoryConfig: Record<
  Contrato["categoria"],
  { bg: string; text: string; border: string; label: string; gradient: string }
> = {
  ambiental:    { bg: "#e0f4fd", text: "#0077a8", border: "#00AEEF", label: "Ambiental",    gradient: "linear-gradient(135deg, #00AEEF, #0077a8)" },
  forestal:     { bg: "#edfce0", text: "#3a7a1a", border: "#5a9e2f", label: "Forestal",     gradient: "linear-gradient(135deg, #7DC242, #3a7a1a)" },
  agropecuario: { bg: "#fef3e0", text: "#92400e", border: "#d97706", label: "Agropecuario", gradient: "linear-gradient(135deg, #f59e0b, #92400e)" },
  territorial:  { bg: "#f3eeff", text: "#4c1d95", border: "#7c3aed", label: "Territorial",  gradient: "linear-gradient(135deg, #8b5cf6, #4c1d95)" },
};

// ══════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════
function ContratoModal({ contrato, onClose }: { contrato: Contrato; onClose: () => void }) {
  const cat = categoryConfig[contrato.categoria];
  const valorFmt = formatCOP(contrato.valor);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        style={{ maxHeight: "92vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-44 overflow-hidden">
          <img src={contrato.imagen} alt={contrato.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))" }} />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors backdrop-blur-sm"
          >
            <X size={18} className="text-white" />
          </button>

          <div className="absolute bottom-3 left-4 flex gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: `${contrato.color}cc`, color: "#fff" }}>
              {contrato.tag}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: `${cat.border}cc`, color: "#fff" }}>
              {cat.label}
            </span>
          </div>
          <div className="absolute top-3 left-4">
            <span className="text-4xl font-black text-white/30">{contrato.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: cat.gradient }}>
              <FileText size={20} className="text-white" />
            </div>
            <div>
              {contrato.rupNo && (
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">N° RUP: {contrato.rupNo}</p>
              )}
              <h2 className="text-lg font-bold text-gray-800 leading-snug">{contrato.title}</h2>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">{contrato.fullDescription}</p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {valorFmt && (
              <div className="col-span-2 flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: `${cat.border}10`, border: `1px solid ${cat.border}25` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${cat.border}20` }}>
                  <DollarSign size={14} style={{ color: cat.border }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Valor del contrato</p>
                  <p className="font-black text-base" style={{ color: cat.border }}>
                    {valorFmt}
                    {contrato.participacion && contrato.participacion < 100 && (
                      <span className="text-xs font-semibold text-gray-500 ml-2">({contrato.participacion}% participación)</span>
                    )}
                  </p>
                  {contrato.smmlv && (
                    <p className="text-xs text-gray-400">{contrato.smmlv} SMMLV</p>
                  )}
                </div>
              </div>
            )}

            {contrato.fechaInicio && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Inicio</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.fechaInicio}</p>
                </div>
              </div>
            )}

            {contrato.fechaFin && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                <Calendar size={14} className="text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Finalización</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.fechaFin}</p>
                </div>
              </div>
            )}

            {contrato.duracion && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                <Clock size={14} className="text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Duración</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.duracion}</p>
                </div>
              </div>
            )}

            {contrato.consorcio && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                <Users size={14} className="text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Consorcio / UT</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.consorcio}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            {contrato.entidad && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <Building2 size={14} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Entidad Contratante</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.entidad}</p>
                </div>
              </div>
            )}
            {contrato.municipio && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Municipio / Región</p>
                  <p className="text-sm font-semibold text-gray-700">{contrato.municipio}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// CARD
// ══════════════════════════════════════════════════════
function ContratoCard({ contrato, onClick }: { contrato: Contrato; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const cat = categoryConfig[contrato.categoria];
  const valorFmt = formatCOP(contrato.valor);

  return (
    <div className="flex flex-col">
      <button
        onClick={onClick}
        className="group text-left rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer focus:outline-none"
        style={{ backgroundColor: "#fff", borderColor: "rgba(0,0,0,0.08)", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
        aria-label={`Ver detalles: ${contrato.title}`}
      >
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          {!imgError ? (
            <img
              src={contrato.imagen}
              alt={contrato.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: cat.gradient }}>
              <FileText size={40} className="text-white opacity-50" />
            </div>
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.6))" }} />

          {/* Year */}
          <span className="absolute top-2 right-3 text-xl font-black text-white/50 leading-none drop-shadow">{contrato.year}</span>

          {/* Category badge */}
          <span
            className="absolute bottom-2 left-3 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: `${cat.border}ee`, color: "#fff" }}
          >
            {cat.label}
          </span>

          {/* Valor badge */}
          {valorFmt && (
            <span
              className="absolute bottom-2 right-3 text-xs font-black px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff" }}
            >
              {valorFmt}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Tag chip */}
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3"
            style={{ backgroundColor: cat.bg, color: cat.text, border: `1px solid ${cat.border}40` }}
          >
            {contrato.tag}
          </span>

          {/* Title — legible, not truncated awkwardly */}
          <h3
            className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-gray-900 transition-colors"
            style={{ fontSize: "0.82rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {contrato.title}
          </h3>

          <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
            {contrato.shortDescription}
          </p>

          {/* Mini meta */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-3 border-t border-gray-100">
            {contrato.duracion && (
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <Clock size={11} className="text-gray-400" />
                {contrato.duracion}
              </span>
            )}
            {contrato.entidad && (
              <span className="inline-flex items-center gap-1 text-xs text-gray-400 min-w-0">
                <Building2 size={11} className="text-gray-400 flex-shrink-0" />
                <span className="truncate max-w-[150px]">{contrato.entidad}</span>
              </span>
            )}
          </div>

          <p
            className="mt-3 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: cat.border }}
          >
            Ver detalles →
          </p>
        </div>
      </button>

      {/* Year label below */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <div className="h-px flex-1" style={{ background: `${cat.border}30` }} />
        <span className="text-xs font-black tracking-widest" style={{ color: cat.border }}>{contrato.year}</span>
        <div className="h-px flex-1" style={{ background: `${cat.border}30` }} />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════
// PAGE
// ══════════════════════════════════════════════════════
export default function Experiencia() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContrato, setSelectedContrato] = useState<Contrato | null>(null);
  const [filterCat, setFilterCat] = useState<Contrato["categoria"] | "todos">("todos");

  const filtered = filterCat === "todos" ? contratos : contratos.filter((c) => c.categoria === filterCat);
  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

  const handleFilter = (cat: Contrato["categoria"] | "todos") => {
    setFilterCat(cat);
    setCurrentPage(1);
  };

  type FilterOpt = { value: Contrato["categoria"] | "todos"; label: string; count: number };
  const filters: FilterOpt[] = [
    { value: "todos",        label: "Todos",        count: contratos.length },
    { value: "forestal",     label: "Forestal",     count: contratos.filter((c) => c.categoria === "forestal").length },
    { value: "ambiental",    label: "Ambiental",    count: contratos.filter((c) => c.categoria === "ambiental").length },
    { value: "agropecuario", label: "Agropecuario", count: contratos.filter((c) => c.categoria === "agropecuario").length },
    { value: "territorial",  label: "Territorial",  count: contratos.filter((c) => c.categoria === "territorial").length },
  ];

  const filterColor = (val: typeof filterCat) =>
    val === "todos" ? "#1f2937" : categoryConfig[val].border;

  return (
    <>
      {selectedContrato && (
        <ContratoModal contrato={selectedContrato} onClose={() => setSelectedContrato(null)} />
      )}

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${avif1})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "42vh" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 py-28">
          <p className="text-sm font-semibold tracking-[0.35em] uppercase mb-3 text-white/60">
            ECOAFA S.A.S — Desde 2007
          </p>
          <h1
            className="font-black uppercase tracking-tight leading-none mb-4"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#00AEEF", textShadow: "0 4px 30px rgba(0,174,239,0.4)" }}
          >
            EXPERIENCIA
          </h1>
          <div className="w-20 h-1 mx-auto mb-5" style={{ backgroundColor: "#00AEEF" }} />
          <p className="text-white/75 text-base max-w-lg mx-auto leading-relaxed">
            Más de 17 años ejecutando proyectos ambientales, forestales, agropecuarios y territoriales a nivel nacional.
          </p>
        </div>
      </section>

      {/* ── Stats bar — sin total de valor ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap gap-8 justify-center">
          {[
            { label: "Contratos ejecutados", value: `${contratos.length}` },
            { label: "Años de experiencia",  value: "17+" },
            { label: "Departamentos",         value: "12+" },
            { label: "Categorías",            value: "4" },
          ].map((s) => (
            <div key={s.label} className="text-center px-4">
              <p
                className="text-4xl font-black"
                style={{ background: "linear-gradient(135deg, #7DC242, #00AEEF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {s.value}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cards section ── */}
      <section
        className="relative py-20"
        style={{ backgroundImage: `url(${relieve})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <Layers size={15} style={{ color: "#00AEEF" }} />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: "#00AEEF" }}>
                Contratos y Proyectos
              </p>
            </div>
            <h2 className="text-4xl font-black text-gray-800 mb-1">Nuestro Portafolio</h2>
            <p className="text-gray-500 text-sm">Haz clic en cualquier contrato para ver los detalles completos</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => {
              const isActive = filterCat === f.value;
              const col = filterColor(f.value);
              return (
                <button
                  key={f.value}
                  onClick={() => handleFilter(f.value)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  style={
                    isActive
                      ? { backgroundColor: col, color: "#fff", boxShadow: `0 4px 14px ${col}55` }
                      : { backgroundColor: "#fff", color: "#6b7280", border: "1px solid #e5e7eb" }
                  }
                >
                  {f.label}
                  <span
                    className="rounded-full px-1.5 py-0.5 text-xs font-black"
                    style={
                      isActive
                        ? { backgroundColor: "rgba(255,255,255,0.25)", color: "#fff" }
                        : { backgroundColor: "#f3f4f6", color: "#6b7280" }
                    }
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No hay contratos en esta categoría.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {paginated.map((contrato) => (
                <ContratoCard key={contrato.id} contrato={contrato} onClick={() => setSelectedContrato(contrato)} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <ChevronLeft size={18} className="text-gray-600" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = page === currentPage;
                  const col = filterCat === "todos" ? "#00AEEF" : categoryConfig[filterCat].border;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10 rounded-full text-sm font-bold transition-all"
                      style={
                        isActive
                          ? { backgroundColor: col, color: "#fff", boxShadow: `0 4px 12px ${col}50` }
                          : { backgroundColor: "#fff", color: "#6b7280", border: "1px solid #e5e7eb" }
                      }
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <ChevronRight size={18} className="text-gray-600" />
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-3">
                Página {currentPage} de {totalPages} — {filtered.length} contratos
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}