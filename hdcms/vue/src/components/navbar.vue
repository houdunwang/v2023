<script setup lang="ts"></script>

<template>
  <main class="bg-white border-t-4 border-orange-600 py-5 shadow-sm">
    <div class="2xl:w-page m-auto flex justify-between px-3">
      <router-link to="/" class="flex items-center gap-2 text-2xl opacity-90 text-[#e74c3c]">
        <icon-code-download theme="outline" size="28" />
        <span class="">hdcms.com</span>
      </router-link>
      <div class="flex gap-3 opacity-90 items-center">
        <div class="hidden md:flex gap-3">
          <a href="https://www.houdunren.com">视频教程</a>
          <a href="https://www.houdunren.com">晚八点直播</a>
          <a href="https://www.houdunren.com">文档库</a>
        </div>
        <HdUserAvatarMenu />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
