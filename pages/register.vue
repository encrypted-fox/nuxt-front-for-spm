<template lang="pug">
 .register
   h1 Регистрация
   form
     input(placeholder='Логин' type='text' required v-model='login' @keyup.enter='handleRegister' tabindex=1)
     hr
     input(placeholder='Пароль' type='password' required v-model='password' @keyup.enter='handleRegister' tabindex=2)
     hr
     input(placeholder='Повторите пароль' type='password' required v-model='secPassword' @keyup.enter='handleRegister' tabindex=3)
     svg(
       width='100'
       height='100'
       viewBox='0 0 100 100'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
       style="position: absolute; right: -50px",
     )
       circle(cx='50' cy='50' r='50' fill='#202125')
     svg(
       class='svg'
       width='75'
       height='75'
       viewBox='0 0 75 75'
       fill='none'
       xmlns='http://www.w3.org/2000/svg'
       @click='handleRegister'
       @keyup.enter='handleRegister'
       tabindex=4)
       circle(cx='37.5' cy='37.5' r='37.5' fill='#16171B')
       path(d='M55 37.5L28.75 52.6554L28.75 22.3446L55 37.5Z' fill='#00B275')
</template>
<script>
import { mapActions } from 'vuex'

export default {
  layout: 'authLayout',
  data() {
    return {
      login: '',
      password: '',
      secPassword: '',
    }
  },
  head() {
    return {
      title: 'Регистрация',
    }
  },
  methods: {
    ...mapActions({
      registerUser: 'auth/registerUser',
    }),
    async handleRegister() {
      if (this.password !== this.secPassword) {
        return false
      }
      const userLoggedIn = await this.registerUser({
        username: this.login,
        password: this.password,
      })
      if (userLoggedIn) {
        await this.$router.push('/')
      } else {
        alert('[ERROR]: User not authenticated')
      }
    },
  },
}
</script>
<style lang="sass" scoped>
@import "~@/assets/media.sass"
@import "~@/assets/variables.sass"

body *
  margin: 0
  font-family: 'Roboto', sans-serif
.register
  width: 100vw
  height: 100vh
  background: $background-color
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  h1
    color: #e5e5e5
    margin-bottom: 100px
    font-size: 36px
    text-align: center
  p
    color: #a3a4a8
    text-align: center
    display: flex
    align-items: center
    flex-direction: column
    margin-top: 30px
    a
      color: #00b376
      text-decoration: none
  form
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 65%
    height: 200px
    border-radius: 20px
    background: $form-color
    position: relative
    padding: 20px
    hr
      background-color: $background-color
      border: 3px solid transparent
      border-radius: 10px
      width: 100%
      margin-left: 6vw
      @include phones
        margin-left: 10vw
    input
      width: 85%
      height: 35%
      font-size: 16px
      color: $input-text-color
      background: $form-color
      outline: none
      border: none
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus
      outline: none
      font-size: 24px
      border: none
      -webkit-text-fill-color: $input-text-color
      -webkit-box-shadow: 0 0 0 1000px $form-color inset
      transition: background-color 5000s ease-in-out 0s
    .svg
      position: absolute
      right: -37.5px
      cursor: pointer

@media screen and (min-width: 330px)
  .Register
    form
      width: 70%
      input
        font-size: 24px

@media screen and (min-width: 700px)
  .register
      form
        width: 600px
      h1
        font-size: 64px
      p
        display: block
</style>
