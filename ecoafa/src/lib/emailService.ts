export interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  asunto: string
  mensaje: string
}

export async function sendEmail(data: ContactFormData): Promise<void> {
  const res = await fetch('https://formspree.io/f/mqeyakgo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre:   data.nombre,
      email:    data.email,
      telefono: data.telefono ?? 'No proporcionado',
      asunto:   data.asunto,
      mensaje:  data.mensaje,
    }),
  })

  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`Formspree error ${res.status}: ${msg}`)
  }
}