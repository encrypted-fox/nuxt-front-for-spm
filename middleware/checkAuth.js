export default async ({ store, redirect }) => {
  if (!(await store.dispatch('auth/verifyAuth'))) {
    return redirect('/login')
  }
}
