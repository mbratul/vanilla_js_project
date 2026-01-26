// set inital value
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targetedBtn = e.currentTarget.classList;
    if (targetedBtn.contains("increase")) {
      count++;
    } else if (targetedBtn.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
