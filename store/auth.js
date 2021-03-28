export const state = () => ({
  user: {},
})

export const getters = {
  getUserToken({ state }) {
    return state.user.access_token
  },
}

export const actions = {
  async registerUser({ commit }, user) {
    this.$axios.setHeader('Content-Type', 'application/json')
    const rawResponse = await this.$axios.$post(
      'https://students-monitor.herokuapp.com/api/v0/auth/register/',
      JSON.stringify({ username: user.username, password: user.password })
    )
    const response = JSON.parse(rawResponse)

    if (response && response.access_token) {
      commit('setUser', response)
      return true
    } else {
      return false
    }
  },
  async authUser({ commit }, user) {
    this.$axios.setHeader('Content-Type', 'application/json')
    const rawResponse = await this.$axios.$post(
      'https://students-monitor.herokuapp.com/api/v0/auth/token/',
      JSON.stringify({ username: user.username, password: user.password })
    )
    const response = rawResponse
    if (response && response.access_token) {
      commit('setUser', response)
      return true
    } else {
      return false
    }
  },
  async logoutUser({ commit }) {
    this.$axios.setHeader('Content-Type', 'application/json')
    const rawResponse = await this.$axios.$post(
      'https://students-monitor.herokuapp.com/api/v0/auth/refresh/',
      JSON.stringify({ token: state.user.access_token })
    )
    const response = JSON.parse(rawResponse)

    if (response && response.message === 'token revoked') {
      commit('unsetUser')
      return true
    } else {
      return false
    }
  },
  async refreshUserToken({ state, commit }) {
    if (
      this.$cookies.get('tokenExpires') &&
      this.$cookies.get('tokenExpires') < Date.now()
    ) {
      this.$axios.setHeader('Content-Type', 'application/json')
      const rawResponse = await this.$axios.$post(
        'https://students-monitor.herokuapp.com/api/v0/auth/refresh/',
        JSON.stringify({ refresh_token: state.user.refresh_token })
      )
      const response = JSON.parse(rawResponse)

      if (response && response.access_token) {
        commit('setUser', response)
        return true
      }
    }
    return false
  },
  async verifyAuth({ state, dispatch }) {
    if (await dispatch('refreshUserToken')) {
      return state.user.access_token
    } else {
      return false
    }
  },
}

export const mutations = {
  setUser(state, user) {
    state.user = user

    this.$cookies.set('authToken', user.accessToken)
    this.$cookies.set('refreshToken', user.refresh_token)
    this.$cookies.set('tokenExpires', Date.now() + user.expires_in)
  },
  unsetUser(state) {
    state.user = {}

    this.$cookies.set('authToken', undefined)
    this.$cookies.set('refreshToken', undefined)
    this.$cookies.set('tokenExpires', undefined)
  },
}
