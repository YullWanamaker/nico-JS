const age = parseInt(prompt("How old are you?"));
console.log();

if (isNaN(age)) {
  console.log("please write a number");
} else {
  console.log("thank you for writing your age");
}
