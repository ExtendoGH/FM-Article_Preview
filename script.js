"use strict";

const button = document.querySelector(`.profile__button`);
const popup = document.querySelector(`.share__popup`);

button.addEventListener(`click`, () => {
  popup.classList.toggle("hidden");
  button.classList.toggle(`profile__button-active`);
});
