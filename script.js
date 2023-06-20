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

const $filterButtons = $('.filter-btn');





/*
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
*/


const filterButtons = document.querySelectorAll('.filter-btn');
console.log(filterButtons)

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

const filterResult = (n) => {
  let x = document.querySelectorAll('.data-filter-option');
  
  if(n == 'todos') n = '';
  
  for(let i = 0; i < x.length; i++){
    RemoveClass(x[i], 'show')
    if (x[i].className.indexOf(n) > -1) AddClass(x[i], "show");
  }
}

let btnContainer = document.querySelector('.tab-filter');
let btns = btnContainer.getElementsByClassName("filter-button");

/*
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/

$('.filter-btn').on('click', (event) => {
  $(event.currentTarget).toggleClass('active');
})