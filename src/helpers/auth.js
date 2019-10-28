
export const saveSessionToken = () => {
  const session = new Date().getTime();
  localStorage.setItem('sessionToken', session);
  return session;
}

export const logoutSession = () => {
  localStorage.clear();
}

export const isLogged = () => {
  return !!localStorage.getItem('sessionToken');
}