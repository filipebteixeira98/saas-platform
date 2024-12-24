const handleShowMenu = (toggleId, navId) => {
  const toggleElement = document.getElementById(toggleId), navElement = document.getElementById(navId);

  if (toggleElement && navElement) {
    toggleElement.addEventListener('click', () => {
      navElement.classList.toggle('show-menu')
    })
  }
}

handleShowMenu('nav-toggle', 'nav-menu')

const navLinksElements = document.querySelectorAll('.nav__link')

function handleToggleMenuWithNavLinks() {
  const navMenuElement = document.getElementById('nav-menu')

  navMenuElement.classList.remove('show-menu')
}

navLinksElements.forEach(navLink => navLink.addEventListener('click', handleToggleMenuWithNavLinks))

const sections = document.querySelectorAll('section[id]')

function handleScrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', handleScrollActive)

function handleScrollHeader() {
  const headerElement = document.getElementById('header')

  if (this.scrollY >= 80) {
    headerElement.classList.add('scroll-header')
  } else {
    headerElement.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', handleScrollHeader)

function handleScrollUp() {
  const scrollUp = document.getElementById('scroll-up')

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', handleScrollUp)

const themeButton = document.getElementById('theme-button')

const darkTheme = 'dark-theme'

const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme)

  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)

  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())

  localStorage.setItem('selected-icon', getCurrentIcon())
})