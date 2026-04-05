// src/pages/Nosotros.tsx
// Página completa de ECOAFA S.A.S.
// La lógica del formulario vive en components/contact/
// El mapa vive en components/maps/
// Los inputs reutilizables viven en components/ui/

import { MapPin, Phone, Mail, Target, Eye, Leaf, Users, Award, Globe } from 'lucide-react'
import OfficeMap from '../components/maps/OfficeMap'
import ContactForm from '../components/contact/ContactForm'
import equipoEcoafa from '../assets/images/galeria/equipoEcoafa.jpeg'
import {
  OFFICE_PHONE,
  OFFICE_EMAIL,
  OFFICE_ADDRESS,
} from '../lib/Constants'

// ─── Embed URL del mapa ────────────────────────────────────────────────────────
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4109!2d-74.0580!3d4.6830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5c6b1a2d3e%3A0x0!2zNMKwNDAnNTguOCJOIDc0wrAwMyczMC4wIlc!5e0!3m2!1ses!2sco!4v1700000000000'

// ─── Datos ────────────────────────────────────────────────────────────────────
const stats = [
  { icon: Award, value: '+17', label: 'Años de experiencia', color: '#7DC242' },
  { icon: Leaf,  value: '+59', label: 'Contratos ejecutados', color: '#00AEEF' },
  { icon: Users, value: '+30', label: 'Clientes atendidos',  color: '#7DC242' },
  { icon: Globe, value: '12+', label: 'Departamentos',       color: '#00AEEF' },
]

const valores = [
  { icon: '🌿', title: 'Sostenibilidad',   desc: 'Cada proyecto busca el equilibrio entre el desarrollo y la conservación del entorno natural.' },
  { icon: '🤝', title: 'Compromiso',       desc: 'Cumplimos con los más altos estándares técnicos y legales en cada etapa de nuestros proyectos.' },
  { icon: '🔬', title: 'Innovación',       desc: 'Incorporamos tecnología de punta y metodologías actualizadas para entregar soluciones eficaces.' },
  { icon: '🌎', title: 'Responsabilidad',  desc: 'Actuamos con ética y transparencia, contribuyendo positivamente al bienestar de las comunidades.' },
]

