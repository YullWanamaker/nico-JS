const input1 = document.querySelector(".input1");
const content2 = document.querySelector(".content2");
const input2 = document.querySelector(".input2");
const compare = document.querySelector(".compare");
const result = document.querySelector(".result");
const hidden = document.querySelector(".resultTap");

function Game(event) {
  event.preventDefault();

  const Range = input1.value;
  const chose = parseInt(input2.value, 10);
  hidden.classList.remove("hidden");

  let RandomNumber = Math.ceil(Math.random() * parseInt(Range, 10));
  compare.innerText = `you chose ${chose}, the machine chose ${RandomNumber}`;
  if (chose === RandomNumber) {
    result.innerText = "you won!";
  } else {
    result.innerText = "you lost";
  }
}

content2.addEventListener("submit", Game);
