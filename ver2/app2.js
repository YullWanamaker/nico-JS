const loginForm = document.querySelector("#login-form");
const numberInput = document.querySelector("#input");
const firstInput = document.querySelector("#firstInput");
const button = document.querySelector("#key");

function handleinputClick(event) {
  event.preventDefault();
  const number = Math.round(Math.randomm() * firstInput.value);
  if (String(input.value) === String(number)) {
    const span = document.createElement("span");
    span.innerText = `you chose: ${input.value}, the machine chose: ${number}.`;

    const h5 = document.createElement("h5");
    h5.innerText = `you won!`;
    span.appendChild(h5);
    document.body.appendChild(span);
  } else {
    const span = document.createElement("span");
    span.innerText = `you chose: ${input.value}, the machine chose: ${number}.`;
    const h5 = document.createElement("h5");
    h5.innerText = `you lost!`;
    span.appendChild(h5);
    document.body.appendChild(span);
  }

  const inputnumber = numberInput.value;
  localStorage.setItem("inputnumber", inputnumber);
}

numberInput.addEventListener("submit", handleinputClick);
