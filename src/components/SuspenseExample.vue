<template>
  <div>{{ out }}</div>
</template>

<script setup>
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

await timeout(100)

const out = "Suspended"
</script>
