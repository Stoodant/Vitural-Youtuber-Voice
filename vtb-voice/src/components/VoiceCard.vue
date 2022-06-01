<template>
  <div class="voice-div">
      <el-card style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
    
  </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>