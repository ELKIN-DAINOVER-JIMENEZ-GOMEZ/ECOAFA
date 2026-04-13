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
  'https://www.google.com/maps?q=Cra%2065%2067a%2059%20oficina%20303%20Bogot%C3%A1&output=embed'

// ─── Datos ────────────────────────────────────────────────────────────────────
const stats = [
  { icon: Award, value: '+17', label: 'Años de experiencia', color: '#7DC242' },
  { icon: Leaf,  value: '+115', label: 'Contratos ejecutados', color: '#00AEEF' },
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
    img: 'https://media.istockphoto.com/id/1323675815/es/foto/ecologista-en-el-trabajo-de-campo-forester-examina-los-%C3%A1rboles-en-su-condici%C3%B3n-natural-en-el.webp?a=1&b=1&s=612x612&w=0&k=20&c=2DfItRit6OoZI5dtE99b309BWmN8a8uwG-3_dJomcKA=',
  },
  {
    nombre: 'Consultores Ambientales',
    desc: 'Expertos en EIA, PMA, licencias ambientales y normatividad colombiana.',
    img: 'data:image/jpeg;base64,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',
  },
  {
    nombre: 'Técnicos Agropecuarios',
    desc: 'Asistencia técnica integral y modelos productivos sostenibles para el campo.',
    img: 'https://images.unsplash.com/photo-1626906722191-32650d012099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjbmljb3MlMjBhZ3JvcGVjdWFyaW9zfGVufDB8fDB8fHww',
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
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-black/65" />

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
          className="absolute bottom-0 left-0 right-0 h-0.75 z-20"
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

          <div className="mb-10 rounded-4xl border overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)]"
            style={{ borderColor: 'rgba(125,194,66,0.18)', background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(240,248,245,0.96))' }}
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4"
                  style={{ color: '#00AEEF', backgroundColor: 'rgba(0,174,239,0.08)' }}
                >
                  Gerencia y Socio Mayorista
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                  Diego Harley Beltrán Jiménez
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
                  Oriundo de Gachetá, Cundinamarca. Ingeniero Ambiental de la Universidad ECCI, especialista en Educación para la Sostenibilidad Ambiental por la misma universidad, especialista en Proyectos para el Cambio Climático y Magíster en Adaptación y Mitigación para el Cambio Climático de la Universidad Sergio Arboleda.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-4 border bg-white/80" style={{ borderColor: 'rgba(125,194,66,0.16)' }}>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#7DC242' }}>Sector privado</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Más de 8 años como director y/o coordinador de más de 15 proyectos en planificación, gestión ambiental, producción sostenible, educación ambiental y proyectos forestales.
                    </p>
                  </div>
                  <div className="rounded-2xl p-4 border bg-white/80" style={{ borderColor: 'rgba(0,174,239,0.16)' }}>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#00AEEF' }}>Sector público</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      4 años como profesional de apoyo en educación ambiental y 1 año como coordinador de cambio climático en CORPOGUAVIO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 flex items-stretch" style={{ background: 'linear-gradient(180deg, rgba(125,194,66,0.10), rgba(0,174,239,0.08))' }}>
                <div className="w-full rounded-[1.75rem] bg-white/85 backdrop-blur-sm border border-white/70 p-6 md:p-8 flex flex-col justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#00AEEF' }}>
                      Perfil profesional
                    </p>
                    <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#7DC242' }} />
                        Liderazgo en consultoría ambiental y formulación de proyectos.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#00AEEF' }} />
                        Experiencia en sostenibilidad, adaptación climática y educación ambiental.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#7DC242' }} />
                        Enfoque técnico, estratégico y orientado a resultados.
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="rounded-2xl p-4 text-center bg-[#f4f7f0] border border-primary/15">
                      <p className="text-3xl font-black" style={{ color: '#5A9A2E' }}>+15</p>
                      <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-500 mt-1">Proyectos</p>
                    </div>
                    <div className="rounded-2xl p-4 text-center bg-[#f0f8ff] border border-secondary/15">
                      <p className="text-3xl font-black" style={{ color: '#0086bf' }}>3</p>
                      <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gray-500 mt-1">Áreas clave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
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