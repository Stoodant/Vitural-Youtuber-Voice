<template>
  <div class="header-div">
    <div class="header-logo">
      <img src="../assets/favicon.ico" width="48" height="48" />
    </div>
    <div class="header-name">
      {{ vtbName }}'s Voice <span style="color: #fff;font-size: 16px">- Powered by Vitural Youtuber Voice (Early Version)</span>
    </div>
    <div class="header-info">
      <el-popover placement="bottom-end" :width="400" trigger="hover">
        <template #reference>
          <span style="margin-right: 16px; color: #fff">初始预览版本</span>
        </template>

        <el-descriptions :column="1" border direction="vertical">
          <el-descriptions-item
            label="主要贡献者"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
          >
            <el-icon><Watermelon /></el-icon>Stoodant
            <el-icon><Watermelon /></el-icon>Reshinka
            <el-icon><Watermelon /></el-icon>ZHGG
          </el-descriptions-item>

          <el-descriptions-item
            label="版本"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
          >
            初始预览版 | 0.0.-1
          </el-descriptions-item>

          <el-descriptions-item
            label="更新计划"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
          >
            Logo / UI布局 / 美工 / 循环播放
          </el-descriptions-item>

          <el-descriptions-item
            label="投稿方式"
            label-align="center"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px"
          >
            <a
              href="https://github.com/Stoodant/Vitural-Youtuber-Voice"
              target="_blank"
            >
              Github
            </a>
            | stoodant@outlook.com
          </el-descriptions-item>
        </el-descriptions>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Watermelon } from "@element-plus/icons-vue";

const props = defineProps({
  vtbName: String,
});
</script>

<style>
.header-div {
  background-image: linear-gradient(to bottom right, #ff9031, #e06a02);
  height: 48px;
  overflow: hidden;
  display: flex;
}

.header-logo {
  flex: 0 0 auto;
}

.header-name {
  flex: 0 0 auto;
  line-height: 48px;
  font-size: 24px;
  display: inline;
  margin-left: 16px;
  font-style: italic;
  font-weight: 500;
  color: #fff;
}

.header-info {
  flex: 1 1 auto;
  line-height: 48px;
  text-align: right;
  margin-left: 16px;
}
</style>
