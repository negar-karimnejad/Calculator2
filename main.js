const result = document.querySelector(".result");
const keyboard = document.querySelector(".keyboard");
const remove = document.querySelector(".remove");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

keyboard.addEventListener("click", (e) => {
  result.textContent += e.target.id;
});
remove.addEventListener("click", () => {
  result.textContent = result.textContent.slice(0, -1);
});
reset.addEventListener("click", () => {
  result.textContent = "";
});

equal.addEventListener("click", () => {
  if (result.textContent.includes(".")) {
    result.textContent = eval(result.textContent).toFixed(3);
  } else {
    result.textContent = eval(result.textContent);
  }
});
