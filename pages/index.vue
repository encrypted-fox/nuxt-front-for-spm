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
      getExcellentStudents: 'reports/retrieveStudentsWithExcellentMarks',
    }),
  },
}
</script>
