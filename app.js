const input = document.getElementById("salary");
const output = document.getElementById("output");

let percentage = 10;

document
  .getElementById("percentages")
  .querySelectorAll("input")
  .forEach((input) => {
    input.addEventListener("click", (e) => {
      if (!e.target) return;

      percentage = e.target.value;
    });
  });

function calculate() {
  var salaryResult = Math.round(document.getElementById("salary").value);
  if (!percentage) output.innerText = "Error";

  output.innerText =
    "Your net salary is: $ " +
    Math.round(salaryResult - (salaryResult / 100) * percentage);
}
