<template lang="pug">
  p {{ excellentStudents }}
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  // data() {
  //   return {
  //     excellentStudents: () => [],
  //   }
  // },
  computed: {
    ...mapGetters({
      excellentStudents: 'reports/getStudentsWithExcellentMarks',
    }),
  },
  methods: {
    ...mapActions({
      retrieveExcellentStudents: 'reports/retrieveStudentsWithExcellentMarks',
    }),
  },
  async mounted() {
    this.studentsLoaded = await this.retrieveExcellentStudents()
  },
}
</script>
