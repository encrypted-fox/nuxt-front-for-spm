<template>
  <nuxt />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ user: 'auth/getUserToken' }),
  },
}
</script>
