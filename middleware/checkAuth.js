export default ({ app, redirect, route }) => {
  if (route.name !== 'register' && route.name !== 'login') {
    if (!app.$cookies.get('authToken')) {
      return redirect('/login')
    }
  }
}
