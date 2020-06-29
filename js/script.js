var link = document.querySelector(".callback-form-button");
var popup = document.querySelector(".modal-callback");
var mask = document.querySelector(".modal-mask");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=callback-name]");
var email = popup.querySelector("[name=callback-email]");
var message = popup.querySelector("[name=callback-message]");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-modal");
  mask.classList.add("visible");

  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-modal");
  mask.classList.remove("visible");
  popup.classList.remove("error-modal");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("error-modal");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error-modal");
  }
  else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("show-modal")) {
    popup.classList.remove("show-modal");
    popup.classList.remove("error-modal");
    mask.classList.remove("visible");
  }
}
});


var dot1 = document.querySelector(".slide1");
var dot2 = document.querySelector(".slide2");
var dot3 = document.querySelector(".slide3");
var slideText1 = document.querySelector(".slider__item1");
var slideText2 = document.querySelector(".slider__item2");
var slideText3 = document.querySelector(".slider__item3");
var slide = document.querySelector(".site-wrapper");


dot1.onclick = function () {
  dot2.classList.remove('current');
  dot3.classList.remove('current');
  slideText2.classList.remove('slide-current');
  slideText3.classList.remove('slide-current');
  slide.classList.remove('site-wrapper-2');
  slide.classList.remove('site-wrapper-3');

  dot1.classList.add('current');
  slideText1.classList.add('slide-current');
  slide.classList.add('site-wrapper-1');
};

dot2.onclick = function () {
  slide.classList.remove('site-wrapper-1');
  slide.classList.remove('site-wrapper-3');
  dot1.classList.remove('current');
  dot3.classList.remove('current');
  slideText1.classList.remove('slide-current');
  slideText3.classList.remove('slide-current');

  dot2.classList.add('current');
  slideText2.classList.add('slide-current');
  slide.classList.add('site-wrapper-2');
};

dot3.onclick = function () {
  slide.classList.remove('site-wrapper-1');
  slide.classList.remove('site-wrapper-2');
  dot1.classList.remove('current');
  dot2.classList.remove('current');
  slideText1.classList.remove('slide-current');
  slideText2.classList.remove('slide-current');

  dot3.classList.add('current');
  slideText3.classList.add('slide-current');
  slide.classList.add('site-wrapper-3');

};