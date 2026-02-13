<template>
  <div>
    <div class="mb-6">
      <h1 class="text-h5 font-weight-bold mb-1">{{ nav.greeting.value }}</h1>
      <p class="text-body-2 text-medium-emphasis">
        Panel de control del patrocinador
      </p>
    </div>

    <!-- Info rápida -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6">
        <v-card class="card-glow pa-5">
          <div class="d-flex align-center">
            <v-avatar color="secondary" size="44" variant="tonal" rounded="lg" class="mr-4">
              <v-icon icon="mdi-handshake" size="22" />
            </v-avatar>
            <div>
              <div class="text-caption text-medium-emphasis">Cuenta</div>
              <div class="text-subtitle-2 font-weight-bold">{{ authStore.userName }}</div>
              <div class="text-caption text-medium-emphasis">{{ authStore.userEmail }}</div>
            </div>
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
            <v-avatar color="primary" size="44" variant="tonal" rounded="lg" class="mr-4">
              <v-icon icon="mdi-account-edit-outline" size="22" />
            </v-avatar>
            <div>
              <div class="text-subtitle-2 font-weight-bold">Editar perfil</div>
              <div class="text-caption text-medium-emphasis">Actualizar información</div>
            </div>
            <v-spacer />
            <v-icon icon="mdi-chevron-right" size="20" color="medium-emphasis" />
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Placeholder para contenido futuro -->
    <v-card class="card-glow">
      <v-card-text class="pa-8 text-center">
        <v-icon icon="mdi-chart-timeline-variant" size="80" color="secondary" class="mb-4 opacity-50" />
        <h3 class="text-h6 font-weight-medium mb-2">En desarrollo</h3>
        <p class="text-body-2 text-medium-emphasis mb-4" style="max-width: 400px; margin: 0 auto">
          El perfil completo del sponsor con datos de la entidad vinculada se implementará en la Fase 5.
        </p>

        <v-chip variant="tonal" color="info" size="small">
          <v-icon icon="mdi-information" size="14" class="mr-1" />
          Fase 5 — Panel de Sponsor
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useRoleNavigation } from '~/composables/useRoleNavigation'
import { UserRole } from '~/types/auth'

definePageMeta({
  middleware: ['auth', 'role'],
  roles: [UserRole.CLIENTE],
})

useHead({ title: 'Dashboard Cliente' })

const authStore = useAuthStore()
const nav = useRoleNavigation()
</script>
