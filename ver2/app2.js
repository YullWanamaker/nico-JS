const loginForm = document.querySelector("#login-form");
const numberInput = document.querySelector("#input");
const button = document.querySelector("#key");

function handleinputClick(event) {
  event.preventDefault();
  console.log(numberInput.value);
}

numberInput.addEventListener("submit", handleinputClick);
button.addEventListener("click, handleinputClick)
