import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER } from '../../lib/Constants'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className={`transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
        <div className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
          ¡Escríbenos! 💬
        </div>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <FaWhatsapp size={28} className="text-white relative z-10" />
      </a>
    </div>
  )
}