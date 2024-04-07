<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { register } from '@/api'
import messageData from '@/store/message'

const loginPass = reactive({
  login: '',
  password: ''
})

const router = useRouter()
const registerSystem = async () => {
  try {
    const data = await register({ username: loginPass.login, password: loginPass.password })
    messageData.setMessage({ text: 'successfully login', severity: 'success' })
    // if api work than need to pass to JWT
    console.log(data, 'data')
    router.push('/home')
  } catch (error: any) {
    messageData.setMessage({ text: error?.message, severity: 'error' })
    console.log(error)
  }
}
</script>
<template>
  <div class="login">
    <h1>LOGIN</h1>
    <InputPrime type="text" v-model="loginPass.login" />
    <InputPrime type="password" v-model="loginPass.password" />
    <div class="login_buttons">
      <ButtonComponent @click="registerSystem" title="Register" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  * {
    border-radius: 5px;
    height: 30px;
    border-color: #18acf0;
  }
  &_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  h1 {
    text-align: center;
  }
}
</style>
