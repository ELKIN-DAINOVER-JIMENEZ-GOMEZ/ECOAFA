// src/components/ui/Field.tsx
// Input reutilizable con estilo glassmorphism para formularios sobre fondo oscuro.

interface FieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type?: string
  required?: boolean
  accentColor: string
}

export default function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  accentColor,
}: FieldProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder-white/30"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          caretColor: accentColor,
        }}
        onFocus={(e) => (e.target.style.borderColor = accentColor)}
        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
      />
    </div>
  )
}