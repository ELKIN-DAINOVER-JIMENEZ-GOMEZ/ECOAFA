// src/components/maps/OfficeMap.tsx
// Mapa de la oficina ECOAFA usando Google Maps Embed (sin dependencias externas).
// Recibe la URL del embed como prop para mantenerlo desacoplado de las constantes.

interface OfficeMapProps {
  embedUrl: string
  height?: number
}

export default function OfficeMap({ embedUrl, height = 420 }: OfficeMapProps) {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl border"
      style={{ borderColor: 'rgba(125,194,66,0.2)' }}
    >
      <iframe
        title="ECOAFA Oficina Bogotá"
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}