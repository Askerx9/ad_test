/* eslint-disable no-unused-vars */
import Swiper from 'swiper'
import 'swiper/swiper.scss'
import ScrollMagic from "scrollmagic"

document.querySelector('#menu').addEventListener('click', function(){
  document.querySelector('nav').classList.toggle('nav--open')
})
document.querySelector('.nav__close').addEventListener('click', function(){
  document.querySelector('nav').classList.toggle('nav--open')
})

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


// Accordion

const accordion_els = document.querySelectorAll(".accordion")


for (let i = 0; i < accordion_els.length; i++) {
  const el = accordion_els[i];

  el.querySelector('.accordion__title').addEventListener('click', function(e) {
    const accordionOpen = document.querySelector('.accordion--open')

    if(el.classList.contains("accordion--open")) {
      el.classList.toggle('accordion--open')
    } else {
      if(accordionOpen) {
        accordionOpen.classList.remove("accordion--open")
      }

      el.classList.toggle('accordion--open')
    }

  })

}

// FORM

// Minimal Javascript (for Edge, IE and select box)
document.addEventListener("change", function(event) {
  let element = event.target;
  if (element && element.matches(".form-element-field")) {
    element.classList[element.value ? "add" : "remove"]("-hasvalue");
  }
});


const input = document.querySelectorAll(".input-container")

for (let i = 0; i < input.length; i++) {
  const el = input[i];
  el.firstElementChild.addEventListener('keyup', function(e) {
    el.classList[el.firstElementChild.value ? "add" : "remove"]('fill')
  })

}

// setup ScrollMagic
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave'
  }
});


//pin the navigation
var pin = new ScrollMagic.Scene({
  triggerElement: '.sticky'
}).setPin('.sticky').addTo(controller);