var r = document.querySelector(":root");
var check = document.querySelector("#checkbox");

const menu = document.getElementById('menu');
const links = document.getElementById('links');

function myFunction_set() {
  if (checkbox.checked) {
    r.style.setProperty("--main-color", "#f02425");
    r.style.setProperty("--light-color", "#202024");
    r.style.setProperty("--text-color", "#F0EDDA");
  } else {
    r.style.setProperty("--main-color", "#f02425");
    r.style.setProperty("--light-color", "#F0EDDA");
    r.style.setProperty("--text-color", "#202024");
  }
}

function Mostrar(){
  if(links.style.display == "none"){
    links.style.display = "block";
    links.style.display = "flex";
  }else if (links.style.display = "block")
  links.style.display = "none";
}
