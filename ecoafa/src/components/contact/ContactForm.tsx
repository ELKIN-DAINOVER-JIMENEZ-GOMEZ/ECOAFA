// src/components/contact/ContactForm.tsx
// Formulario de contacto completo con estados idle / loading / success / error.
// Usa useContactForm para la lógica y Field para los inputs.

import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Field from '../ui/Field'
import { useContactForm } from './UseContactForm'

export default function ContactForm() {
  const { form, status, canSubmit, handleChange, handleSubmit, reset } =
    useContactForm()

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: 'rgba(125,194,66,0.2)' }}
        >
          <CheckCircle size={42} style={{ color: '#7DC242' }} />
        </div>
        <h3 className="text-2xl font-black text-white mb-3">
          ¡Mensaje enviado!
        </h3>
        <p className="text-white/70 mb-7">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#7DC242', color: '#fff' }}
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          required
          accentColor="#7DC242"
        />
        <Field
          label="Correo electrónico"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@correo.com"
          required
          accentColor="#7DC242"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Teléfono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Opcional"
          accentColor="#00AEEF"
        />
        <Field
          label="Asunto"
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          placeholder="Motivo de contacto"
          required
          accentColor="#00AEEF"
        />
      </div>

      {/* Textarea Mensaje */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 block">
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all resize-none placeholder-white/30"
          style={{
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            caretColor: '#7DC242',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#7DC242')}
          onBlur={(e) =>
            (e.target.style.borderColor = 'rgba(255,255,255,0.15)')
          }
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>Ocurrió un error. Por favor intenta de nuevo.</span>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={status === 'loading' || !canSubmit}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:gap-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          style={{ backgroundColor: '#7DC242', color: '#fff' }}
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <Send size={15} />
            </>
          )}
        </button>
      </div>
    </div>
  )
}