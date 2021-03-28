export default ({ app, redirect, route }) => {
  if (route.name !== 'register' && route.name !== 'login') {
    if (!app.$cookies.get('access_token')) {
      return redirect('/login')
    }
  }
}
