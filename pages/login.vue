<template lang="pug">
  .login
    h1 Войдите
    form
      input(placeholder='Логин' type='text' required v-model='login')
      hr
      input(placeholder='Пароль' type='password' required v-model='password')
      svg(width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style="position: absolute; right: -50")
          circle(cx='50' cy='50' r='50' fill='#202125')
      svg(class='svg'
          width='75'
          height='75'
          viewBox='0 0 75 75'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          @click="handleLogin")
          circle(cx='37.5' cy='37.5' r='37.5' fill='#16171B')
          path(d='M55 37.5L28.75 52.6554L28.75 22.3446L55 37.5Z' fill='#00B275')
    p Ещё нет аккаунта?
      NuxtLink(to='/register')  Зарегистрируйтесь
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      login: undefined,
      password: undefined,
    }
  },
  head() {
    return {
      title: 'Войти',
    }
  },
  methods: {
    ...mapActions({
      authUser: 'auth/authUser',
    }),
    async handleLogin() {
      console.log(this.login)
      console.log(this.password)
      const userLoggedIn = await this.authUser(this.login, this.password)
      if (userLoggedIn) {
        await this.$router.push('/')
      } else {
        console.log('[ERROR]: User not authenticated')
      }
    },
  },
}
</script>
<style lang="sass">
$form-color: #16171b
$input-text-color: #a3a4a8
$background-color: #202125

body
    margin: 0
    font-family: 'Roboto', sans-serif

.login
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
        font-size: 48px
        text-align: center


    p
        color: #a3a4a8
        text-align: center
        display: flex
        align-items: center
        flex-direction: column

        a
            color: #00b376
            text-decoration: none


        margin-top: 30px


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

        hr
          background-color: $background-color
          border: 3px solid transparent
          border-radius: 10px
          width: 85%


        input
            width: 85%
            height: 35%
            font-size: 24px
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
    .login
        form
            width: 70%




@media screen and (min-width: 700px)
    .login
        form
            width: 600px


        h1
            font-size: 64px


        p
            display: block
</style>
