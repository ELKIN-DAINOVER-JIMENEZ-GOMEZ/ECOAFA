import { useState, useRef, useEffect } from 'react'
import icon1 from '../../assets/images/icons/Captura de pantalla_20260228_194304.png'
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon3.png'
import icon4 from '../../assets/images/icons/icon4.png'
import icon5 from '../../assets/images/icons/icon5.png'
import icon6 from '../../assets/images/icons/icon6.png'
import icon7 from '../../assets/images/icons/icon7.png'
import icon8 from '../../assets/images/icons/icon8.png'
import icon9 from '../../assets/images/icons/icon9.png'
import icon10 from '../../assets/images/icons/icon10.png'
import icon11 from '../../assets/images/icons/icon11.png'
import icon12 from '../../assets/images/icons/icon12.png'
import icon13 from '../../assets/images/icons/icon13.png'
import icon14 from '../../assets/images/icons/icon14.png'
import icon15 from '../../assets/images/icons/icon15.png'
import icon16 from '../../assets/images/icons/icon16.png'
import icon17 from '../../assets/images/icons/icon17.png'
import icon18 from '../../assets/images/icons/icon18.png'
import icon19 from '../../assets/images/icons/icon19.png'
import icon20 from '../../assets/images/icons/icon20.png'

import cliente1 from '../../assets/images/clientes/cliente1.png'
import cliente2 from '../../assets/images/clientes/cliente2.png'

interface LogoItem {
  id: number;
  name: string;
  img?: string;
}

const aliados: LogoItem[] = [
  { id: 1,  name: "Aliado 1",  img: icon1 },
  { id: 2,  name: "Aliado 2",  img: icon2 },
  { id: 3,  name: "Aliado 3",  img: icon3 },
  { id: 4,  name: "Aliado 4",  img: icon4 },
  { id: 5,  name: "Aliado 5",  img: icon5 },
  { id: 6,  name: "Aliado 6",  img: icon6 },
  { id: 7,  name: "Aliado 7",  img: icon7 },
  { id: 8,  name: "Aliado 8",  img: icon8 },
  { id: 9,  name: "Aliado 9",  img: icon9 },
  { id: 10, name: "Aliado 10", img: icon10 },
  { id: 11, name: "Aliado 11", img: icon11 },
  { id: 12, name: "Aliado 12", img: icon12 },
  { id: 13, name: "Aliado 13", img: icon13 },
  { id: 14, name: "Aliado 14", img: icon14 },
  { id: 15, name: "Aliado 15", img: icon15 },
  { id: 16, name: "Aliado 16", img: icon16 },
  { id: 17, name: "Aliado 17", img: icon17 },
  { id: 18, name: "Aliado 18", img: icon18 },
  { id: 19, name: "Aliado 19", img: icon19 },
  { id: 20, name: "Aliado 20", img: icon20 },
];

function CarouselTrack({ items }: { items: LogoItem[] }) {
  const repeated = [...items, ...items, ...items];

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const offsetAtDragStart = useRef(0);

  // We track the "base offset" that accumulates from drag interactions.
  // The CSS animation runs on top, using this as the starting point.
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Item width estimate: h-50 = 200px, plus px-6 padding on each side = ~236px
  const ITEM_WIDTH = 200;
  const totalWidth = items.length * ITEM_WIDTH;

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    offsetAtDragStart.current = dragOffset;
    setDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    setDragOffset(offsetAtDragStart.current - delta);
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragging(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    offsetAtDragStart.current = dragOffset;
    setDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    setDragOffset(offsetAtDragStart.current - delta);
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // Normalize offset so it wraps within one set of items
  const normalizedOffset = ((dragOffset % totalWidth) + totalWidth) % totalWidth;

  return (
    <div
      className="overflow-hidden w-full select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <style>{`
        @keyframes scroll-aliados {
          from { transform: translateX(0); }
          to   { transform: translateX(-${totalWidth}px); }
        }
        .track-aliados-auto {
          display: flex;
          width: max-content;
          animation: scroll-aliados 40s linear infinite;
          animation-play-state: running;
        }
        .track-aliados-auto.is-dragging {
          animation: none;
          transform: translateX(-${normalizedOffset}px);
        }
      `}</style>
      <div className={`track-aliados-auto${dragging ? ' is-dragging' : ''}`}
        style={dragging ? { transform: `translateX(-${normalizedOffset}px)` } : undefined}
      >
        {repeated.map((item, i) => (
          <div key={`${item.id}-${i}`} className="flex-shrink-0 px-6 flex items-center justify-center">
            <img
              src={item.img}
              alt={item.name}
              className="object-contain h-50 w-auto pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientesCarrusel() {
  return (
    <section
      id="clientes"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url("/relieve.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #7DC242, #00AEEF, transparent)" }}
      />

      <div className="relative z-10">

        {/* ── CLIENTES ── */}
        <div className="mb-16">
          <div className="text-center mb-10 px-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: "#00AEEF" }}>
              Quiénes confían en nosotros
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight" style={{ color: "#7DC242" }}>
              NUESTROS CLIENTES
            </h2>
            <div className="w-14 h-1 mx-auto mt-4" style={{ background: "linear-gradient(to right, #7DC242, #00AEEF)" }} />
          </div>
          <div className="flex justify-center items-center gap-16 px-6 flex-wrap">
            <img src={cliente1} alt="CAR Cundinamarca" className="object-contain h-50 w-auto" />
            <img src={cliente2} alt="Corporinoquia" className="object-contain h-50 w-auto" />
          </div>
        </div>

        {/* Divider */}
        <div className="px-6">
          <div className="h-px max-w-2xl mx-auto mb-16" style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.12), transparent)" }} />
        </div>

        {/* ── ALIADOS ── */}
        <div>
          <div className="text-center mb-10 px-6">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: "#7DC242" }}>
              Con quiénes trabajamos
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight" style={{ color: "#00AEEF" }}>
              ALIADOS ESTRATÉGICOS
            </h2>
            <div className="w-14 h-1 mx-auto mt-4" style={{ background: "linear-gradient(to right, #00AEEF, #7DC242)" }} />
          </div>
          <CarouselTrack items={aliados} />
        </div>

      </div>
    </section>
  );
}