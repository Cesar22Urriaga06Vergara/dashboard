// types/api.ts

export interface ApiError {
  statusCode: number
  message: string | string[]
  error?: string
}

export interface ApiResponse<T = any> {
  message: string
  [key: string]: T | string | number | boolean | undefined
}
// Amenidad
export interface Amenidad {
  id: number
  nombre: string
  icono?: string
  categoria?: string
  descripcion?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateAmenidadDto {
  nombre: string
  icono?: string
  categoria?: string
  descripcion?: string
}

export interface UpdateAmenidadDto extends Partial<CreateAmenidadDto> {}

// Tipo de Habitación
export interface TipoHabitacion {
  id: number
  idHotel: number
  nombreTipo: string
  descripcion?: string
  capacidadPersonas: number
  precioBase?: number
  activo: boolean
  amenidades: Amenidad[]
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateTipoHabitacionDto {
  idHotel: number
  nombreTipo: string
  descripcion?: string
  capacidadPersonas: number
  precioBase?: number
  activo?: boolean
  amenidadesIds?: number[]
}

export interface UpdateTipoHabitacionDto extends Partial<CreateTipoHabitacionDto> {}

// Habitación
export interface Habitacion {
  id: number
  idHotel: number
  numeroHabitacion: string
  piso?: string
  estado?: string
  idTipoHabitacion: number
  tipoHabitacion?: TipoHabitacion
  fechaActualizacion?: Date
  createdAt?: Date
  updatedAt?: Date
}

export interface CreateHabitacionDto {
  idHotel: number
  numeroHabitacion: string
  piso?: string
  estado?: string
  idTipoHabitacion: number
}

export interface UpdateHabitacionDto extends Partial<CreateHabitacionDto> {}