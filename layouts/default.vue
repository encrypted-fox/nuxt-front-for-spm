<template lang="pug">
  v-app(class='application')
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
<style lang="sass" scoped>
@import "~@/assets/media.sass"
@import "~@/assets/variables.sass"

.application
  background: $form-color
</style>
