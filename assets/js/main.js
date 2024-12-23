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

navLinksElements.forEach((navLink) => navLink.addEventListener('click', handleToggleMenuWithNavLinks))