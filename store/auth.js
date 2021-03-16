export const state = () => ({
  user: {
    token: null,
  },
})

export const getters = {
  getUserToken(state) {
    return state.user.token
  },
}
