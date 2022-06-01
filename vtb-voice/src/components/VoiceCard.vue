<template>
  <div class="voice-div">
    <el-card style="width: 340px">
      <template #header>
        <div class="card-header">
          <el-tag class="mr4" type="warning">{{ tag }}</el-tag>
          <span>{{ fileName }}</span>
        </div>
      </template>
      <div>
        <audio :src="voiceSrc" controls preload="none">暂不支持此浏览器</audio>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  vtbName: String,
  fileName: String,
  md5: String,
  tag: String,
});

const voiceSrc =
  "https://voice-res.stoodant.top/" +
  props.vtbName?.toLowerCase() +
  "/" +
  props.md5 +
  ".mp3";
</script>

<style>
.mr4 {
  margin-right: 4px;
}
</style>
