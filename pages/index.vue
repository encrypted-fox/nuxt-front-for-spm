<template lang="pug">
  p {{ excellentStudents }}
</template>
<script>
import { mapGetters } from 'vuex'
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
}
</script>
