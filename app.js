const input = document.getElementById("salary");
const output = document.getElementById("output");

function calculate() {
  var salaryResult = Math.round(document.getElementById("salary").value);

  if (document.getElementById("a").checked) {
    output.innerText =
      "Your net salary is: $ " + Math.round((salaryResult / 100) * 10);
  } else if (document.getElementById("b").checked) {
    output.innerText =
      "Your net salary is: $ " + Math.round((salaryResult / 100) * 35);
  } else if (document.getElementById("c").checked) {
    output.innerText =
      "Your net salary is: $ " + Math.round((salaryResult / 100) * 50);
  }
}
