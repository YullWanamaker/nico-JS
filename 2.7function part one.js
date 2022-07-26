function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(60, 10);
divide(60, 10);

const player = {
  name: "nico",
  sayHello: function (oherPersonName) {
    console.log("hello! " + oherPersonName + " nice to meet you");
  },
};

console.log(player.name);
player.sayHello("lynn");
