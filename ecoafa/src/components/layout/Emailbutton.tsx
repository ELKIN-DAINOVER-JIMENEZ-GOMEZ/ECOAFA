import { useState } from 'react'
import { Mail } from 'lucide-react'
import { OFFICE_EMAIL } from '../../lib/Constants'

export default function EmailButton() {
  const [hovered, setHovered] = useState(false)

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${OFFICE_EMAIL}&su=Consulta%20ECOAFA%20S.A.S`

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
          Envíanos un correo ✉️
        </div>
      </div>

      {/* Botón */}
      <a
        href={gmailUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        style={{
          backgroundColor: '#00AEEF',
          boxShadow: '0 8px 32px rgba(0,174,239,0.4)',
        }}
        aria-label="Enviar correo a ECOAFA"
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: '#00AEEF' }}
        />
        <Mail size={26} className="text-white relative z-10" />
      </a>
    </div>
  )
}