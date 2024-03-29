let inp = document.querySelector("input");

inp.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp" || event.key == "U") {
    console.log("character moves upward");
  } else if (event.code == "ArrowDown" || event.key == "D") {
    console.log("character moves Downwards");
  } else if (event.code == "ArrowLeft" || event.key == "R") {
    console.log("character moves to left");
  } else if (event.code == "ArrowRight" || event.key == "L") {
    console.log("character moves to right");
  }
});
