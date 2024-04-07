<script setup lang="ts">
const { title } = defineProps<{
  title: string
}>()
const emit = defineEmits<{ (e: 'click'): void }>()
const click = () => {
  emit('click')
}
</script>
<template>
  <ButtonPrime @click="click">{{ title }}</ButtonPrime>
</template>
