// Change The Colors!

const colors = ["red", "blue", "gray", "green", "purple"];

const buttonElement = document.querySelector("#randomColorButton");

buttonElement.addEventListener("click", changeColors);
// buttonElement.addEventListener("click", () => changeColors());
// buttonElement.addEventListener("click", function () {
//   changeColors();
// });

// Arrayden rastgele element seçmek
function changeColors() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.querySelector("#colorName").textContent = colors[randomIndex];
  document.querySelector("body").style.backgroundColor = colors[randomIndex];
}
