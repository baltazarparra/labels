export const API = (user) => {
  return fetch(`https://api.github.com/users/${user}/starred`)
}
