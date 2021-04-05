<template lang="pug">
  v-card(max-width="344" outlined id='card')
    v-list-item(three-line)
      v-list-item-content
        v-list-item-title(class="headline mb-1") Всего отличников:
      v-avatar(class="headline mb-1") {{ excellentStudents.length }}
    v-card-actions
      v-btn(outlined rounded text @click='goToNextPage()') Подробнее
</template>
<script>
import { mapMutations } from 'vuex'
import html2canvas from 'html2canvas'
import JSPDF from 'jspdf'
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
      // this.$router.push({ name: 'excellent_students' })
      this.printFacture()
    },
    printFacture() {
      setTimeout(() => {
        const pdf = new JSPDF('p', 'mm', 'a4')
        const element = document.getElementById('card')
        const width = parseInt(element.style.width) / 2
        const height = parseInt(element.style.height) / 2
        html2canvas(element).then((canvas) => {
          const image = canvas.toDataURL('image/png')
          pdf.addImage(image, 'JPEG', 0, 0, width, height)
          pdf.save('facture' + '.pdf')
        })
      }, 1000)
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
