<template lang="pug">
  p {{ getExcellentStudents() }}
</template>
<script>
import { mapActions } from 'vuex'
export default {
  // data() {
  //   return {}
  // },
  methods: {
    ...mapActions({
      retrieveExcellentStudents: 'reports/retrieveStudentsWithExcellentMarks',
    }),
    async getExcellentStudents() {
      return await this.retrieveExcellentStudents()
    },
  },
}
</script>
