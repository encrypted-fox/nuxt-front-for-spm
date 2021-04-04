<template lang="pug">
  p {{ excellentStudents }}
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      excellentStudents: () => [],
    }
  },
  methods: {
    ...mapActions({
      retrieveExcellentStudents: 'reports/retrieveStudentsWithExcellentMarks',
    }),
    async getExcellentStudents() {
      await this.retrieveExcellentStudents()
    },
  },
  async mounted() {
    this.excellentStudents = await this.retrieveExcellentStudents()
  },
}
</script>
