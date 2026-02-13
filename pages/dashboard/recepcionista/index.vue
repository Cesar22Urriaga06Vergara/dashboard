<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h5 font-weight-bold mb-1">{{ nav.greeting.value }}</h1>
      <p class="text-body-2 text-medium-emphasis">
        Tu resumen de juego
      </p>
    </div>

    <!-- Stats cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="4">
        <v-card class="card-glow pa-6">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="text-caption text-medium-emphasis text-uppercase font-weight-bold" style="letter-spacing: 0.06em">
              Puntuación
            </div>
            <v-avatar color="warning" size="36" variant="tonal" rounded="lg">
              <v-icon icon="mdi-star" size="18" />
            </v-avatar>
          </div>
          <div class="text-h3 font-weight-bold text-gradient">
            {{ authStore.user?.totalScore || 0 }}
          </div>
          <div class="text-caption text-medium-emphasis mt-1">puntos acumulados</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="card-glow pa-6">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="text-caption text-medium-emphasis text-uppercase font-weight-bold" style="letter-spacing: 0.06em">
              Pistas
            </div>
            <v-avatar color="primary" size="36" variant="tonal" rounded="lg">
              <v-icon icon="mdi-magnify" size="18" />
            </v-avatar>
          </div>
          <div class="text-h3 font-weight-bold">
            {{ cluesCount }}
          </div>
          <div class="text-caption text-medium-emphasis mt-1">pistas descubiertas</div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="card-glow pa-6">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="text-caption text-medium-emphasis text-uppercase font-weight-bold" style="letter-spacing: 0.06em">
              Último acceso
            </div>
            <v-avatar color="secondary" size="36" variant="tonal" rounded="lg">
              <v-icon icon="mdi-clock-outline" size="18" />
            </v-avatar>
          </div>
          <div class="text-h6 font-weight-bold">
            {{ formatDate(authStore.user?.lastLogin) }}
          </div>
          <div class="text-caption text-medium-emphasis mt-1">última sesión</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quick actions -->
    <h2 class="text-subtitle-1 font-weight-bold mb-3">Acciones rápidas</h2>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          to="/dashboard/player/clues"
          class="card-glow pa-5"
          style="cursor: pointer"
        >
          <div class="d-flex align-center">
            <v-avatar color="primary" size="44" variant="tonal" rounded="lg" class="mr-4">
              <v-icon icon="mdi-magnify" size="22" />
            </v-avatar>
            <div>
              <div class="text-subtitle-2 font-weight-bold">Ver mis pistas</div>
              <div class="text-caption text-medium-emphasis">
                {{ cluesCount }} pistas descubiertas hasta ahora
              </div>
            </div>
            <v-spacer />
            <v-icon icon="mdi-chevron-right" size="20" color="medium-emphasis" />
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          to="/dashboard/profile"
          class="card-glow pa-5"
          style="cursor: pointer"
        >
          <div class="d-flex align-center">
            <v-avatar color="secondary" size="44" variant="tonal" rounded="lg" class="mr-4">
              <v-icon icon="mdi-account-circle-outline" size="22" />
            </v-avatar>
            <div>
              <div class="text-subtitle-2 font-weight-bold">Mi perfil</div>
              <div class="text-caption text-medium-emphasis">
                Editar información personal
              </div>
            </div>
            <v-spacer />
            <v-icon icon="mdi-chevron-right" size="20" color="medium-emphasis" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useRoleNavigation } from '~/composables/useRoleNavigation'
import { UserRole } from '~/types/auth'

definePageMeta({
  middleware: ['auth', 'role'],
  roles: [UserRole.RECEPCIONISTA],
})

useHead({ title: 'Panel Recepcionista' })

const authStore = useAuthStore()
const nav = useRoleNavigation()

const cluesCount = computed(() => authStore.user?.discoveredClues?.length || 0)

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'N/A'
  return new Date(dateStr).toLocaleDateString('es-CO', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>
