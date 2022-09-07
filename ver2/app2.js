const dday = document.querySelector("#dday");

function showdday() {
  const mastime = new Date("2022-12-25");
  const todaytime = new Date();

  const minus = mastime - todaytime;

  const minusday = String(Math.floor(minus / (1000 * 60 * 60 * 24)));

  const minushours = String(
    Math.floor((minus / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");

  const minusminutes = String(Math.floor((minus / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );

  const minusseconds = String(Math.floor((minus / 1000) % 60)).padStart(2, "0");

  dday.innerText = `${minusday}d ${minushours}h ${minusminutes}m ${minusseconds}s`;
}

showdday();
setInterval(showdday, 1000);
