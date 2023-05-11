<script setup lang="ts">
import Footer from './components/footer.vue'
const { login, form } = useAuth()
</script>

<template>
  <form class @submit.prevent="login">
    <div class="lg:w-[720px] bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <HdFormInput v-model="form.name" placeholder="请输入邮箱" v-clearError="'name'" />
            <HdError name="name" />
            <HdFormInput
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="请输入登录密码"
              v-clearError="'password'"
            />
            <HdError name="password" />
          </div>
          <HdCaptcha class="mt-3" v-model:captcha_value="form.captcha.value" v-model:captcha_key="form.captcha.key" />
          <HdFormButton class="w-full mt-3 primary">登录</HdFormButton>
        </div>
        <!-- {{ form }} -->
        <Footer />
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply flex justify-center items-start md:items-center p-5;
}
</style>
