<template lang="pug">
  v-card(class="mx-auto" max-width="344" outlined)
  v-list-item(three-line)
    v-list-item-content
      v-list-item-title(class="headline mb-1") Всего отличников:
      v-list-item-subtitle Greyhound divisely hello coldly fonwderfull)
  v-list-item(three-line)
    v-list-item-content
      v-list-item-title(class="headline mb-1") Всего отличников:
      v-list-item-subtitle Greyhound divisely hello coldly fonwderfull)
  v-card-actions
    v-btn(outlined rounded text) Button
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
  },
}
</script>
