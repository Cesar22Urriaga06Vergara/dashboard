<template>
  <div>
    <h1 class="text-h4 font-weight-bold mb-6">Tipos de Habitación</h1>
    <AdminRoomTypesTable />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['auth', 'role'],
  requiredRole: 'admin'
})
</script>
