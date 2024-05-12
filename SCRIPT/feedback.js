"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelector(".show-modal");

const extraText0 = document.querySelector("#extra-text-0");
const extraText1 = document.querySelector("#extra-text-1");
const extraText2 = document.querySelector("#extra-text-2");

const btnReadMore0 = document.querySelector(".read-more-0");
const btnReadMore1 = document.querySelector(".read-more-1");
const btnReadMore2 = document.querySelector(".read-more-2");

const btnReadLess0 = document.querySelector(".read-less-0");
const btnReadLess1 = document.querySelector(".read-less-1");
const btnReadLess2 = document.querySelector(".read-less-2");

const btnHeart0 = document.querySelector(".heart-0");
const btnHeart1 = document.querySelector(".heart-1");
const btnHeart2 = document.querySelector(".heart-2");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnShowModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnReadMore0.addEventListener("click", function () {
  extraText0.classList.remove("hidden");
  btnReadMore0.classList.add("hidden");
});

btnReadMore1.addEventListener("click", function () {
  extraText1.classList.remove("hidden");
  btnReadMore1.classList.add("hidden");
});

btnReadMore2.addEventListener("click", function () {
  extraText2.classList.remove("hidden");
  btnReadMore2.classList.add("hidden");
});

btnReadLess0.addEventListener("click", function () {
  extraText0.classList.add("hidden");
  btnReadMore0.classList.remove("hidden");
});

btnReadLess1.addEventListener("click", function () {
  extraText1.classList.add("hidden");
  btnReadMore1.classList.remove("hidden");
});

btnReadLess2.addEventListener("click", function () {
  extraText2.classList.add("hidden");
  btnReadMore2.classList.remove("hidden");
});

btnHeart0.addEventListener("click", function () {
  btnHeart0.classList.add("heart-pressed");
  btnHeart0.classList.remove("heart-0");
});

btnHeart1.addEventListener("click", function () {
  btnHeart1.classList.add("heart-pressed");
  btnHeart1.classList.remove("heart-1");
});

btnHeart2.addEventListener("click", function () {
  btnHeart2.classList.add("heart-pressed");
  btnHeart2.classList.remove("heart-2");
});
