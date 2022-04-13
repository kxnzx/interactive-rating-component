const ratingValue = document.getElementById(rating_value);
const submitButton = document.getElementById(submit_button);
const outputValue = document.getElementById(output_value);
console.log(outputValue);

function result() {
  outputValue.innerHTML = ratingValue.value;
}

submitButton.addEventListener("click", result);
