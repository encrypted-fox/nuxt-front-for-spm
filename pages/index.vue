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
  methods: {
    ...mapMutations({
      setExcellentStudents: 'reports/setStudentsWithExcellentMarks',
    }),
  },
  async fetch() {
    this.excellentStudents = await fetch(
      'https://students-monitor.herokuapp.com/api/v0/auth/list_excellent_students/'
    ).then((res) => res.json())
  },
  fetchOnServer: false,
}
</script>
