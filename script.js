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

//const backTopBtn = document.querySelector("[data-back-top-btn]");

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


/* filter function */

/*
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);

*/