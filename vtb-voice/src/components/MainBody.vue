<template>
  <div class="body-div">
    <el-space>
      <VoiceCard v-for="i in 3" :key="i" />
    </el-space>
  </div>
</template>

<script setup lang="ts">
import VoiceCard from "./VoiceCard.vue";
</script>

<style>
.body-div {
  background-color: #f0f2f5;
  min-height: calc(100vh - 48px);
  padding: 8px;
}
</style>
