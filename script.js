// This tells the browser to pay attention to the following elements:
const cardForm = document.querySelector(".card_form");
const form = document.querySelector("form");
const cardFormMessage = document.querySelector(".card_form_message");
const button = document.querySelector("button");
const radioButton = document.querySelector(".radio_button");

// function doSomething(){}
// This is what the browser should do when the onclick event occurs:
function displayRadioValue() {
  const x = document.getElementsByName("ratings");

  for (i = 0; i < x.length; i++) {
    if (x[i].checked)
      document.getElementById("output_value").innerHTML = +x[i].value;
  }
}

// This tells the browser to listen out for clicks on the Button:
button.addEventListener("click", submit);

// function doSomething(){}
// This is what the browser should do when the click event occurs:
function submit() {
  cardForm.classList.add("hide"); // Add display: none; on specified element
  cardFormMessage.classList.remove("hide"); // Remove display: none; on specified element
}

// Make the radio button grey when clicked (all radio buttons become grey => need to fix this: only the clicked radio button has to become grey)
/*function rate(event) {
  radioButton.forEach((btn) => {
    btn.classList.add("clicked");
  });*/
