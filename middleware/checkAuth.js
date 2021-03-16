export default ({ store, redirect }) => {
  if (!store.getters['auth/getUserToken']) {
    return redirect('/login')
  }
}
