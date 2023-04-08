<script setup lang="ts">
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import { useConfigStore } from './stores/useConfigStore'
import useDrag from './composables/useDrag'
const { config } = useConfigStore()

//拖拽窗口
const { drag } = useDrag()
drag.run()
const quit = () => window.api.quit()

const changeRound = () => {
  config.rounded = !config.rounded
  if (config.rounded) window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  else window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 280 })
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <SettingIcon
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page == 'camera'"
          @click="config.page = 'setting'"
        />
        <CameraFive
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page == 'setting'"
          @click="config.page = 'camera'"
        />
        <!-- 切换圆角 -->
        <InnerShadowTopLeft
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          v-if="config.page == 'camera'"
          @click="changeRound"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<style lang="less"></style>
