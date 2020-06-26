var feedbackLink = document.querySelector(".map__btn");
var feedbackPopup = document.querySelector(".feedback__modal");
var feedbackClose = feedbackPopup.querySelector(".feedback__close");
var feedbackForm = feedbackPopup.querySelector(".feedback__form");
var feedbackLogin = feedbackPopup.querySelector(".feedback__email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  
  if (storage) {
    feedbackLogin.value = storage;
  } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});