<template lang="pug">
  p {{ excellentStudents }}
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
  methods: {
    ...mapMutations({
      setExcellentStudents: 'reports/setStudentsWithExcellentMarks',
    }),
  },
  fetchOnServer: false,
}
</script>
