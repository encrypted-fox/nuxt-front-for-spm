export const state = () => ({
  studentsWithExcellentMarks: [],
})

export const getters = {
  async getStudentsWithExcellentMarks({ state, dispatch }) {
    await dispatch('retrieveStudentsWithExcellentMarks')
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
