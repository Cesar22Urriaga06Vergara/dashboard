<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-6 flex-wrap ga-2">
      <div>
        <h1 class="text-h5 font-weight-bold mb-1">Mis Pistas</h1>
        <p class="text-body-2 text-medium-emphasis">
          Pistas que has descubierto durante el juego
        </p>
      </div>

      <v-chip variant="tonal" color="primary" size="small">
        <v-icon icon="mdi-magnify" size="14" class="mr-1" />
        {{ authStore.user?.discoveredClues?.length || 0 }} descubiertas
      </v-chip>
    </div>

    <v-card class="card-glow">
      <v-card-text class="pa-8 text-center">
        <v-icon icon="mdi-map-marker-question-outline" size="80" color="primary" class="mb-4 opacity-50" />
        <h3 class="text-h6 font-weight-medium mb-2">En desarrollo</h3>
        <p class="text-body-2 text-medium-emphasis mb-4" style="max-width: 400px; margin: 0 auto">
          La lista detallada de pistas con estado visual se implementará en la Fase 4.
        </p>

        <v-chip variant="tonal" color="info" size="small">
          <v-icon icon="mdi-information" size="14" class="mr-1" />
          Fase 4 — Panel de Jugador
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { UserRole } from '~/types/auth'

definePageMeta({
  middleware: ['auth', 'role'],
  roles: [UserRole.RECEPCIONISTA],
})

useHead({ title: 'Gestión Recepción' })

const authStore = useAuthStore()
</script>
