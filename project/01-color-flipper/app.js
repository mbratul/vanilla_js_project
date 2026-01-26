const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
  // get random number
  const randomNumber = getRandomRGBColorCode();
  console.log(randomNumber);
  document.body.style.backgroundColor = randomNumber;
  color.innerText = randomNumber;
});
/**
 * get random RGB number for generate random color
 * @returns {Number}
 */
function getRandomRGBColorCode() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}
