<template lang="pug">
  v-app
    Navigation
    <!-- Sizes your content based upon application components -->
    v-main
      <!-- Provides the application the proper gutter -->
      v-container(fluid)
        Nuxt
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '@/components/default/Navigation'

export default {
  components: {
    Navigation,
  },
  computed: {
    ...mapGetters({ user: 'auth/getUserToken' }),
  },
}
</script>
