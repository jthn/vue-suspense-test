<script setup>
import SuspenseExample from './components/SuspenseExample.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <SuspenseExample />
    </template>
    <template #fallback>
      <div>Fallback Content</div>
    </template>
  </Suspense>
</template>
