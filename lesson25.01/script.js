// const red = document.querySelector(".red");
// const green = document.querySelector(".green");
// const blue = document.querySelector(".blue");
// const black = document.querySelector(".black");
// const yellow = document.querySelector(".yellow");
// const rectangle = document.querySelector(".rectangle");

// red.addEventListener("click", () => {
//   rectangle.style.backgroundColor = "red";
// });

// green.addEventListener("click", () => {
//   rectangle.style.backgroundColor = "green";
// });

// black.addEventListener("click", () => {
//   rectangle.style.backgroundColor = "black";
// });

// yellow.addEventListener("click", () => {
//   rectangle.style.backgroundColor = "yellow";
// });

// blue.addEventListener("click", () => {
//   rectangle.style.backgroundColor = "blue";
// });

//Task


const addButton = document.querySelector(".addBtn");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

addButton.addEventListener("click", () => {
    if (input.value) {
      const item = document.createElement("li");
      item.innerHTML = input.value;
      list.appendChild(item);
      input.value = "";
    }
  });