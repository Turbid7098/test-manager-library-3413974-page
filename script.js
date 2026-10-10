const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#site-nav')

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!expanded))
  menuButton.querySelector('.sr-only').textContent = expanded ? 'Abrir menú' : 'Cerrar menú'
  navigation.classList.toggle('is-open', !expanded)
})

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.querySelector('.sr-only').textContent = 'Abrir menú'
    navigation.classList.remove('is-open')
  }
})

document.querySelector('#year').textContent = String(new Date().getFullYear())
