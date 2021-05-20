function initScrollSuave () {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksInternos.length) {
    function scrollToSection (event) {
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href')
      const section = document.querySelector(href)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    linksInternos.forEach(link => {
      link.addEventListener('click', scrollToSection)
    })
  }
}

initScrollSuave()

function initAnimacaoScroll () {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6

    function animaScroll () {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) section.classList.add('ativo')
        else section.classList.remove('ativo')
      })
    }

    window.addEventListener('scroll', animaScroll)
  }
}

initAnimacaoScroll()

function modal () {
  const modalOverlay = document.querySelector('.modal-overlay')
  const modal = document.querySelector('.modal')
  const cards = document.querySelectorAll('.card')

  for (let card of cards) {
    const cardButton = card.querySelector('.card-button')
    cardButton.addEventListener('click', function (event) {
      event.preventDefault()
      const paginaId = card.getAttribute('id')
      modalOverlay.classList.add('active')
      modalOverlay.querySelector(
        'iframe'
      ).src = `https://romulosous.github.io/${paginaId}`
    })
  }

  document.querySelector('.close-modal').addEventListener('click', function () {
    modal.classList.remove('maximizar')
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
  })

  document.querySelector('.max-modal').addEventListener('click', function () {
    modal.classList.toggle('maximizar')
  })
}

modal()

// function keyboard () {
//   const modalOverlay = document.querySelector('.modal-overlay')
//   const modal = document.querySelector('.modal')

//   function clickX (event) {
//     if (event.key === 'x') {
//       modal.classList.toggle('maximizar')
//       modalOverlay.classList.toggle('active')
//       modalOverlay.querySelector('iframe').src = ''
//     }
//   }

//   window.addEventListener('keydown', clickX)
// }

// keyboard()
