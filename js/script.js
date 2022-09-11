var r = document.querySelector(":root");
var check = document.querySelector("#checkbox");

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
