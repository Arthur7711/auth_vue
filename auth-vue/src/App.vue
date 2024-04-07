<script setup lang="ts">
import messageData from '@/store/message'
</script>

<template>
  <RouterView />
  <InlineMessagePrime v-if="messageData.message.text" :severity="messageData.message.severity" class="message">{{
    messageData.message.text
  }}</InlineMessagePrime>
</template>

<style scoped>
.message {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
