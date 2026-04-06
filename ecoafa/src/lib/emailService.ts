import { OFFICE_EMAIL } from './Constants'

export interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  asunto: string
  mensaje: string
}

export async function sendEmail(data: ContactFormData): Promise<void> {
  const subject = encodeURIComponent(`Consulta ECOAFA: ${data.asunto}`)
  const body = encodeURIComponent(
    [
      `Nombre: ${data.nombre}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.telefono ?? 'No proporcionado'}`,
      '',
      data.mensaje,
    ].join('\n')
  )

  window.location.href = `mailto:${OFFICE_EMAIL}?subject=${subject}&body=${body}`
}