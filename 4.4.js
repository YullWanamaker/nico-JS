const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetion = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
