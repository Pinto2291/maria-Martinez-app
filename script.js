'use strict';

/* REVEAL MENU */

$('.nav-toggle-btn').on('click', () => {
  $('#data-navbar').slideDown('slow');
})

/* CLOSE MENU */

$('.nav-toggle-btn').on('click', () => {
  $('#data-navbar').toggleClass('active')
})

$('.navbar-item').on('click', () => {
  $('#data-navbar').toggleClass('active')
})

/* header & back top btn active when scroll down to 100px */

const headerActive = function() {
  if (window.scrollY > 100) {
    $('#header-bottom').addClass("active");
    //backTopBtn.addClass("active");
  } else {
    $('#header-bottom').removeClass("active");
    //backTopBtn.removeClass("active");
  }
}

window.addEventListener('scroll', () => {
  headerActive()
})


/* VIDEO 1:07:35 */

/* filter function */


const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

console.log(lastClickedFilterBtn)

const filter = function(n) {
  lastClickedFilterBtn.classList.remove('active');
  n.classList.add("active");
  lastClickedFilterBtn = n;

  for (let i = 0; i < filterItems.length; i++) {
    if (n.dataset.filterBtn === filterItems[i].dataset.filter ||
      n.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

filterBtns.forEach(item => item.addEventListener('click', () => {
  filter();
}));