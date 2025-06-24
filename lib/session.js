let isLoggedIn = false;

export function login() {
  if (
    password === process.env.ADMIN_PASSWORD &&
    user === process.env.ADMIN_USERNAME
  ) {
    isLoggedIn = true;
    return true;
  }
  return false;
}

export function checkLogin() {
  return isLoggedIn;
}

export function logout() {
  isLoggedIn = false;
}
