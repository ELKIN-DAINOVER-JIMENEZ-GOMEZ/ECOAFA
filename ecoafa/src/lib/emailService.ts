export interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  asunto: string
  mensaje: string
}

/**
 * Envía un correo via EmailJS usando fetch (sin dependencias externas).
 * Variables requeridas en .env:
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendEmail(data: ContactFormData): Promise<void> {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Faltan variables de entorno de EmailJS. ' +
      'Verifica VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY en tu .env'
    )
  }

  const payload = {
    service_id:  serviceId,
    template_id: templateId,
    user_id:     publicKey,
    template_params: {
      nombre:   data.nombre,
      email:    data.email,
      telefono: data.telefono ?? 'No proporcionado',
      asunto:   data.asunto,
      mensaje:  data.mensaje,
    },
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`EmailJS error ${res.status}: ${msg}`)
  }
}