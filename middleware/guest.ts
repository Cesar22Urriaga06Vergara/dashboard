// middleware/guest.ts
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((_to, _from) => {
  const authStore = useAuthStore()

  // Inicializar sesión si no está cargada
  if (!authStore.isAuthenticated) {
    authStore.initSession()
  }

  // Si ya está autenticado, redirigir al dashboard según su rol
  if (authStore.isAuthenticated) {
    return navigateTo(authStore.defaultRoute)
  }
})
