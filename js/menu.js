// Selecting elements with class "ham-menu" and "off-screen-menu"
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

// Adding event listener for click on hamMenu to toggle classes
hamMenu.addEventListener("click", () => {
  // showing or hiding the menu on the screen
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});



// Making a new Flickity carousel that plays slides automatically
var flkty = new Flickity( '.main-carousel', {
  autoPlay: true, // Enable autoplay
  autoPlay: 1500, // Set autoplay duration
});