const equipo = [
  {
    nombre: 'Especialistas Forestales',
    desc: 'Profesionales en manejo de ecosistemas, plantaciones forestales e inventarios.',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
  },
  {
    nombre: 'Consultores Ambientales',
    desc: 'Expertos en EIA, PMA, licencias ambientales y normatividad colombiana.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
  },
  {
    nombre: 'Técnicos Agropecuarios',
    desc: 'Asistencia técnica integral y modelos productivos sostenibles para el campo.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
]

// ═════════════════════════════════════════════════════════════════════════════
export default function Nosotros() {
  return (
    <>
      <style>{`
        @keyframes kbNosotros {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0); }
        }
        .kb-nosotros { animation: kbNosotros 12s ease-out forwards; }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hf-0 { animation: heroFadeUp 0.8s ease both; }
        .hf-1 { animation: heroFadeUp 0.8s 0.15s ease both; }
        .hf-2 { animation: heroFadeUp 0.8s 0.3s ease both; }
        @keyframes kenBurnsWho {
          0%   { transform: scale(1.0)  translate(0%,   0%); }
          50%  { transform: scale(1.1)  translate(-2%, -1%); }
          100% { transform: scale(1.0)  translate(0%,   0%); }
        }
        .kb-who { animation: kenBurnsWho 18s ease-in-out infinite; }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ height: '90vh' }}
      >
        <div
          className="kb-nosotros absolute inset-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="hf-0 text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: '#00AEEF' }}>
            ECOAFA S.A.S — Fundada en 2007
          </p>
          <h1
            className="hf-1 font-black uppercase tracking-tight leading-none text-white mb-5"
            style={{ fontSize: 'clamp(3rem,9vw,7.5rem)', textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
          >
            QUIÉNES <span style={{ color: '#7DC242' }}>SOMOS</span>
          </h1>
          <p className="hf-2 font-light text-white/85 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Empresa de consultoría y obras ambientales, forestales y agropecuarias comprometida con el desarrollo sostenible de Colombia.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
          style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════
          QUIÉNES SOMOS — foto + texto
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Foto */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ height: '480px' }}>
              <img
                src={equipoEcoafa}
                alt="ECOAFA — Consultoría ambiental y forestal"
                className="kb-who absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)' }}
              />
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-3xl pointer-events-none"
                style={{ border: '3px solid #7DC242', opacity: 0.35 }}
              />
              <div
                className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl shadow-xl"
                style={{ backgroundColor: '#7DC242' }}
              >
                <p className="text-white font-black text-3xl leading-none">2007</p>
                <p className="text-white/90 text-xs font-semibold uppercase tracking-wider mt-0.5">Fundada</p>
              </div>
              
            </div>

            {/* Texto */}
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
                Nuestra historia
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-5" style={{ color: '#1A2E1A' }}>
                ECOAFA <span style={{ color: '#7DC242' }}>S.A.S</span>
              </h2>
              <div className="w-14 h-1 mb-7" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                ECOAFA S.A.S. nace en el año <strong className="text-gray-900">2007</strong> para darle respuesta a las necesidades y problemática ambiental a nivel nacional. Actualmente la empresa se ha consolidado como una compañía de profesionales especializados en proyectos realizados con el sector forestal, ambiental, sanitario y agropecuario tanto en la zona rural como urbana.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-9">
                Contamos con recursos tecnológicos para la ejecución de sus proyectos, lo que permite desarrollar sus ideas eficazmente, posicionando su estructura comercial en el mercado nacional con más de <strong className="text-gray-700">17 años</strong> de trayectoria comprobada.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                    style={{ borderColor: `${s.color}30`, backgroundColor: `${s.color}08` }}
                  >
                    <s.icon size={26} style={{ color: s.color, flexShrink: 0 }} />
                    <div>
                      <p className="text-2xl font-black leading-none" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MISIÓN & VISIÓN
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 300 300" fill="none">
            <circle cx="300" cy="0" r="200" stroke="#00AEEF" strokeWidth="1.5" />
            <circle cx="300" cy="0" r="140" stroke="#7DC242" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
              Nuestro propósito
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight text-white leading-none mb-4">
              MISIÓN <span style={{ color: '#7DC242' }}>&</span> VISIÓN
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div
              className="rounded-3xl p-10 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(125,194,66,0.3)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7DC242, #5a9e2f)' }}
                >
                  <Target size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide">MISIÓN</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Ofrecer servicios de consultoría y obras ambientales, forestales y agropecuarias con altos estándares de calidad, contribuyendo al desarrollo sostenible y a la conservación de los recursos naturales de Colombia, con responsabilidad social y compromiso ambiental.
              </p>
            </div>

            {/* Visión */}
            <div
              className="rounded-3xl p-10 border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(0,174,239,0.3)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #00AEEF, #007ab5)' }}
                >
                  <Eye size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide">VISIÓN</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-base">
                Consolidarse como una de las empresas líderes en consultoría ambiental, forestal y agropecuaria a nivel nacional, reconocida por la excelencia técnica, la innovación en sus metodologías y el compromiso con la sostenibilidad ambiental y el desarrollo de las comunidades rurales colombianas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VALORES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
              Lo que nos define
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight leading-none mb-4" style={{ color: '#1A2E1A' }}>
              NUESTROS <span style={{ color: '#7DC242' }}>VALORES</span>
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-xl group"
                style={{ borderColor: 'rgba(125,194,66,0.2)', boxShadow: '0 2px 14px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(125,194,66,0.1)', border: '1.5px solid rgba(125,194,66,0.3)' }}
                >
                  {v.icon}
                </div>
                <h3 className="font-black text-gray-800 text-lg uppercase tracking-wide mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EQUIPO / ÁREAS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: '#f0f8f5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
              Nuestras áreas
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight leading-none mb-4" style={{ color: '#1A2E1A' }}>
              EQUIPO <span style={{ color: '#7DC242' }}>ESPECIALIZADO</span>
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {equipo.map((e, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.nombre}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)' }}
                  />
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-black text-gray-800 text-lg uppercase tracking-wide mb-2">{e.nombre}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                  <div className="mt-4 w-8 h-0.5" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MAPA + INFO DE CONTACTO  ← usa OfficeMap
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
              Encuéntranos
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight leading-none mb-4" style={{ color: '#1A2E1A' }}>
              NUESTRA <span style={{ color: '#7DC242' }}>OFICINA</span>
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* ← Componente de mapa extraído */}
            <div className="md:col-span-3">
              <OfficeMap embedUrl={MAPS_EMBED} height={420} />
            </div>

            {/* Info de contacto */}
            <div className="md:col-span-2 flex flex-col gap-5">
              <h3 className="text-2xl font-black text-gray-800 uppercase tracking-wide mb-2">
                Información de <span style={{ color: '#7DC242' }}>Contacto</span>
              </h3>

              {[
                { icon: MapPin, label: 'Dirección',          value: OFFICE_ADDRESS, color: '#7DC242' },
                { icon: Phone,  label: 'Teléfono',           value: OFFICE_PHONE,   color: '#00AEEF' },
                { icon: Mail,   label: 'Correo electrónico', value: OFFICE_EMAIL,   color: '#7DC242' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-md"
                  style={{ borderColor: `${color}25`, backgroundColor: `${color}07` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-gray-700 font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}

              <div
                className="p-5 rounded-2xl border"
                style={{ borderColor: 'rgba(0,174,239,0.2)', backgroundColor: 'rgba(0,174,239,0.05)' }}
              >
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Horario de atención</p>
                <p className="text-gray-700 font-semibold text-sm">Lunes a Viernes</p>
                <p className="text-gray-500 text-sm">8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FORMULARIO DE CONTACTO  ← usa ContactForm
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 300 300" fill="none">
            <circle cx="0" cy="300" r="200" stroke="#7DC242" strokeWidth="1.5" />
            <circle cx="0" cy="300" r="140" stroke="#00AEEF" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#00AEEF' }}>
              Estamos disponibles
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight text-white leading-none mb-4">
              CONTÁCTANOS
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #7DC242, #00AEEF)' }} />
          </div>

          <div
            className="rounded-3xl p-8 md:p-10 border backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(125,194,66,0.2)' }}
          >
            {/* ← Componente de formulario extraído */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}