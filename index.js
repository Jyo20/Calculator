let keys = document.querySelectorAll("#keyboard");

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", MyCalc);
}
//empty bag for storing result
let bag = "";

function MyCalc() {
  let targetNumber = event.target.innerText;
  if (targetNumber == "C") {
    document.querySelector("#display").innerText = "";
    bag = "";
  } else if (targetNumber == "=") {
    document.querySelector("#display").innerText = eval(bag);
  } else {
    bag = bag + targetNumber;
    document.querySelector("#display").innerText = bag;
  }
}
