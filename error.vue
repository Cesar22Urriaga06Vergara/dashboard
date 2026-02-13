<template>
  <NuxtLayout name="auth">
    <div class="d-flex align-center justify-center" style="min-height: 100vh">
      <div class="text-center" style="max-width: 420px">
        <div
          class="text-h1 font-weight-bold text-gradient mb-4"
          style="font-size: 6rem !important; line-height: 1"
        >
          {{ error?.statusCode || 404 }}
        </div>

        <h1 class="text-h5 font-weight-bold mb-2">
          {{ title }}
        </h1>

        <p class="text-body-2 text-medium-emphasis mb-8">
          {{ description }}
        </p>

        <div class="d-flex justify-center ga-3">
          <v-btn
            color="primary"
            size="large"
            prepend-icon="mdi-home"
            @click="handleGoHome"
          >
            Ir al inicio
          </v-btn>

          <v-btn
            variant="outlined"
            color="primary"
            size="large"
            prepend-icon="mdi-arrow-left"
            @click="handleGoBack"
          >
            Volver
          </v-btn>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const props = defineProps({
  error: Object,
})

const authStore = useAuthStore()

const title = computed(() => {
  switch (props.error?.statusCode) {
    case 403:
      return 'Acceso denegado'
    case 404:
      return 'Página no encontrada'
    case 500:
      return 'Error del servidor'
    default:
      return 'Algo salió mal'
  }
})

const description = computed(() => {
  switch (props.error?.statusCode) {
    case 403:
      return 'No tienes permisos para acceder a esta sección. Contacta al administrador si crees que es un error.'
    case 404:
      return 'La página que buscas no existe o ha sido movida. Verifica la URL e intenta nuevamente.'
    case 500:
      return 'Ocurrió un error interno. Nuestro equipo ha sido notificado. Intenta nuevamente en unos momentos.'
    default:
      return props.error?.message || 'Ha ocurrido un error inesperado.'
  }
})

const handleGoHome = () => {
  authStore.initSession()
  clearError({ redirect: authStore.isAuthenticated ? authStore.defaultRoute : '/login' })
}

const handleGoBack = () => {
  clearError({ redirect: '/' })
}
</script>
