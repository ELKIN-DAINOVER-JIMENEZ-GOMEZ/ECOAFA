// src/components/contact/useContactForm.ts
// Hook que encapsula el estado, validación y envío del formulario de contacto.
// Usa emailService.ts para el envío real vía EmailJS.

import { useState } from 'react'
import { sendEmail } from '../../lib/emailService'

export interface FormState {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const EMPTY_FORM: FormState = {
  nombre: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: '',
}

export function useContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.asunto || !form.mensaje) return
    setStatus('loading')
    try {
      await sendEmail(form)
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  const canSubmit =
    !!form.nombre && !!form.email && !!form.asunto && !!form.mensaje

  return { form, status, canSubmit, handleChange, handleSubmit, reset }
}