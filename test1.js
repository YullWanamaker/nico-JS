
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");

const superEventHandler = {
  function2: function () {
    title.innerText = "The mouse is here!";
    title.style.color = "#1abc9c";
  },
  function3: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = "#3498db";
  },
  function4:function(){
    title.innerText ="You just resized!"
    title.style.color = "#9b59b6";
  },
  function5:function(){
    title.innerText ="That was a right click!"
    title.style.color = "#e74c3c";
}
}

title.addEventListener("mouseenter", superEventHandler.function2);
title.addEventListener("mouseleave", superEventHandler.function3);
window.addEventListener("resize", superEventHandler.function4);
window.addEventListener("contextmenu", superEventHandler.function5);

