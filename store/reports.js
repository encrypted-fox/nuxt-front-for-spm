export const state = () => ({
  studentsWithExcellentMarks: [],
})

export const getters = {
  getStudentsWithExcellentMarks({ state }) {
    return state.studentsWithExcellentMarks
  },
}

export const actions = {}

export const mutations = {
  setStudentsWithExcellentMarks(state, students) {
    state.studentsWithExcellentMarks = students
    this.$cookies.set('studentsWithExcellentMarks', students)
  },
}
