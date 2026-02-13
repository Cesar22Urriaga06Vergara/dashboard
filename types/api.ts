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
