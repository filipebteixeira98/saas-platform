const showMenu = (toggleId, navId) => {
  const toggleElement = document.getElementById(toggleId), navElement = document.getElementById(navId);

  if (toggleElement && navElement) {
    toggleElement.addEventListener('click', () => {
      navElement.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

const navLinksElements = document.querySelectorAll('.nav__link')

function handleToggleMenuWithNavLinks() {
  const navMenuElement = document.getElementById('nav-menu')

  navMenuElement.classList.remove('show-menu')
}

navLinksElements.forEach(navLink => navLink.addEventListener('click', handleToggleMenuWithNavLinks))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
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

window.addEventListener('scroll', scrollActive)

function scrollHeader() {
  const headerElement = document.getElementById('header')

  if (this.scrollY >= 80) {
    headerElement.classList.add('scroll-header')
  } else {
    headerElement.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)