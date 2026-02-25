<template>
  <div>
    <h1 class="text-h4 font-weight-bold mb-6">Amenidades</h1>
    <AdminAmenitiesTable />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['auth', 'role'],
  requiredRole: 'admin'
})
</script>
