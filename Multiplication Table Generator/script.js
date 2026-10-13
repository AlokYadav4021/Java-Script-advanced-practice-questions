// Create a webpage that generates multiplication tables for every number from 1 to the number entered by the user.
// HTML requirements:
// - An input field to enter the maximum number.
// - A button labeled Generate Tables.
// - A <div> to display all multiplication tables.
// Example: If the user enters 3, display:

let number = document.getElementById("number");
let cal = document.getElementById("calculate");
let tabl = document.getElementById("tab");

cal.addEventListener("click", function () {
  let num = Number(number.value);
  let val = [];

  for (let i = 1; i <= 10; i++) {
    val.push(`${num} * ${i} = ${num * i}`);
  }
  tabl.innerHTML = val.join("<br><br>");
});
