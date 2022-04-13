const ratingValue = document.getElementById(rating_value);
const form = document.getElementById(form);
const outputValue = document.getElementById(output_value);
console.log();

function result() {
  outputValue.innerHTML = ratingValue.value;
}

form.addEventListener("submit", result);
