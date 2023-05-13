let btn = document.getElementById("button");
let ul = document.getElementById("ftuits-list");
let hide = document.getElementById("hide");
let amount = document.getElementById("count");
var amountoffruits = 0;

function showhide() {
  if (ul.classList.contains("hide")) {
    ul.classList.remove("hide");
  } else {
    ul.classList.add("hide");
  }
}

function Add() {
  let item = document.createElement("li");
  let value = document.getElementsByClassName("add")[0].value;
  if (value === "") {
    alert("error");
  } else {
    item.innerText = value;
    ul.appendChild(item);
    amountoffruits++;
  }
}
function show() {
  alert(amountoffruits);
}

btn.addEventListener("click", Add);
amount.addEventListener("click", show);
hide.addEventListener("click", showhide);
