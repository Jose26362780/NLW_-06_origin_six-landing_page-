/* Abre e fecha o menu quando clicar no icone  */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

/* quando clicar em algum item do menu, escoder o menu  */

const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

function changeHeaderWhenScroll() {
  /*Mudar o header da pagina quando der scroll */

  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    /*maior que a altura do header  */
    header.classList.add("scroll")
  } else {
    /*menor que a altura do header  */
    header.classList.remove("scroll")
  }
}

/* Testimonial slider swipper carousel */

const swiper = new Swiper(".swiper-container", {
  slidesPerview: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
})

/* Scroll Reveal rolagem suave, 
mostra elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
  reset: true,
})
/* depois de ter criado a variavel 
é colocada as clases como forma de lista que estao no
 html que eu gostaria que fizesse a animacão 
*/

scrollReveal.reveal(
  `
 #home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials ,
 #contact .text, #contact .links,
 footer .brand, footer .social
`,
  { interval: 100 }
)



function backToTop(){
  /* BOTÃO VOLTA PARA O TOP BACK TO TOP */
  const backToTopButton = document.querySelector(".back-to-top")

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

/* When scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll()
  backToTop()

})