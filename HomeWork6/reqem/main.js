let btn = document.getElementsByTagName("button")[0];
let container = document.getElementById("container");
let all = document.getElementsByClassName("all")[0];

function add() {
  let box = document.createElement("div");
  box.setAttribute("class", "content");

  let value = document.getElementById("number").value;
  if (value % 2 === 1) {
    let html = `
    <div class="odd">
      <h1>${value}</h1>
    </div>
    `;
    box.innerHTML = html;
  } else {
    let html = `
        <div class="even"><h1>${value}</h1></div>
        `;
    box.innerHTML = html;
  }
  all.appendChild(box);
}

btn.addEventListener("click", add);
