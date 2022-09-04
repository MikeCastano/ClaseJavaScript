let result = 0;
let btn = document.getElementById("btnResult");

btn.onclick = function () {
  getResult();
};

let sumTwoNumbers = function (numberOne, numberTwo) {
  result = numberOne + numberTwo;
  return result;
};

let getResult = function () {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let res = document.getElementById("result");

  res.value = sumTwoNumbers(n1, n2);
};
