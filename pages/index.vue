<template lang="pug">
  v-card(max-width="344" outlined)
    v-list-item(three-line)
      v-list-item-content
        v-list-item-title(class="headline mb-1") Всего отличников:
      v-avatar(class="headline mb-1") {{ excellentStudents.length }}
    v-card-actions
      v-btn(outlined rounded text @click='goToNextPage()') Подробнее
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      excellentStudents: () => [],
    }
  },
  async fetch() {
    this.excellentStudents = await fetch(
      'https://students-monitor.herokuapp.com/api/v0/list_excellent_students/'
    ).then((res) => res.json())
  },
  mounted() {
    this.setExcellentStudents(this.excellentStudents)
  },
  methods: {
    ...mapMutations({
      setExcellentStudents: 'reports/setStudentsWithExcellentMarks',
    }),
    goToNextPage() {
      this.$router.push({ name: 'excellent_students' })
    },
  },
}
</script>
<style lang="sass" scoped>
@import "~@/assets/media.sass"
@import "~@/assets/variables.sass"

.theme--dark.v-card
  background-color: $form-color

.theme--dark.v-sheet--outlined
  border-color: #ffffff25
</style>
