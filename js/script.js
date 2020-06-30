var loginLink = document.querySelector(".callback-form-button");
var loginPopup = document.querySelector(".modal-callback");
var loginClose = document.querySelector(".modal-close");
var mask = document.querySelector(".modal-mask");
var loginForm = document.querySelector(".callback");
var loginLogin = document.querySelector(".callback__name");
var email = document.querySelector(".callback__email");
var message = document.querySelector(".callback__message");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("show-modal");
  mask.classList.add("visible");
  
  if (storage) {
    loginLogin.value = storage;
    email.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("show-modal");
  loginPopup.classList.remove("show-modal");
  mask.classList.remove("visible");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !email.value || !message.value) {
    evt.preventDefault();
    loginPopup.classList.remove("error-modal");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("error-modal");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("show-modal")) {
      evt.preventDefault();
      loginPopup.classList.remove("show-modal");
      loginPopup.classList.remove("show-modal");
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
  dot2.classList.remove("current");
  dot3.classList.remove("current");
  slideText2.classList.remove("slide-current");
  slideText3.classList.remove("slide-current");
  slide.classList.remove("site-wrapper-2");
  slide.classList.remove("site-wrapper-3");

  dot1.classList.add("current");
  slideText1.classList.add("slide-current");
  slide.classList.add("site-wrapper-1");
};

dot2.onclick = function () {
  slide.classList.remove("site-wrapper-1");
  slide.classList.remove("site-wrapper-3");
  dot1.classList.remove("current");
  dot3.classList.remove("current");
  slideText1.classList.remove("slide-current");
  slideText3.classList.remove("slide-current");

  dot2.classList.add("current");
  slideText2.classList.add("slide-current");
  slide.classList.add("site-wrapper-2");
};

dot3.onclick = function () {
  slide.classList.remove("site-wrapper-1");
  slide.classList.remove("site-wrapper-2");
  dot1.classList.remove("current");
  dot2.classList.remove("current");
  slideText1.classList.remove("slide-current");
  slideText2.classList.remove("slide-current");

  dot3.classList.add("current");
  slideText3.classList.add("slide-current");
  slide.classList.add("site-wrapper-3");
};