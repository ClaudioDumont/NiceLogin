export function main () {
  const signUpButton = document.getElementById('signUpButton')
  const signInButton = document.getElementById('signInButton')
  const container = document.getElementById('container')

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')
  })

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
  })
}
