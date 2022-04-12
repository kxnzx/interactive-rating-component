"use strict";
// This tells the browser to pay attention to the following elements:
const cardRatingForm = document.querySelector(".card_rating-form"); // Rating Card //
const radioButton = document.querySelectorAll(".radio_button"); // Rating Button //
const cardButton = document.querySelector(".card_button"); // Submit Button //
const cardPopUp = document.querySelector(".card_pop-up"); // Thank You Card //
const cardScore = document.querySelector(".card_score"); // Card Score //
//let rating = 0;
//console.log();

// This tells the browser to listen out for clicks on the Rating Buttons & Submit Button:
cardButton.addEventListener("click", submit);
radioButton.forEach((btn) => {
  btn.addEventListener("click", rate);
});

// function doSomething(){}
// This is what the browser should do when the click event occurs:
function submit() {
  cardRatingForm.classList.add("obscure"); // Add display: none; on the Rating Card
  cardPopUp.classList.remove("obscure"); // Remove display: none; on the Thank You Card
}
// Make the radio button grey when clicked (all radio buttons become grey => need to fix this: only the clicked radio button has to become grey)
function rate(event) {
  radioButton.forEach((btn) => {
    btn.classList.add("clicked_radio_button");
  });

  // How to make the browser remember the value of the clicked radio buttons and loop it back?
}
