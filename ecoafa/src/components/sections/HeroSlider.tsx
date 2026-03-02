import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ambiente2 from "../../assets/images/slides/ambiente2.png";
import cultivo from "../../assets/images/slides/cultivo.png";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
    title: "ECOAFA S.A.S",
    subtitle:
      "Empresa de Consultoría y Obras Ambientales, Forestales y Agropecuaria",
  },
  {
    id: 2,
    image: ambiente2,
    title: "DESARROLLO AMBIENTAL",
    subtitle:
      "Soluciones integrales para la gestión y protección del medio ambiente",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
    title: "DESARROLLO FORESTAL",
    subtitle: "Manejo sostenible de recursos forestales y biodiversidad",
  },
  {
    id: 4,
    image: cultivo,
    title: "DESARROLLO AGROPECUARIO",
    subtitle: "Asistencia técnica y modelos productivos sostenibles",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [textVisible, setTextVisible] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTextVisible(false);
      setTimeout(() => {
        setPrevIdx(current);
        setCurrent(index);
        setTransitioning(true);
        setTimeout(() => {
          setTextVisible(true);
          setTimeout(() => {
            setPrevIdx(null);
            setTransitioning(false);
          }, 200);
        }, 650);
      }, 280);
    },
    [transitioning, current]
  );

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  // Autoplay — always runs regardless of mouse position
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, goTo]);

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1.08) translateX(0px); }
          to   { transform: scale(1.0)  translateX(0px); }
        }
        .kb-active {
          animation: kenBurns 6.5s ease-out forwards;
        }
        @keyframes slideTextIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-text-in > * {
          opacity: 0;
          animation: slideTextIn 0.65s ease-out forwards;
        }
        .hero-text-in > *:nth-child(1) { animation-delay: 0.05s; }
        .hero-text-in > *:nth-child(2) { animation-delay: 0.18s; }
        .hero-text-in > *:nth-child(3) { animation-delay: 0.30s; }
        .hero-text-in > *:nth-child(4) { animation-delay: 0.42s; }
        .hero-text-out {
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
      `}</style>

      <section
        id="hero"
        className="relative w-full overflow-hidden select-none"
        style={{ height: "90vh" }}
      >
        {/* Previous slide — fades out */}
        {prevIdx !== null && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ zIndex: 1, opacity: 0, transition: "opacity 0.9s ease" }}
          >
            <img
              src={slides[prevIdx].image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
          </div>
        )}

        {/* All slides — only current is visible */}
        {slides.map((slide, i) => {
          const isActive = i === current;
          return (
            <div
              key={slide.id}
              className="absolute inset-0 overflow-hidden"
              style={{
                zIndex: isActive ? 2 : 0,
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.9s ease",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                // key forces re-mount → re-triggers KB animation each time this slide becomes active
                key={`img-${slide.id}-${isActive}`}
                className={`w-full h-full object-cover ${isActive ? "kb-active" : ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
            </div>
          );
        })}

        {/* Text layer — above all slides */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <div
            className={textVisible ? "hero-text-in pointer-events-auto" : "hero-text-out pointer-events-none"}
          >
            <p
              className="text-xs font-bold tracking-[0.35em] uppercase mb-5"
              style={{ color: "#00AEEF" }}
            >
              Fundada en 2007 · Bogotá D.C., Colombia
            </p>
            <h1
              className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-5 leading-none"
              style={{ textShadow: "0 4px 40px rgba(0,0,0,0.55)" }}
            >
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl font-light text-white/85 max-w-2xl mx-auto leading-relaxed mb-9">
              {slides[current].subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#servicios"
                className="px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{ backgroundColor: "#7DC242", color: "#fff" }}
              >
                Nuestros Servicios
              </a>
              <a
                href="#nosotros"
                className="px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm border-2 border-white/60 text-white hover:bg-white/15 transition-all duration-300"
              >
                Conócenos
              </a>
            </div>
          </div>
        </div>

        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "rgba(0,0,0,0.40)", backdropFilter: "blur(6px)" }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "rgba(0,0,0,0.40)", backdropFilter: "blur(6px)" }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "30px" : "8px",
                height: "8px",
                backgroundColor:
                  i === current ? "#7DC242" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
          style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }}
        />
      </section>
    </>
  );
}