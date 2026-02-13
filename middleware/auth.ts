// middleware/auth.ts
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((_to, _from) => {
  const authStore = useAuthStore()

  // Inicializar sesión si no está cargada
  if (!authStore.isAuthenticated) {
    authStore.initSession()
  }

  // Si sigue sin autenticación, redirigir a login
  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
