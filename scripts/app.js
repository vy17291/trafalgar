$(".review-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`, 
  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  
});

const toggle = document.querySelector(".menu-toggle");
console.log(toggle);
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
  console.log(menu.classList);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
