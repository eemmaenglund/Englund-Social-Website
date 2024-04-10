const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

var flkty = new Flickity( '.main-carousel', {
  autoPlay: true,
  autoPlay: 1500,
});
