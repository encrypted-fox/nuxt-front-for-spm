export const state = () => ({
  studentsWithExcellentMarks: [],
})

export const getters = {
  async getStudentsWithExcellentMarks({ state, dispatch }) {
    await dispatch('retrieveStudentsWithExcellentMarks')
    return state.studentsWithExcellentMarks
  },
}

export const actions = {
  async retrieveStudentsWithExcellentMarks({ commit }) {
    this.$axios.setHeader('Content-Type', 'application/json')
    const response = await this.$axios.$get(
      'https://students-monitor.herokuapp.com/api/v0/list_excellent_students/'
    )

    if (response && response.length > 0) {
      commit('setStudentsWithExcellentMarks', response)
      return true
    } else {
      return false
    }
  },
}

export const mutations = {
  setStudentsWithExcellentMarks(state, students) {
    state.studentsWithExcellentMarks = students

    this.$cookies.set('studentsWithExcellentMarks', students)
  },
}
