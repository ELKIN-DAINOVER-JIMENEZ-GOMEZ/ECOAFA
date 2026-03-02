import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Leaf } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
  OFFICE_PHONE,
  SERVICIOS_LINKS,
  WHATSAPP_NUMBER,
} from '../../lib/Constants'

import logo from '../../assets/logo.svg'

const EMPRESA_LINKS = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Clientes', href: '/#clientes' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#f4f7f0] border-t border-[#d0e0c4]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              
              <div className="flex flex-col leading-none">
               <img src={logo} alt="Logo ECOAFA" className="w-35 h-20 object-contain" />
              </div>
            </Link>
            <p className="text-[#4a6635] text-sm leading-relaxed mt-4 max-w-xs">
              Empresa de Consultoría y Obras Ambientales, Forestales y Agropecuaria. Fundada en 2007,
              comprometidos con el desarrollo sostenible de Colombia.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 rounded-full text-[#1a7a3f] text-sm font-medium transition-all duration-300"
            >
              <FaWhatsapp size={16} className="text-[#25D366]" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[#1a2e0f] font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#5A9A2E] rounded-full" />
              Servicios
            </h3>
            <ul className="space-y-3">
              {SERVICIOS_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-[#4a6635] hover:text-[#5A9A2E] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00AEEF] group-hover:bg-[#5A9A2E] transition-colors flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-[#1a2e0f] font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#00AEEF] rounded-full" />
              Empresa
            </h3>
            <ul className="space-y-3">
              {EMPRESA_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-[#4a6635] hover:text-[#00AEEF] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d0e0c4] group-hover:bg-[#00AEEF] transition-colors flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[#1a2e0f] font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#5A9A2E] rounded-full" />
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(OFFICE_ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#4a6635] hover:text-[#5A9A2E] text-sm transition-colors duration-200"
                >
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                  <span>{OFFICE_ADDRESS}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-[#4a6635] hover:text-[#5A9A2E] text-sm transition-colors duration-200"
                >
                  <Phone size={15} className="flex-shrink-0" />
                  {OFFICE_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OFFICE_EMAIL}`}
                  className="flex items-center gap-3 text-[#4a6635] hover:text-[#5A9A2E] text-sm transition-colors duration-200"
                >
                  <Mail size={15} className="flex-shrink-0" />
                  {OFFICE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d0e0c4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7a9464] text-xs">© {year} ECOAFA S.A.S. Todos los derechos reservados.</p>
          <p className="text-[#7a9464] text-xs">Bogotá D.C., Colombia · Fundada en 2007</p>
        </div>
      </div>
    </footer>
  )
}