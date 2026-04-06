const menuToggle = document.getElementById('menuToggle')
const primaryMenu = document.getElementById('primaryMenu')

if (menuToggle && primaryMenu) {
  const closeMenu = () => {
    primaryMenu.classList.remove('navbar__menu--open')
    menuToggle.setAttribute('aria-expanded', 'false')
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = primaryMenu.classList.toggle('navbar__menu--open')
    menuToggle.setAttribute('aria-expanded', String(isOpen))
  })

  document.addEventListener('click', (event) => {
    if (!primaryMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      closeMenu()
    }
  })
}

const carouselContainers = document.querySelectorAll('.carousel-container')

carouselContainers.forEach((container) => {
  const carouselList = container.querySelector('.carousel-list')
  const prevButton = container.querySelector('.carousel-nav--prev')
  const nextButton = container.querySelector('.carousel-nav--next')

  if (!carouselList || !prevButton || !nextButton) {
    return
  }

  // Updates arrow visibility based on current horizontal position.
  const updateNavButtons = () => {
    const maxScrollLeft = carouselList.scrollWidth - carouselList.clientWidth
    const isAtStart = carouselList.scrollLeft <= 2
    const isAtEnd = carouselList.scrollLeft >= maxScrollLeft - 2

    prevButton.classList.toggle('carousel-nav--hidden', isAtStart)
    nextButton.classList.toggle('carousel-nav--hidden', isAtEnd)
  }

  // Scroll by most of the visible row to feel like a "slide".
  const slideRow = (direction) => {
    const scrollAmount = Math.max(carouselList.clientWidth * 0.8, 220)

    carouselList.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }

  prevButton.addEventListener('click', () => {
    slideRow(-1)
  })

  nextButton.addEventListener('click', () => {
    slideRow(1)
  })

  carouselList.addEventListener('scroll', updateNavButtons)
  window.addEventListener('resize', updateNavButtons)

  updateNavButtons()
})
