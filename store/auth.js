export const state = () => ({
  user: {},
})

export const getters = {
  async getUserToken({ state, dispatch }) {
    if (await dispatch('auth/refreshUserToken')) {
      return state.user.access_token
    } else {
      return false
    }
  },
}

export const actions = {
  async registerUser({ commit }, username, password) {
    const response = JSON.parse(
      await this.$axios.$post(
        'https://students-monitor.herokuapp.com/api/v0/auth/register/',
        JSON.stringify({ username, password })
      )
    )

    if (response && response.access_token) {
      commit('setUser', response)
    } else {
      return response
    }
  },
  async authUser({ commit }, username, password) {
    const response = JSON.parse(
      await this.$axios.$post(
        'https://students-monitor.herokuapp.com/api/v0/auth/token/',
        JSON.stringify({ username, password })
      )
    )

    if (response && response.access_token) {
      commit('setUser', response)
    } else {
      return response
    }
  },
  async logoutUser({ commit }) {
    const response = JSON.parse(
      await this.$axios.$post(
        'https://students-monitor.herokuapp.com/api/v0/auth/refresh/',
        JSON.stringify({ token: state.user.access_token })
      )
    )

    if (response && response.message === 'token revoked') {
      commit('unsetUser')
      return true
    } else {
      return false
    }
  },
  async refreshUserToken({ state, commit }) {
    if (localStorage.getItem('tokenExpires') < Date.now()) {
      const response = JSON.parse(
        await this.$axios.$post(
          'https://students-monitor.herokuapp.com/api/v0/auth/refresh/',
          JSON.stringify({ refresh_token: state.user.refresh_token })
        )
      )

      if (response && response.access_token) {
        commit('setUser', response)
        return true
      } else {
        return false
      }
    }
  },
}

export const mutations = {
  setUser({ state }, user) {
    state.user = user

    localStorage.setItem('authToken', user.accessToken)
    localStorage.setItem('refreshToken', user.refresh_token)
    localStorage.setItem('tokenExpires', Date.now() + user.expires_in)
  },
  unsetUser({ state }) {
    state.user = {}

    localStorage.setItem('authToken', undefined)
    localStorage.setItem('refreshToken', undefined)
    localStorage.setItem('tokenExpires', undefined)
  },
}
