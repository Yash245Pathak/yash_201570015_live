const name = document.getElementById("name");
const roll = document.getElementById("roll");
const date = document.getElementById("date");


date = new Date();
date.innerHTML = date;

name.addEventListener("keypress", setName);
name.addEventListener("blur",setName);

function getName() {
    if (localStorage.getItem("myData") === null) {
      name.innerHTML = "[Enter Name]";
    } else {
      name.innerHTML = localStorage.getItem("myData");
    }
}
function setName(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        name.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }

  getName();
