<script setup lang="ts">
const { captcha_value, captcha_key } = defineProps<{
  captcha_value: string
  captcha_key: string
}>()
const emit = defineEmits(['update:captcha_key', 'update:captcha_value'])
const { getCaptcha, captcha } = useCaptcha()

watch(captcha, () => {
  emit('update:captcha_key', captcha.value?.key)
})

await getCaptcha()
</script>

<template>
  <main>
    <section class="flex gap-1">
      <HdFormInput @input="$emit('update:captcha_value', $event.target.value)" placeholder="验证码" />
      <div v-html="captcha?.svg" @click="getCaptcha" class="border rounded-md cursor-pointer"></div>
      <!-- {{ captcha?.svg }} -->
      <!-- <el-image :src="captchaValue?.img" class="rounded-md w-[180px] border cursor-pointer" @click="getCaptcha" /> -->
    </section>

    <HdError name="captcha" />
  </main>
</template>

<style lang="scss"></style>
