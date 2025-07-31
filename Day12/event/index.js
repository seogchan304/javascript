const span = document.querySelector("span");

const input = document.querySelector("input");
input.addEventListener("input", (x) => {
  span.innerHTML = x.target.value.length;
});

const button = document.querySelector("button");
button.addEventListener("click", (x) => {
  x.target.innerHTML = x.target.innerHTML == "😎" ? "😛" : "😎";
  input.type = input.type == "text" ? "password" : "text";
});
