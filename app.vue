<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

// Inicializar sesión al cargar la app
const authStore = useAuthStore()

onMounted(() => {
  authStore.initSession()
})
</script>
