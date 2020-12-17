export default async function(context) {
  // Universal keys
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
    $config
  } = context;

  if (!store.getters.authenticated) {
    redirect("/login");
  }
}
