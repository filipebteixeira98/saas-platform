const showMenu = (toggleId, navId) => {
  const toggleElement = document.getElementById(toggleId), navElement = document.getElementById(navId);

  if (toggleElement && navElement) {
    toggleElement.addEventListener('click', () => {
      navElement.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')