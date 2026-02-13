// utils/validators.ts

type ValidationRule = (value: string) => string | true

export const required = (label: string): ValidationRule => {
  return (v: string) => !!v || `${label} es requerido`
}

export const email: ValidationRule = (v: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(v) || 'Debe ser un email válido'
}

export const minLength = (min: number, label: string): ValidationRule => {
  return (v: string) => (v && v.length >= min) || `${label} debe tener al menos ${min} caracteres`
}

export const maxLength = (max: number, label: string): ValidationRule => {
  return (v: string) => (v && v.length <= max) || `${label} no puede exceder ${max} caracteres`
}

export const passwordMatch = (getPassword: () => string): ValidationRule => {
  return (v: string) => v === getPassword() || 'Las contraseñas no coinciden'
}

// Conjuntos de reglas comunes
export const emailRules = [required('Email'), email]
export const passwordRules = [required('Contraseña'), minLength(6, 'La contraseña')]
export const nameRules = [required('Nombre'), minLength(2, 'El nombre')]
