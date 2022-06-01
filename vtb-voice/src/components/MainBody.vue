<template>
  <div class="body-div">
    <VoiceCard
      v-for="file of voiceList.data"
      :key="file.md5"
      :vtbName="vtbName"
      :fileName="file.name"
      :md5="file.md5"
      :tag="file.tag"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import VoiceCard from "./VoiceCard.vue";
const props = defineProps({
  vtbName: String,
});

const voiceList: any = reactive({
  data: [],
});

axios
  .get(
    "https://voice-res.stoodant.top/" + props.vtbName?.toLowerCase() + ".json"
  )
  .then(function (response) {
    voiceList.data = response?.data?.file_data ?? [];
    console.log(voiceList.data);
  })
  .catch(function (error) {
    console.error(error);
  });
</script>

<style>
.body-div {
  background-color: #f0f2f5;
  min-height: calc(100vh - 48px);
  padding: 8px;
}
</style>
